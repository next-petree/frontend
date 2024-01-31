import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import * as S from "./styles";
import { IReview, IReviewImg } from "../../../pages/ManageReview/edit/EditReview";
import ImageDeleteButton from "../../ManageOwnDogs/ImageDeleteButton/ ImageDeleteButton";
import AddImageIcon from "../../ManageOwnDogs/AddImageIcon/AddImageIcon";
import { patch } from "../../../api/api";

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
    const [addButtonClicked, setAddButtonClicked] = useState<boolean>(false);
    const [prevImages, setPrevImages] = useState<IReviewImg[] | undefined>([]);
    const [formImages, setFormImages] = useState<File[]>([]);

    const naviagate = useNavigate();

    useEffect(() => {
        setReview1(review!);
        setPrevImages(review?.reviewImgId!);
    }, [review])

    const handleDeleteImage = (index: number) => {
        setPrevImages(prevImages?.filter((img, i) => {
            return i !== index
        }))
    }

    const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (prevImages && prevImages?.length > 0) {
            alert("image deleted")
            setPrevImages([]);
        }

        const file = e.target?.files?.[0];
        const {files} = e.target;
            
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                if(prevImages?.length! > 0) {
                    let lastId = prevImages?.[prevImages.length - 1].id;
                
                    setPrevImages([...prevImages!, { id: ++lastId!, fileUrl: imageUrl}]);
                    if(files) {
                        setFormImages([...formImages, files[0]]);
                    }
                } else {
                    let id = 1;
                    let arr = [{id: id++, fileUrl:imageUrl}];
                    setPrevImages(arr);
                    if(files) {
                        setFormImages([...formImages, files[0]]);
                    }
                }    
            }
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
            const result = await patch(`${process.env.REACT_APP_API_URL}adopter/review/${review1.id}`, formDataToSend, {headers: {'Content-Type': 'application/json'}});
            console.log('응답 결과: ', result.data);
            
        } catch (error) {
            console.error('에러 발생: ',error);
        }
    }

    return (
        <S.MergeContainer>
        <S.Wrapper>
            <S.ReturnBtnContainer>
                <S.ReturnButton onClick={() => naviagate(-1)}>
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
                                    // onChange={(e) => setReview1({...review1!, dogTypeName: e.target.value})}
                                    disabled
                                />
                            </S.InputContainer>
                            <S.InputContainer>
                                <S.InputTitle>강아지 이름</S.InputTitle>
                                <S.Input
                                    placeholder="루카스"
                                    value={review1?.name}
                                    // onChange={(e) => setReview1({...review1!, name: e.target.value})}
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
                        <S.ImageUploaderBox>
                            <S.Container htmlFor="file" onClick={() => setAddButtonClicked(!addButtonClicked)}>
                            <S.ImageInput type="file" accept="image/*" id="file" onChange={(e) => handleAddImage(e)}/>
                            <AddImageIcon />
                            </S.Container>
                        </S.ImageUploaderBox>
                    </S.ImageUploaderFlexBox>
                </S.ImageUploaderContainer>
            </S.InnerContainer>
        </S.Wrapper>
        <S.SubmitButton type="submit" form="reviewSubmit">저장</S.SubmitButton>
        </S.MergeContainer>
    );
};

export default ReviewEditForm;
