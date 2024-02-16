import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Swal from "sweetalert2";
import alertList from "../../../utils/Swal1";

import * as S from "./styles";
import CustomInput from "../CustomInput/CustomInput";

import DateInput from "../CustomInput/DateInput";
import ImageDeleteButton from "../ImageDeleteButton/ ImageDeleteButton";
import AddImageIcon from "../AddImageIcon/AddImageIcon";
import { patch } from "../../../api/api";
import { IData, IDogEditInfo } from "../../../pages/ManageOwnDogs/edit/EditOwnDogs";
import { IImgProps } from "../../../pages/ManageOwnDogs/edit/EditOwnDogs";

interface IProps {
    dog?: IDogEditInfo;
}

export interface IStatus {
    status: 'AVAILABLE' | 'DONE';
};

export interface IGender {
    gender: 'FEMALE' | 'MALE';
}


const initialState:IDogEditInfo = {
    birthDate: "",
    dogImgId: [],
    dogType: "",
    gender: "",
    id: -1,
    management: "",
    name: "",
    status: ""
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
    const [dog1, setDog1] = useState<IDogEditInfo>(initialState);
    const [date, setDate ] = useState<IDate>({
        year: 2001,
        month: 1,
        day: 1
    });
    const [addButtonClicked, setAddButtonClicked] = useState<boolean>(false);
    const [prevImages, setPrevImages] = useState<IImgProps[] | undefined>([]);
    const [formDataFile, setFormDataFile] = useState<File[]>([]);
    const [delImgIds, setDelImgIds] = useState<string[]>();
    const [file, setFile] = useState<File>();

    const navigate = useNavigate();

    /*
        수정 시 강아지 정보를 저장하기 위한 useEffects
    */
    useEffect(() => {        
        setDog1(dog!);
        handleDate(dog?.birthDate!);
        setPrevImages(dog?.dogImgId!);
    }, [dog]);
    
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
        setDate({...date, day: day})
    }
    const handleMonth = (month: number) => {
        setDate({...date, month: month})
    }
    const handleYear = (year: number) => {
        setDate({...date, year: year})
    }
    
    useEffect(() => {
        if(prevImages && prevImages.length > 0) {
            /**
             * 
             * PrevImage[i].id === review1.reviewImgId[0].id
             * 
             */
            if( dog1.dogImgId ) {
                const ids: number[] = [];

                dog1.dogImgId.forEach((img) => {
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
        const answer = await Swal.fire({
            ...alertList.doubleCheckMessage("사진을 추가하시면 기존 이미지는 삭제됩니다. 삭제하시겠습니까?"),
            width: "350px",
          });

        if(answer.isConfirmed) {
            const file = e.target?.files?.[0];
            setFile(file);
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                if(prevImages && prevImages.length > 0) {    
                    let lastId = prevImages?.[prevImages.length - 1].id;
                
                    setPrevImages([...prevImages, { id: ++lastId!, fileUrl: imageUrl}]);
                    setFormDataFile([...formDataFile, file]);
                } else {
                    let id = 1;
                    let arr = [{id: id++, fileUrl:imageUrl}];
                    setPrevImages(arr);
                    setFormDataFile([...formDataFile, file]);
                }
            }
        }
    }

    const handleDeleteImage = (index: number) => {
        setPrevImages(prevImages?.filter((img, i) => {
            return i !== index
        }))
    }

    const updateGenderState = (value: string) => {
        if (value === 'FEMALE') setDog1({...dog1, gender: 'FEMALE'});
        else setDog1({...dog1, gender: 'MALE'});        
    }

    const updateStatusState = (value: string) => {
        if (value === 'AVAILABLE') setDog1({...dog1, status: 'AVAILABLE'});
         else setDog1({...dog1, status: 'DONE'});
    }        

        /*
            Submit 할 때 create | edit 인지 확인 (dog1.id)
        */
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const formDataToSend = new FormData();

            formDataToSend.append('name', dog1.name);
            formDataToSend.append('gender', dog1.gender);
            formDataToSend.append('management', dog1.management);

            if(date.month < 10 && date.day < 10) {
                formDataToSend.append('birthDate', `${date.year}-0${date.month}-0${date.day}`);
            }

            if (date.month < 10 && date.day >= 10) {
                formDataToSend.append('birthDate', `${date.year}-0${date.month}-${date.day}`);
            }

            if(date.month >= 10 && date.day < 10) {
                formDataToSend.append('birthDate', `${date.year}-${date.month}-0${date.day}`);
            }

            /**
             * 
             * FIX: dog1.birthDate 수정이 안됨
             * 
             */

            if (delImgIds && delImgIds.length > 0) formDataToSend.append('isDeleteImages', JSON.stringify(true));
            else formDataToSend.append('isDeleteImages', JSON.stringify(false));
            
            formDataToSend.append('status', dog1.status);

            if (formDataFile.length > 0) {
                formDataToSend.append('deleteImages', JSON.stringify(true));
            } else {
                formDataToSend.append('deleteImages', JSON.stringify(false));
            }
            
            formDataFile.forEach((file) => {            
                formDataToSend.append(`dogImgFiles`, file);
            }); 
            
            try {
                const result = await patch<IData>(`${process.env.REACT_APP_API_URL}/breeder/dogs/${dog1.id}`, formDataToSend);
                if(result.status === 200) {
                    Swal.fire({
                        ...alertList.successMessage("수정되었습니다"),
                        width: "350px",
                      });
                    navigate(-1);
                }

            } catch (error) {
                console.error('ERROR: ', error);
            }   
        }

    return (
        <S.MergeContainer>
        <S.Wrapper>
            <S.ReturnBtnContainer onClick={() => navigate(-1)}>
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
                                    genderValue={
                                        dog1?.gender === "FEMALE" ? dog1?.gender : "MALE"
                                    }
                                    genderArr={["FEMALE", "MALE"]}
                                    updateGenderState={updateGenderState}
                                />
                            </S.InputContainer>

                            <S.InputContainer>
                                <S.InputTitle>분양상태</S.InputTitle>
                                <CustomInput
                                    width={"84%"}
                                    height="48px"
                                    statusValue={
                                        dog1?.status === "AVAILABLE"
                                            ? dog1?.status
                                            : "DONE"
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
        <S.SubmitButton type="submit" form="dogSubmit">저장</S.SubmitButton>
    </S.MergeContainer>
    );
};

export default OwnDogsEditForm;
