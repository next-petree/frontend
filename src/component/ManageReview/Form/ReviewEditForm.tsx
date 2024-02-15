import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import * as S from "./styles";
import { IReview, IReviewImg } from "../../../pages/ManageReview/edit/EditReview";
import ImageDeleteButton from "../../ManageOwnDogs/ImageDeleteButton/ ImageDeleteButton";
import AddImageIcon from "../../ManageOwnDogs/AddImageIcon/AddImageIcon";
import { patch } from "../../../api/api";
import Swal from "sweetalert2";
import alertList from "../../../utils/Swal1";

interface IProp {
    review?: IReview;
}

/**
 * @param reviewId (edit)
 * @RequestBody
 *  body: 
 *  [
 *      title: string,
 *      content: string,
 *      deleteImages: boolean,
 *      reviewImgFiles: string[] => id, fileUrl
 *  ]
 */

const initialReview: IReview = {
    content: "",
    dogId: "",
    dogTypeName: "",
    gender: "",
    id: "", 
    name: "",
    reviewImgId: [],
    title: "",
    writeDate: ""
}

const ReviewEditForm = ({ review }: IProp) => {
    const [review1, setReview1] = useState<IReview>(initialReview);
    const [isOriginalImgDeleted, setIsOriginalImgDeleted] = useState(false);
    const [addButtonClicked, setAddButtonClicked] = useState<boolean>(false);
    const [prevImages, setPrevImages] = useState<IReviewImg[] | undefined>([]);
    const [formImages, setFormImages] = useState<File[]>([]);
    const [file, setFile] = useState<File>();

    const navigate = useNavigate();

    useEffect(() => {
        setReview1(review!);
        setPrevImages(review?.reviewImgId!);
    }, [review])

    console.log(review1);
    console.log(prevImages);
    

    const handleDeleteImage = (index: number) => {
        setPrevImages(prevImages?.filter((img, i) => {
            return i !== index
        }))
    }

    useEffect(() => {
        if(prevImages && prevImages.length > 0) {
            /**
             * 
             * PrevImage[i].id === review1.reviewImgId[0].id
             * 
             */
            if( review1.reviewImgId ) {
                const ids: number[] = [];

                review1.reviewImgId.forEach((img) => {
                    ids.push(img.id);
                })

                if (ids.length > 0) {
                    const filteredPrevImg = prevImages.filter((prev) => {
                        return !ids.includes(prev.id);
                    })
                    setPrevImages(filteredPrevImg);
                }
            }
        }        
    }, [file]);

    const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        
        if(!isOriginalImgDeleted) {
            const answer = await Swal.fire({
                ...alertList.doubleCheckMessage("사진을 추가하시면 기존 이미지는 삭제됩니다. 삭제하시겠습니까?"),
                width: "350px",
              });

            if (answer.isConfirmed) {
                setIsOriginalImgDeleted(true);
                const inputFile = e.target?.files?.[0];

                setFile(inputFile);
                
                if (inputFile) {
                    const imageUrl = URL.createObjectURL(inputFile);
                    if(prevImages && prevImages.length > 0) {    
                        let lastId = prevImages?.[prevImages.length - 1].id;
                    
                        setPrevImages([...prevImages, { id: ++lastId!, fileUrl: imageUrl}]);
                        setFormImages([...formImages, inputFile]);
                    } else {
                        let id = 1;
                        let arr = [{id: id++, fileUrl:imageUrl}];
                        setPrevImages(arr);
                        setFormImages([...formImages, inputFile]);
                    }
                }
            } else {
                return;
            }
        } else {
            const inputFile = e.target?.files?.[0];

            setFile(inputFile);

            if (inputFile) {
                const imageUrl = URL.createObjectURL(inputFile);
                if(prevImages && prevImages.length > 0) {    
                    let lastId = prevImages?.[prevImages.length - 1].id;
                
                    setPrevImages([...prevImages, { id: ++lastId!, fileUrl: imageUrl}]);
                    setFormImages([...formImages, inputFile]);
                } else {
                    let id = 1;
                    let arr = [{id: id++, fileUrl:imageUrl}];
                    setPrevImages(arr);
                    setFormImages([...formImages, inputFile]);
                }
            }
        }

        


        

    //       if (answer.isConfirmed) {
    //         const inputFile = e.target?.files?.[0];

    //         setFile(inputFile);

    //         if (inputFile) {
    //             const imageUrl = URL.createObjectURL(inputFile);
    //             if(prevImages && prevImages.length > 0) {    
    //                 let lastId = prevImages?.[prevImages.length - 1].id;
                
    //                 setPrevImages([...prevImages, { id: ++lastId!, fileUrl: imageUrl}]);
    //                 setFormImages([...formImages, inputFile]);
    //             } else {
    //                 let id = 1;
    //                 let arr = [{id: id++, fileUrl:imageUrl}];
    //                 setPrevImages(arr);
    //                 setFormImages([...formImages, inputFile]);
    //             }
    //         }
    //    }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        formDataToSend.append('title',review1.title);
        formDataToSend.append('content',review1.content);

        if (formImages.length > 0) {
            formDataToSend.append('deleteImages', JSON.stringify(true));
        } else {
            formDataToSend.append('deleteImages', JSON.stringify(false));
        }
        
        formImages.forEach((file) => {            
            formDataToSend.append(`reviewImgFiles`, file);
         });        

        try {
            const result = await patch(`${process.env.REACT_APP_API_URL}/adopter/review/${review1.id}`, formDataToSend);
            if(result.status === 200) {
                Swal.fire({
                    ...alertList.successMessage("수정되었습니다"),
                    width: "350px",
                  });
                navigate(-1);
            }
            
        } catch (error) {
            console.error('에러 발생: ',error);
        }
    }

    return (
        <S.MergeContainer>
        <S.Wrapper>
            <S.ReturnBtnContainer>
                <S.ReturnButton onClick={() => navigate(-1)}>
                    <IoIosArrowBack />
                </S.ReturnButton>
                <S.ReturnBtnText>이전 페이지로</S.ReturnBtnText>
            </S.ReturnBtnContainer>
            <S.InnerContainer>
                <S.Title>분양후기 관리</S.Title>
                <S.Form onSubmit={handleSubmit} id="reviewSubmit">
                    <S.TopInputContainer>
                        <S.LeftInputContainer>
                            <S.InputContainer>
                                <S.InputTitle>제목</S.InputTitle>
                                <S.Input
                                    placeholder="제목을 작성하세요"
                                    value={review1?.title}
                                    onChange={(e) => setReview1({...review1!, title: e.target.value})}
                                />
                            </S.InputContainer>
                            <S.InputContainer>
                                <S.InputTitle>성별</S.InputTitle>
                                <S.Input
                                    placeholder="수컷"
                                    value={
                                        review1 && review1?.gender === "MALE"
                                            ? "수컷"
                                            : "암컷"
                                    }
                                    disabled
                                />
                            </S.InputContainer>
                        </S.LeftInputContainer>

                        <S.RightInputContainer>
                            <S.InputContainer>
                                <S.InputTitle>견종</S.InputTitle>
                                <S.Input
                                    placeholder="포메라니안"
                                    value={review1?.dogTypeName}
                                    disabled
                                />
                            </S.InputContainer>
                            <S.InputContainer>
                                <S.InputTitle>강아지 이름</S.InputTitle>
                                <S.Input
                                    placeholder="루카스"
                                    value={review1?.name}
                                    disabled
                                />
                            </S.InputContainer>
                        </S.RightInputContainer>
                    </S.TopInputContainer>
                    <S.ReviewInputContainer>
                        <S.InputTitle>분양 후기 작성</S.InputTitle>
                        <S.Textarea
                            placeholder="분양후기를 작성해주세요."
                            value={review1?.content}
                            onChange={(e) => setReview1({...review1!, content: e.target.value})}
                        />
                        <S.TextLength>{review1?.content ? review1?.content.length : 0}/2000</S.TextLength>
                    </S.ReviewInputContainer>
                </S.Form>
                <S.ImageUploaderContainer>
                    <S.ImageUploaderTitle>
                        이미지 업로드({`${prevImages?.length}/4`})
                    </S.ImageUploaderTitle>
                    <S.ImageUploaderFlexBox>
                    {prevImages?.map((img, index) => (
                            <S.ImageUploaderBox key={img.id}>
                                <ImageDeleteButton onClick={() => handleDeleteImage(index)
                                }/>
                                <S.Image src={img.fileUrl}/>
                            </S.ImageUploaderBox>
                        ))}
                        {prevImages && prevImages?.length < 4 &&  <S.ImageUploaderBox>
                            <S.Container htmlFor="file" onClick={() => setAddButtonClicked(!addButtonClicked)}>
                            <S.ImageInput type="file" accept="image/*" id="file" onChange={(e) => handleAddImage(e)}/>
                            <AddImageIcon />
                            </S.Container>
                        </S.ImageUploaderBox>}
                    </S.ImageUploaderFlexBox>
                </S.ImageUploaderContainer>
            </S.InnerContainer>
        </S.Wrapper>
        <S.SubmitButton type="submit" form="reviewSubmit">저장</S.SubmitButton>
        </S.MergeContainer>
    );
};

export default ReviewEditForm;
