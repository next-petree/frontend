
/**
 * @param dogTypeId
 * @RequestBody
 *  body: 
 *  [
 *      name: string,
 *      gender: string,
 *      birthDate: string,
 *      management: string,
 *      dogImgFiles: string[]
 *  ]
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import * as S from "./styles";
import CustomInput from "../CustomInput/CustomInput";

import DateInput from "../CustomInput/DateInput";
import ImageDeleteButton from "../ImageDeleteButton/ ImageDeleteButton";
import AddImageIcon from "../AddImageIcon/AddImageIcon";
import { post } from "../../../api/api";

import Swal from "sweetalert2";
import alertList from "../../../utils/Swal1";


/**
 * 
 * FIX: dog 안에 birthDate가 필요 없을듯
 * 
 */

export interface IDogInfo {
  name: string,
  gender: IGender,
  birthDate: string,
  management: string,
  dogImgFiles: File[]
}

export interface IGender {
    gender: 'FEMALE' | 'MALE';
}


const initialState:IDogInfo = {
    name: "",
    birthDate: "",
    gender: {gender: 'FEMALE'},
    management: "",
    dogImgFiles: []
}

interface IDate {
    year: number,
    month: number,
    day: number
}

const OwnDogsCreateForm = () => {
  const [dog, setDog] = useState<IDogInfo>(initialState);
  const [date, setDate ] = useState<IDate>({
      year: 2001,
      month: 1,
      day: 1
  });
  const [addButtonClicked, setAddButtonClicked] = useState<boolean>(false);
  const [prevImages, setPrevImages] = useState<string[]>([]);
  const [formDataFile, setFormDataFile] = useState<File[]>();
  const navigate = useNavigate();
  
  const handleDay = (day: number) => {
      setDate({...date, day})
  }
  const handleMonth = (month: number) => {
      setDate({...date, month})
  }
  const handleYear = (year: number) => {
      setDate({...date, year})
  }
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
        setPrevImages(prevImages?.filter((img, i) => {
            return i !== index;
        }))
    }
    const updateGenderState = (value: string) => {
        if (value === 'FEMALE') setDog({...dog, gender: {gender: 'FEMALE'}});
        else setDog({...dog, gender: {gender: 'MALE'}});
    }
 
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formDataToSend = new FormData();
      formDataToSend.append('name', dog.name);
      formDataToSend.append('gender', dog.gender.gender);
      formDataToSend.append('management', dog.management);

      // 월(month)이 0부터 시작하므로 month를 1 빼고, 문자열을 만듭니다.
      const formattedMonth = (date.month < 10) ? `0${date.month}` : `${date.month}`;
      const formattedDay = (date.day < 10) ? `0${date.day}` : `${date.day}`;

      // YYYY-MM-DD 형식의 문자열을 만듭니다.
      const formattedDate = `${date.year}-${formattedMonth}-${formattedDay}`;
      // const localDate = new Date(formattedDate);
      
      formDataToSend.append('birthDate', formattedDate);

      if (formDataFile) {
          if (formDataFile.length > 0) {
              formDataFile.forEach((f) => {
                  formDataToSend.append('dogImgFiles', f);
              })
          } else {
              formDataToSend.append('dogImgFiles', formDataFile[0]);
          }
      }

      const dogTypeId = 35;
      try {
          const result = await post(`${process.env.REACT_APP_API_URL}breeder/dogs?dogTypeId=${dogTypeId}`, formDataToSend);
          if(result.status === 200) {
            Swal.fire({
                ...alertList.successMessage("보유견종이 생성되었습니다"),
                width: "350px",
              });
            navigate('/mypage/ownDogs/1');
        }
      } catch (error) {
          console.error('ERROR: ', error);
      }   
    }
  
  
  return (
        <S.MergeContainer>
        <S.Wrapper>
            <S.ReturnBtnContainer onClick={() => navigate('/mypage/owndogs/1')}>
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
                                    value={dog?.name}
                                    onChange={(e) => setDog({...dog!, name: e.target.value})}
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
                                        dog?.gender?.gender ? dog?.gender?.gender : "MALE"
                                    }
                                    genderArr={["FEMAIL", "MALE"]}
                                    updateGenderState={updateGenderState}
                                />
                            </S.InputContainer>
                        </S.RightInputContainer>
                    </S.TopInputContainer>
                    <S.ReviewInputContainer>
                        <S.InputTitle>기타사항</S.InputTitle>
                        <S.Textarea
                            value={dog?.management}
                            placeholder="견종의 특이사항에 대해 작성해주세요"
                            onChange={(e) => setDog((prev) => ({...prev, management: e.target.value}))}
                        />
                        <S.TextLength>
                            {dog?.management ? dog?.management?.length : 0}/2000
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

export default OwnDogsCreateForm;
