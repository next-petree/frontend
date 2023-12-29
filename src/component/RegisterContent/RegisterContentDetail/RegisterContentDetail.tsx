import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { get, post } from "../../../api/api";
import { CertificationCheckResponse } from "../../../types/authType";
import Swal from "sweetalert2";
import alertList from "../../../utils/Swal1";
import { useNavigate } from "react-router-dom";
import DaumFindAdress from "../../DaumFindAddress/DaumFindAddress";
import EmailContent from "./EmailContent";
import NicknameContent from "./NicknameContent";
import PhoneNumberContent from "./PhoneNumberContent";
import PasswordContent from "./PasswordContent";

import {
  Container,
  RegisterSequence,
  RegisterSequenceStyle,
  SelectArea,
  BreederButton,
  CustomerButton,
  TopContentArea,
  TopLeftContentArea,
  TopRightContentArea,
  MainBreedArea,
  MainBreedTextArea,
  MianBreedText,
  MainBreedInputArea,
  MainBreedInput,
  MainBreedSearchButton,
  BottomContentArea,
  BottomLeftContentArea,
  RegionSelectorArea,
  RegionSelectorTextArea,
  RegionSelectorText,
  BottomRightContentArea,
  RegisterButtonContainer,
  RegisterButton,
  DogTypeResult,
  DogType,
  BreedList,
  Breed,
} from "./RegisterContentDetailStyle";

import RegisterSequenceImage2 from "../../../assets/images/register-sequence2.png";

interface DogType {
  id: number;
  name: string;
  imgUrl: string;
}

interface DogTypeSearchResponse {
  status: "SUCCESS" | "FAIL";
  data: DogType[];
}

const RegisterContentDetail = () => {
  //견종 체크
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<DogType[]>([]);
  const [selectedBreeds, setSelectedBreeds] = useState<DogType[]>([]);

  const address = useSelector((state: RootState) => state.address);
  const email = useSelector((state: RootState) => state.email);
  const nickname = useSelector((state: RootState) => state.nickname);
  const phonenumber = useSelector((state: RootState) => state.phonenumber);
  const password = useSelector((state: RootState) => state.password);

  const navigate = useNavigate();

  const location = useLocation();

  const navigateToBreeder = () => {
    navigate("/register/breeder-detail");
  };

  const navigateToAdopter = () => {
    navigate("/register/adopter-detail");
  };

  let role = "";

  if (location.pathname.includes("breeder-detail")) {
    role = "BREEDER";
  } else if (location.pathname.includes("adopter-detail")) {
    role = "ADOPTER";
  }

  //견종 확인
  const handleSearchKeywordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchDog = async () => {
    if (!searchKeyword) {
      Swal.fire(alertList.infoMessage("견종 이름을 입력해주세요."));
      return;
    }

    try {
      const response = await get<DogTypeSearchResponse>("/dog-type/search", {
        params: { keyword: searchKeyword },
      });

      if (response.data.status === "SUCCESS") {
        if (response.data.data.length < 1) {
          Swal.fire(alertList.errorMessage("검색 결과가 없습니다."));
        } else {
          setSearchResults(response.data.data);
        }
      } else {
        Swal.fire(
          alertList.errorMessage("검색 결과를 가져오는 데 실패했습니다."),
        );
      }
    } catch (error) {
      Swal.fire(alertList.errorMessage("검색 중 오류가 발생했습니다."));
    }
  };

  const handleBreedClick = (dogType: DogType) => {
    const isAlreadySelected = selectedBreeds.some(
      breed => breed.id === dogType.id,
    );

    if (!isAlreadySelected && selectedBreeds.length < 3) {
      setSelectedBreeds([...selectedBreeds, dogType]);
      setSearchResults([]);
    } else if (isAlreadySelected) {
      Swal.fire(alertList.infoMessage("이미 선택된 견종입니다."));
    } else if (selectedBreeds.length >= 3) {
      Swal.fire(alertList.infoMessage("견종은 최대 3개까지 추가 가능합니다."));
    }
  };

  const DogTypeList = () => {
    return (
      <DogTypeResult>
        {searchResults.map(dogType => (
          <DogType key={dogType.id} onClick={() => handleBreedClick(dogType)}>
            {dogType.name}
          </DogType>
        ))}
      </DogTypeResult>
    );
  };

  const SelectedBreedsList = () => {
    return (
      <BreedList>
        {selectedBreeds.map(breed => (
          <Breed key={breed.id}>{breed.name}</Breed>
        ))}
      </BreedList>
    );
  };

  // 최종 제출
  const handleSubmit = async () => {
    console.log(email.emailCheck);
    console.log(nickname.nicknameCheck);
    console.log(phonenumber.phoneNumberCheck);
    if (!email.emailCheck) {
      Swal.fire(alertList.infoMessage("이메일 중복확인을 해주세요"));
      return;
    } else if (!nickname.nicknameCheck) {
      Swal.fire(alertList.infoMessage("닉네임 중복확인을 해주세요"));
      return;
    } else if (!phonenumber.phoneNumberCheck) {
      Swal.fire(alertList.infoMessage("휴대폰 인증을 해주세요"));
      return;
    }

    const dogTypeIds = selectedBreeds.map(breed => breed.id);

    const SignUpData = {
      emailChecked: email.emailCheck,
      nicknameChecked: nickname.nicknameCheck,
      phoneNumberChecked: phonenumber.phoneNumberCheck,
      email: email.email,
      nickname: nickname.nickname,
      password: password.password,
      confirmPassword: password.checkPassword,
      phoneNumber: phonenumber.phoneNumber,
      address1: address.roadAddress,
      address2: address.detailAddress,
      role,
      mainBreedDtoRequest: {
        dogTypeId: dogTypeIds,
      },
    };

    console.log(SignUpData);

    try {
      const response = await post<CertificationCheckResponse>(
        "/signup",
        SignUpData,
      );
      if (response.data.status === "SUCCESS") {
        navigate("/success-register");
      } else if (response.data.status === "FAIL") {
        Swal.fire(alertList.errorMessage("회원정보를 확인해주세요"));
      } else if (response.data.status === "ERROR") {
        Swal.fire(alertList.errorMessage("서버에 에러가 발생했습니다."));
      }
    } catch (error) {
      Swal.fire(alertList.errorMessage("에러가 발생했습니다."));
    }
  };

  return (
    <Container>
      <RegisterSequence>
        <RegisterSequenceStyle
          src={RegisterSequenceImage2}
          alt="Second RegisterSequence"
        />
      </RegisterSequence>
      <SelectArea>
        <BreederButton
          style={
            location.pathname.includes("adopter-detail")
              ? {
                  border: "1px solid #35d8d5",
                  backgroundColor: "#fff",
                  color: "#35d8d5",
                }
              : {}
          }
          onClick={navigateToBreeder}
        >
          브리더
        </BreederButton>
        <CustomerButton
          style={
            location.pathname.includes("breeder-detail")
              ? {
                  border: "1px solid #35d8d5",
                  backgroundColor: "#fff",
                  color: "#35d8d5",
                }
              : {}
          }
          onClick={navigateToAdopter}
        >
          분양희망자
        </CustomerButton>
      </SelectArea>
      <TopContentArea>
        <TopLeftContentArea>
          <EmailContent />
          <PasswordContent />
        </TopLeftContentArea>
        <TopRightContentArea>
          <MainBreedArea>
            <MainBreedTextArea>
              <MianBreedText>주력견종</MianBreedText>
            </MainBreedTextArea>
            <MainBreedInputArea>
              <MainBreedInput
                type="text"
                placeholder="원하시는 견종을 입력해 주세요."
                value={searchKeyword}
                onChange={handleSearchKeywordChange}
              />
              <MainBreedSearchButton onClick={handleSearchDog}>
                검색
              </MainBreedSearchButton>
            </MainBreedInputArea>
            <DogTypeList />
            <SelectedBreedsList />
          </MainBreedArea>
          <NicknameContent />
        </TopRightContentArea>
      </TopContentArea>
      <BottomContentArea>
        <BottomLeftContentArea>
          <RegionSelectorArea>
            <RegionSelectorTextArea>
              <RegionSelectorText>활동지역</RegionSelectorText>
            </RegionSelectorTextArea>
            <DaumFindAdress />
          </RegionSelectorArea>
        </BottomLeftContentArea>
        <BottomRightContentArea>
          <PhoneNumberContent />
        </BottomRightContentArea>
      </BottomContentArea>
      <RegisterButtonContainer>
        <RegisterButton onClick={handleSubmit}>가입하기</RegisterButton>
      </RegisterButtonContainer>
    </Container>
  );
};

export default RegisterContentDetail;
