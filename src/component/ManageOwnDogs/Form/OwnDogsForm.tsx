import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import DatePicker from "react-datepicker";
import { IoIosArrowBack } from "react-icons/io";

// import "react-datepicker/dist/react-datepicker.css";

import * as S from "./styles";
import CustomInput from "../CustomInput/CustomInput";
import { useNavigate } from "react-router-dom";
import DateInput from "../CustomInput/DateInput";
import ImageDeleteButton from "../ImageDeleteButton/ ImageDeleteButton";
import AddImageIcon from "../AddImageIcon/AddImageIcon";
import { patch, post } from "../../../api/api";

const MergeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SubmitButton = styled.button`
  width: 240px;
  height: 52px;
  border-radius: 16px;
  border: none;
  background: #4ec1bf;

  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  margin-top: 30px;
  cursor: pointer;
`;

const CustomDate = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    gap: 9%;
`;

const Container = styled.label`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:12px;
    background-color: #f5f5f5;
    cursor: pointer;
`

const Input = styled.input`
    display: none;
`

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
    });
    const [addButtonClicked, setAddButtonClicked] = useState<boolean>(false);
    const [prevImages, setPrevImages] = useState<string[] | undefined>();

    const naviage = useNavigate();

    /*
        수정 시 강아지 정보를 저장하기 위한 useEffects
    */
    useEffect(() => {
        setDog1(dog!);
        handleDate(dog?.birthDate!);
        setPrevImages(dog?.dogImgUrl!);
    }, [dog])

    /*
        Handle Date
    */
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

    /*
        Handle Image
    */
        const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target?.files?.[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                setPrevImages([...prevImages!, imageUrl]);
            }
        }
    
        const handleDeleteImage = (index: number) => {
            setPrevImages(prevImages?.filter((img, i) => {
                return i !== index;
            }))
        }

    /*
        Submit 할 때 create | edit 인지 확인 (dog1.id)
    */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('click');
        
        const dateForSubmit = new Date(date.year + date.month + date.day);
        setDog1({...dog1, dogImgUrl: prevImages!, birthDate: dateForSubmit.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })})

        if(dog1.id === undefined) {
            try {
                const res = await post(`${process.env.REACT_APP_API_URL}/breeder/dogs`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify(dog1),
                });
                console.log(res);
            } catch(error) {
                console.error('ERROR: ', error);
                
            }
            
        } else {
            try {
                await patch(`/breeder/dogs/${dog1.id}`, {
                    dog1
                }).then((res) => console.log(res)
                ).catch((err) => console.error(err)
                );
                
            } catch (error) {
                console.error('ERROR: ', error);
            }   
        }
    }

    return (
        <MergeContainer>
        <S.Wrapper>
            <S.ReturnBtnContainer onClick={() => naviage(-1)}>
                <S.ReturnButton>
                    <IoIosArrowBack />
                </S.ReturnButton>
                <S.ReturnBtnText>이전 페이지로</S.ReturnBtnText>
            </S.ReturnBtnContainer>
            <S.InnerContainer>
                <S.Title>보유견종 글쓰기</S.Title>
                <S.Form id="dogSubmit" onSubmit={handleSubmit}>
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
                                    value={date.year}
                                    onClick={handleYear}
                                />
                                <DateInput
                                    placeHolder="월"
                                    width={"22%"}
                                    height="48px"
                                    value={date.month}
                                    onClick={handleMonth}
                                />
                                <DateInput
                                    placeHolder="일"
                                    width={"22%"}
                                    height="48px"
                                    value={date.day}
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
                        이미지 업로드({`${prevImages === undefined ? 0 : prevImages?.length}/4`})
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
                            <Container htmlFor="file" onClick={() => setAddButtonClicked(!addButtonClicked)}>
                            <Input type="file" accept="image/*" id="file" onChange={(e) => handleAddImage(e)}/>
                            <AddImageIcon />
                            </Container>
                        </S.ImageUploaderBox>
                    </S.ImageUploaderFlexBox>
                </S.ImageUploaderContainer>
            </S.InnerContainer>
        </S.Wrapper>
        <SubmitButton type="submit" form="dogSubmit">저장</SubmitButton>
    </MergeContainer>
    );
};

export default OwnDogsForm;
