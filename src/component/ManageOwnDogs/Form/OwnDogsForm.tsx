import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";

import CustomInput from "../CustomInput/CustomInput";
import * as S from "./styles";

const OwnDogsForm = () => {
    return (
        <S.Wrapper>
            <S.ReturnBtnContainer>
                <S.ReturnButton>
                    <IoIosArrowBack />
                </S.ReturnButton>
                <S.ReturnBtnText>이전 페이지로</S.ReturnBtnText>
            </S.ReturnBtnContainer>
            <S.InnerContainer>
                <S.Title>보유견종 글쓰기</S.Title>
                <S.Form>
                    <S.TopInputContainer>
                        <S.InputContainer>
                            <S.InputTitle>강아지 이름</S.InputTitle>
                            <S.Input placeholder="강아지 이름을 작성하세요" />
                        </S.InputContainer>
                        <S.InputContainer>
                            <S.InputTitle>출생일</S.InputTitle>
                            <S.DOBInputContainer>
                                <CustomInput
                                    width={"calc((100% / 3) - 20px)"}
                                    height="48px"
                                    placeHolder="년"
                                />
                                <CustomInput
                                    width={"calc((100% / 3) - 20px)"}
                                    height="48px"
                                    placeHolder="월"
                                />
                                <CustomInput
                                    width={"calc((100% / 3) - 20px)"}
                                    height="48px"
                                    placeHolder="일"
                                />
                            </S.DOBInputContainer>
                        </S.InputContainer>
                        <S.InputContainer>
                            <S.InputTitle>견종</S.InputTitle>
                            <S.Input placeholder="포메라니안" />
                        </S.InputContainer>
                        <S.InputContainer>
                            <S.InputTitle>성별</S.InputTitle>
                            <CustomInput
                                width={"96%"}
                                height="48px"
                                placeHolder="수컷"
                            />
                        </S.InputContainer>

                        <S.InputContainer>
                            <S.InputTitle>분양상태</S.InputTitle>
                            <CustomInput
                                width={"96%"}
                                height="48px"
                                placeHolder="선택해주세요"
                            />
                        </S.InputContainer>
                    </S.TopInputContainer>
                    <S.ReviewInputContainer>
                        <S.InputTitle>분양 후기 작성</S.InputTitle>
                        <S.Textarea placeholder="분양후기를 작성해주세요." />
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

export default OwnDogsForm;
