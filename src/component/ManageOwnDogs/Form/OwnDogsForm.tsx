import { useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { IoIosArrowBack } from "react-icons/io";

import "react-datepicker/dist/react-datepicker.css";

import * as S from "./styles";
import CustomInput from "../CustomInput/CustomInput";
import { IDogInfo } from "../../../pages/ManageOwnDogs/edit/EditOwnDogs";

const CustomDate = styled(DatePicker)`
    width: 80%;
    height: 48px;
    background: #f5f5f5;
    border-radius: 12px;
    padding: 0 15px;
    border: none;

    font-family: Noto Sans KR;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: -0.03em;
    text-align: left;
    color: #939393;

    .react-datepicker & {
        width: 800px;
        height: 200px;
    }
`;

interface IProps {
    dog?: IDogInfo;
}

const OwnDogsForm = ({ dog }: IProps) => {
    const [fetchedDog, setFetchedDog] = useState<IDogInfo>();
    const [signicant, setSignificant] = useState<string>();

    useEffect(() => {
        setFetchedDog(dog);
        setSignificant(fetchedDog?.management);
    }, [dog]);

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
                        <S.LeftInputContainer>
                            <S.InputContainer>
                                <S.InputTitle>강아지 이름</S.InputTitle>
                                <S.Input
                                    placeholder="강아지 이름을 작성하세요"
                                    value={fetchedDog?.name}
                                />
                            </S.InputContainer>
                            <S.InputContainer>
                                <S.InputTitle>견종</S.InputTitle>
                                <S.Input
                                    placeholder="포메라니안"
                                    value={fetchedDog?.dogType}
                                />
                            </S.InputContainer>
                        </S.LeftInputContainer>
                        <S.RightInputContainer>
                            <S.InputContainer>
                                <S.InputTitle>출생일</S.InputTitle>
                                <CustomDate
                                    selected={
                                        fetchedDog
                                            ? new Date(fetchedDog?.birthDate)
                                            : new Date()
                                    }
                                    onChange={(date) => console.log(date)}
                                    disabled
                                />
                            </S.InputContainer>
                            <S.InputContainer>
                                <S.InputTitle>성별</S.InputTitle>
                                <CustomInput
                                    width={"84%"}
                                    height="48px"
                                    value={
                                        fetchedDog ? fetchedDog.gender : "MALE"
                                    }
                                    genderArr={["FEMAIL", "MALE"]}
                                />
                            </S.InputContainer>

                            <S.InputContainer>
                                <S.InputTitle>분양상태</S.InputTitle>
                                <CustomInput
                                    width={"84%"}
                                    height="48px"
                                    value={
                                        fetchedDog?.status
                                            ? fetchedDog?.status
                                            : "AVAILABLE"
                                    }
                                    statusArr={["DONE", "AVAILABLE"]}
                                />
                            </S.InputContainer>
                        </S.RightInputContainer>
                    </S.TopInputContainer>
                    <S.ReviewInputContainer>
                        <S.InputTitle>기타사항</S.InputTitle>
                        <S.Textarea
                            value={signicant}
                            onChange={(e) => setSignificant(e.target.value)}
                            placeholder="견종의 특이사항에 대해 작성해주세요"
                        />
                        <S.TextLength>
                            {signicant ? signicant.length : 0}/2000
                        </S.TextLength>
                    </S.ReviewInputContainer>
                </S.Form>
                <S.ImageUploaderContainer>
                    <S.ImageUploaderTitle>
                        이미지 업로드({`${fetchedDog?.dogImgUrl.length}/4`})
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
