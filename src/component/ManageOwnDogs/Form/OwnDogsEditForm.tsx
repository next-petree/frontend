import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import * as S from "./styles";
import CustomInput from "../CustomInput/CustomInput";

import DateInput from "../CustomInput/DateInput";
import ImageDeleteButton from "../ImageDeleteButton/ ImageDeleteButton";
import AddImageIcon from "../AddImageIcon/AddImageIcon";
import { patch } from "../../../api/api";
interface IProps {
    dog?: IDogInfo;
}

export interface IDogInfo {
    birthDate: string;
    dogImgUrl: string[];
    dogType: string;
    gender: IGender;
    id: number;
    management: string;
    name: string;
    status: IStatus;
}

export interface IStatus {
    status: 'AVAILABLE' | 'DONE';
}

export interface IGender {
    gender: 'FEMALE' | 'MALE';
}


const initialState:IDogInfo = {
    birthDate: "",
    dogImgUrl: [],
    dogType: "",
    gender: {gender: 'FEMALE'},
    id: -1,
    management: "",
    name: "",
    status: { status: 'AVAILABLE' }
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

/**
 * 
 * @param id
 * @RequestBody 
 * gender
 * birthDate
 * name
 * management
 * status
 * imgNameToDelete: string[]
 * uploadImage: boolean
 * dogImgFiles
 * 
 */

const OwnDogsEditForm = ({dog}: IProps) => {
    const [dog1, setDog1] = useState<IDogInfo>(initialState);
    const [date, setDate ] = useState<IDate>({
        year: 2001,
        month: 1,
        day: 1
    });
    const [addButtonClicked, setAddButtonClicked] = useState<boolean>(false);
    const [prevImages, setPrevImages] = useState<string[]>([]);
    const [formDataFile, setFormDataFile] = useState<File[]>();
    const [delImgIds, setDelImgIds] = useState<string[]>();

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
        if(dateString) {
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

                if (formDataFile) 
                    setFormDataFile([...formDataFile, file]);
                else 
                    setFormDataFile([file]);
                
                
                if (!prevImages) {
                    let prev: string[] = [];
                    prev.push(imageUrl);
                    setPrevImages(prev);
                } else setPrevImages(prevImages => [...prevImages, imageUrl]);
            }
        }
    
        const handleDeleteImage = (index: number) => {
            const filteredPrevImg = prevImages.filter((img, i) => {
                return i === index;
            })

            const willDeleteImg = dog1.dogImgUrl.filter((i) => {
                return i === filteredPrevImg[0];
            });

            if (delImgIds) setDelImgIds([...delImgIds, willDeleteImg[0]]);
            else setDelImgIds(willDeleteImg);
            
            setPrevImages(prevImages?.filter((img, i) => {
                return i !== index;
            }))
        }

        const updateGenderState = (value: string) => {
            if (value === 'FEMALE') setDog1({...dog1, gender: {gender: 'FEMALE'}});
            else setDog1({...dog1, gender: {gender: 'MALE'}});
        }
    
        const updateStatusState = (value: string) => {
            if (value === 'AVAILABLE') setDog1({...dog1, status: {status: 'AVAILABLE'}});
             else setDog1({...dog1, status: {status: 'DONE'}});
        }

        /*
            Submit 할 때 create | edit 인지 확인 (dog1.id)
        */
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const formDataToSend = new FormData();

            formDataToSend.append('name', dog1.name);
            formDataToSend.append('gender', dog1.gender?.gender);
            formDataToSend.append('management', dog1.management);
            formDataToSend.append('birthDate', dog1.birthDate);

            /**
             * 
             * FIX: dog1.birthDate 수정이 안됨
             * 
             */

            if (delImgIds && delImgIds.length > 0) formDataToSend.append('isDeleteImages', JSON.stringify(true));
            else formDataToSend.append('isDeleteImages', JSON.stringify(false));
            
            formDataToSend.append('status', dog1.status?.status);

            if (delImgIds) {
                delImgIds.forEach((d) => {
                    formDataToSend.append('imgIdToDeletes', d);
                });
            }

            if (formDataFile) {
                if (formDataFile.length > 0) {
                    formDataFile.forEach((f) => {
                        formDataToSend.append('dogImgFiles', f);
                    })
                } else {
                    formDataToSend.append('dogImgFiles', formDataFile[0]);
                }
            }
        
            try {
                const result = await patch(`${process.env.REACT_APP_API_URL}breeder/dogs/${dog1.id}`, formDataToSend);
                console.log(result.data);

            } catch (error) {
                console.error('ERROR: ', error);
            }   
        }

    
    
    return (
        <S.MergeContainer>
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
                                <S.CustomDate>
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
                                </S.CustomDate>
                                
                            </S.InputContainer>
                            <S.InputContainer>
                                <S.InputTitle>성별</S.InputTitle>
                                <CustomInput
                                    width={"84%"}
                                    height="48px"
                                    value={
                                        dog1?.gender?.gender ? dog1?.gender?.gender : "MALE"
                                    }
                                    genderArr={["FEMAIL", "MALE"]}
                                    updateGenderState={updateGenderState}
                                />
                            </S.InputContainer>

                            <S.InputContainer>
                                <S.InputTitle>분양상태</S.InputTitle>
                                <CustomInput
                                    width={"84%"}
                                    height="48px"
                                    value={
                                        dog1?.status?.status
                                            ? dog1?.status?.status
                                            : "AVAILABLE"
                                    }
                                    statusArr={["DONE", "AVAILABLE"]}
                                    updateStatusState={updateStatusState}
                                />
                            </S.InputContainer>
                        </S.RightInputContainer>
                    </S.TopInputContainer>
                    <S.ReviewInputContainer>
                        <S.InputTitle>기타사항</S.InputTitle>
                        <S.Textarea
                            value={dog1?.management}
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
                            <S.Container htmlFor="file" onClick={() => setAddButtonClicked(!addButtonClicked)}>
                            <S.ImageInput type="file" accept="image/*" id="file" onChange={(e) => handleAddImage(e)}/>
                            <AddImageIcon />
                            </S.Container>
                        </S.ImageUploaderBox>
                    </S.ImageUploaderFlexBox>
                </S.ImageUploaderContainer>
            </S.InnerContainer>
        </S.Wrapper>
        <S.SubmitButton type="submit" form="dogSubmit">저장</S.SubmitButton>
    </S.MergeContainer>
    );
};

export default OwnDogsEditForm;
