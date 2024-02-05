import * as S from './styles';
import { IoIosArrowBack } from "react-icons/io";
import ImageDeleteButton from "../../ManageOwnDogs/ImageDeleteButton/ ImageDeleteButton";
import AddImageIcon from "../../ManageOwnDogs/AddImageIcon/AddImageIcon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { post } from '../../../api/api';

import Swal from "sweetalert2";
import alertList from "../../../utils/Swal1";

/**
 * 
 * {
    "dogId": number,
    "title": string,
    "content": string
    "reviewImgFiles": string[]
    name: string
    dogId: number
    writeDate: string
  }
 *   
 */

  interface ICreateReview {
    dogId: string;
    title: string;
    content: string;
    reviewImgFiles: File[];
  }

  const initialReview: ICreateReview = {
    dogId: "3",
    title: "",
    content: "",
    reviewImgFiles: []
  }
  
const ReviewCreateForm = () => {
    const [review1, setReview1] = useState<ICreateReview>(initialReview);
    const [addButtonClicked, setAddButtonClicked] = useState<boolean>(false);
    const [prevImages, setPrevImages] = useState<string[]>([]);

    const navigate = useNavigate();

    const handleDeleteImage = (index: number) => {
        setPrevImages(prevImages?.filter((img, i) => {
            return i !== index
        }))
    }

    const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target?.files?.[0];
        const {files} = e.target;
            if (newFile) {
                const imageUrl = URL.createObjectURL(newFile);
                if(prevImages?.length! > 0 ) {
                    setPrevImages([...prevImages!, imageUrl])
                    if(files) {
                        setReview1({...review1, ["reviewImgFiles"]: [...review1["reviewImgFiles"], ...Array.from(files)]});
                    }
                    
                } else {
                    let arr = [imageUrl];
                    setPrevImages(arr);

                    if(files) {
                        setReview1({...review1, ["reviewImgFiles"]: [...review1["reviewImgFiles"], ...Array.from(files)]});
                    }
                }    
            } 
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formDataToSend = new FormData();

        formDataToSend.append('title',review1.title);
        formDataToSend.append('content',review1.content);
        formDataToSend.append('dogId', review1.dogId.toString());


        review1.reviewImgFiles.forEach((file) => {
            formDataToSend.append(`reviewImgFiles`, file);
         });

        try {
            const response = await post(`${process.env.REACT_APP_API_URL}adopter/review`, formDataToSend)
            if(response.status === 200) {
                Swal.fire({
                    ...alertList.successMessage("리뷰가 생성되었습니다"),
                    width: "350px",
                  });
                navigate('/mypage/review/1');
            }
        } catch(e) {
            console.error('에러 발생:', e);
        }
    }

  return (
    <S.MergeContainer>
        <S.Wrapper>
            <S.ReturnBtnContainer>
                <S.ReturnButton onClick={() => navigate('/mypage/review/1')}>
                    <IoIosArrowBack />
                </S.ReturnButton>
                <S.ReturnBtnText>이전 페이지로</S.ReturnBtnText>
            </S.ReturnBtnContainer>
            <S.InnerContainer>
                <S.Title>분양후기 관리</S.Title>
                <S.Form onSubmit={handleSubmit} id="reviewSubmit" >
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
                                    disabled
                                />
                            </S.InputContainer>
                        </S.LeftInputContainer>

                        <S.RightInputContainer>
                            <S.InputContainer>
                                <S.InputTitle>견종</S.InputTitle>
                                <S.Input
                                    placeholder="포메라니안"
                                    disabled
                                />
                            </S.InputContainer>
                            <S.InputContainer>
                                <S.InputTitle>강아지 이름</S.InputTitle>
                                <S.Input
                                    placeholder="루카스"
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
                            <S.ImageUploaderBox key={index}>
                                <ImageDeleteButton onClick={() => handleDeleteImage(index)
                                }/>
                                <S.Image src={img}/>
                            </S.ImageUploaderBox>
                        ))}
                        <S.ImageUploaderBox>
                            <S.Container htmlFor="file" onClick={() => setAddButtonClicked(!addButtonClicked)}>
                            <S.ImageInput name='reviewImgFiles' type="file" accept="image/*" id="file" onChange={(e) => handleAddImage(e)} />
                            <AddImageIcon />
                            </S.Container>
                        </S.ImageUploaderBox>
                    </S.ImageUploaderFlexBox>
                </S.ImageUploaderContainer>
            </S.InnerContainer>
        </S.Wrapper>
        <S.SubmitButton type="submit" form="reviewSubmit">저장</S.SubmitButton>
        </S.MergeContainer>
  )
}

export default ReviewCreateForm