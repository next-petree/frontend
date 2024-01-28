import { useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { IoIosArrowBack } from "react-icons/io";

import "react-datepicker/dist/react-datepicker.css";

import * as S from "./styles";
import CustomInput from "../CustomInput/CustomInput";
import { useNavigate } from "react-router-dom";
import DateInput from "../CustomInput/DateInput";

const CustomDate = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    gap: 9%;
`;

interface IProps {
    dog?: IDogInfo;
}

export interface IDogInfo {
    birthDate: string;
    dogImgUrl: string[];
    dogType: string;
    gender: string;
    id: number;
    management: string;
    name: string;
    status: string;
}

const initialState:IDogInfo = {
    birthDate: "",
    dogImgUrl: [],
    dogType: "",
    gender: "",
    id: -1,
    management: "",
    name: "",
    status: ""
}

export interface IData {
    status: string;
    data: IDogInfo;
}

interface IDate {
    year:number,
    month: number,
    day: number
}

const OwnDogsForm = ({dog}: IProps) => {
    const [dog1, setDog1] = useState<IDogInfo>(initialState);
    const [date, setDate ] = useState<IDate>({
        year: 2001,
        month: 1,
        day: 1
    })

    const naviage = useNavigate();

    useEffect(() => {
        setDog1(dog!);
        handleDate(dog1?.birthDate!);
    }, [dog])

    const handleDate = (dateString: string) => {
        if(dateString !== undefined) {
            const dateObject = new Date(dateString);

            setDate({
                year: dateObject.getFullYear(),
                month: (dateObject.getMonth() + 1),
                day: dateObject.getDate()
            })
        }
    } 
    
    const handleDay = (day: number) => {
        setDate({...date, day})
    }
    const handleMonth = (month: number) => {
        setDate({...date, month})
    }
    const handleYear = (year: number) => {
        setDate({...date, year})
    }

    useEffect(()=>{
        console.log('IN Form: ', date);
        
    },[date])

    const handleSubmit = () => {}
    
    return (
        <S.Wrapper>
            <S.ReturnBtnContainer onClick={() => naviage(-1)}>
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
                                    value={dog1?.name}
                                    onChange={(e) => setDog1({...dog1!, name: e.target.value})}
                                />
                            </S.InputContainer>
                            <S.InputContainer>
                                <S.InputTitle>견종</S.InputTitle>
                                <S.Input
                                    placeholder="포메라니안"
                                    value={dog1?.dogType}
                                    onChange={(e) => setDog1({...dog1!, dogType: e.target.value})}
                                />
                            </S.InputContainer>
                        </S.LeftInputContainer>
                        <S.RightInputContainer>
                            <S.InputContainer>
                                <S.InputTitle>출생일</S.InputTitle>
                                <CustomDate>
                                <DateInput
                                    placeHolder="년"
                                    width={"22%"}
                                    height="48px"
                                    originalVal={date.year}
                                    onClick={handleYear}
                                />
                                <DateInput
                                    placeHolder="월"
                                    width={"22%"}
                                    height="48px"
                                    originalVal={date.month}
                                    onClick={handleMonth}
                                />
                                <DateInput
                                    placeHolder="일"
                                    width={"22%"}
                                    height="48px"
                                    originalVal={date.day}
                                    onClick={handleDay}
                                />
                                </CustomDate>
                                
                            </S.InputContainer>
                            <S.InputContainer>
                                <S.InputTitle>성별</S.InputTitle>
                                <CustomInput
                                    width={"84%"}
                                    height="48px"
                                    value={
                                        dog1?.gender ? dog1?.gender : "MALE"
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
                                        dog1?.status
                                            ? dog1?.status
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
                            value={dog1?.management}
                            // onChange={(e) => setDog({...dog, management: e.target.value})}
                            placeholder="견종의 특이사항에 대해 작성해주세요"
                            onChange={(e) => setDog1((prev) => ({...prev, management: e.target.value}))}
                        />
                        <S.TextLength>
                            {dog1?.management ? dog1?.management?.length : 0}/2000
                        </S.TextLength>
                    </S.ReviewInputContainer>
                </S.Form>
                <S.ImageUploaderContainer>
                    <S.ImageUploaderTitle>
                        이미지 업로드({`${dog1?.dogImgUrl ? dog1?.dogImgUrl?.length : 0}/4`})
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
