import { IoIosArrowBack } from "react-icons/io";

import * as S from "./styles";
import { IReview } from "../../../pages/ManageReview/edit/EditReview";

interface IProp {
    review?: IReview;
}

const ReviewForm = ({ review }: IProp) => {
    return (
        <S.Wrapper>
            <S.ReturnBtnContainer>
                <S.ReturnButton>
                    <IoIosArrowBack />
                </S.ReturnButton>
                <S.ReturnBtnText>이전 페이지로</S.ReturnBtnText>
            </S.ReturnBtnContainer>
            <S.InnerContainer>
                <S.Title>분양후기 관리</S.Title>
                <S.Form>
                    <S.TopInputContainer>
                        <S.LeftInputContainer>
                            <S.InputContainer>
                                <S.InputTitle>제목</S.InputTitle>
                                <S.Input
                                    placeholder="제목을 작성하세요"
                                    value={review?.title}
                                />
                            </S.InputContainer>
                            <S.InputContainer>
                                <S.InputTitle>성별</S.InputTitle>
                                <S.Input
                                    placeholder="수컷"
                                    value={
                                        review && review?.gender === "MALE"
                                            ? "수컷"
                                            : "암컷"
                                    }
                                />
                            </S.InputContainer>
                        </S.LeftInputContainer>

                        <S.RightInputContainer>
                            <S.InputContainer>
                                <S.InputTitle>견종</S.InputTitle>
                                <S.Input
                                    placeholder="포메라니안"
                                    value={review?.dogTypeName}
                                />
                            </S.InputContainer>
                            <S.InputContainer>
                                <S.InputTitle>강아지 이름</S.InputTitle>
                                <S.Input
                                    placeholder="루카스"
                                    value={review?.name}
                                />
                            </S.InputContainer>
                        </S.RightInputContainer>
                    </S.TopInputContainer>
                    <S.ReviewInputContainer>
                        <S.InputTitle>분양 후기 작성</S.InputTitle>
                        <S.Textarea
                            placeholder="분양후기를 작성해주세요."
                            value={review?.content}
                        />
                        <S.TextLength>0/2000</S.TextLength>
                    </S.ReviewInputContainer>
                </S.Form>
                <S.ImageUploaderContainer>
                    <S.ImageUploaderTitle>
                        이미지 업로드(0/4)
                    </S.ImageUploaderTitle>
                    <S.ImageUploaderFlexBox>
                        <S.ImageUpoaderbox>
                            <S.ImageBox />
                            <S.ImageUploaderButton>
                                업로드
                            </S.ImageUploaderButton>
                        </S.ImageUpoaderbox>
                    </S.ImageUploaderFlexBox>
                </S.ImageUploaderContainer>
            </S.InnerContainer>
        </S.Wrapper>
    );
};

export default ReviewForm;
