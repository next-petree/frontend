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

import {
  Container,
  RegisterSequence,
  RegisterSequenceStyle,
  SelectArea,
  BreederButton,
  CustomerButton,
  TopContentArea,
  TopLeftContentArea,
  PasswordArea,
  PasswordTextArea,
  PasswordText,
  PasswordInfomationText,
  PasswordInputArea,
  PasswordInput,
  PasswordCheckArea,
  PasswordCheckText,
  PasswordCheckInput,
  PasswordErrorText,
  TopRightContentArea,
  MainBreedArea,
  MainBreedTextArea,
  MianBreedText,
  MainBreedInputArea,
  MainBreedInput,
  MainBreedSearchButton,
  NickNameArea,
  NickNameTextArea,
  NickNameText,
  NickNameInfomationText,
  NickNameInputArea,
  NickNameInput,
  NickNameCheckButton,
  BottomContentArea,
  BottomLeftContentArea,
  RegionSelectorArea,
  RegionSelectorTextArea,
  RegionSelectorText,
  BottomRightContentArea,
  PhoneNumberArea,
  PhoneNumberTextArea,
  PhoneNumberText,
  PhoneNumberInputTop,
  PhoneNumberInput,
  PhoneNumberButton,
  PhoneNumberInputBottom,
  PhoneNumberCheckInput,
  PhoneNumberCheckButton,
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
  //닉네임 체크
  const [nickname, setNickname] = useState("");
  const [nicknameCheck, setNickNameCheck] = useState(false);
  //휴대폰 번호 체크
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [phoneNumberCheck, setPhoneNumberCheck] = useState(false);
  //비밀번호 체크
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  //견종 체크
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<DogType[]>([]);
  const [selectedBreeds, setSelectedBreeds] = useState<DogType[]>([]);

  const address = useSelector((state: RootState) => state.address);
  const email = useSelector((state: RootState) => state.email);

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

  //비밀번호
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    if (checkPassword) {
      validatePassword(e.target.value, checkPassword);
    }
  };

  const handleCheckPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckPassword(e.target.value);
    validatePassword(password, e.target.value);
  };

  const validatePassword = (pwd: string, checkPwd: string) => {
    if (pwd !== checkPwd) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordError("");
    }
  };

  //닉네임
  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setNickNameCheck(false);
  };

  const handleNickNameCheck = async () => {
    if (!nickname) {
      Swal.fire(alertList.infoMessage("닉네임을 입력해주세요"));
      return;
    }

    try {
      const response = await get<CertificationCheckResponse>("nickname/check", {
        params: { nickname },
      });

      if (response.data.status === "SUCCESS") {
        setNickNameCheck(true);
        Swal.fire(alertList.successMessage("사용 가능한 닉네임입니다."));
      } else {
        setNickNameCheck(false);
        Swal.fire(alertList.errorMessage("이미 사용 중인 닉네임입니다."));
      }
    } catch (error) {
      Swal.fire(
        alertList.errorMessage("닉네임 중복 확인 중 오류가 발생했습니다."),
      );
    }
  };

  //휴대폰 번호
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(
      e.target.value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`),
    );
    setPhoneNumberCheck(false);
  };

  const sendVerificationCode = async () => {
    if (!phoneNumber) {
      Swal.fire(alertList.infoMessage("휴대전화 번호를 입력해주세요."));
      return;
    }

    try {
      const response = await post<CertificationCheckResponse>("/sms/send", {
        to: phoneNumber,
      });

      if (response.data.status === "SUCCESS") {
        Swal.fire(alertList.successMessage("인증번호가 발송되었습니다."));
      } else if (response.data.status === "FAIL") {
        Swal.fire(alertList.successMessage("올바른 전화번호 형식이 아닙니다."));
      }
    } catch (error) {
      Swal.fire(
        alertList.errorMessage("인증번호 발송 중 오류가 발생했습니다."),
      );
    }
  };

  const verifyCode = async () => {
    try {
      const response = await post<CertificationCheckResponse>("/sms/verify", {
        phoneNumber,
        code: verificationCode,
      });

      if (response.data.status === "SUCCESS") {
        setPhoneNumberCheck(true);
        Swal.fire(alertList.successMessage("인증 성공!"));
      } else {
        setPhoneNumberCheck(false);
        Swal.fire(alertList.errorMessage("인증 실패!"));
      }
    } catch (error) {
      Swal.fire(alertList.errorMessage("인증 중 오류가 발생했습니다."));
    }
  };

  // console.log(phoneNumberCheck);

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
    if (!email.emailCheck) {
      Swal.fire(alertList.infoMessage("이메일 중복확인을 해주세요"));
      return;
    } else if (!nicknameCheck) {
      Swal.fire(alertList.infoMessage("닉네임 중복확인을 해주세요"));
      return;
    } else if (!phoneNumberCheck) {
      Swal.fire(alertList.infoMessage("휴대폰 인증을 해주세요"));
      return;
    }

    const dogTypeIds = selectedBreeds.map(breed => breed.id);

    const SignUpData = {
      emailChecked: email.emailCheck,
      nicknameChecked: nicknameCheck,
      phoneNumberChecked: phoneNumberCheck,
      email,
      nickname,
      password,
      confirmPassword: checkPassword,
      phoneNumber,
      address1: address.roadAddress,
      address2: address.detailAddress,
      role,
      mainBreedDtoRequest: {
        dogTypeId: dogTypeIds,
      },
    };

    try {
      const response = await post<CertificationCheckResponse>(
        "/signup",
        SignUpData,
      );
      if (response.data.status === "SUCCESS") {
        Swal.fire(alertList.successMessage("회원가입이 완료되었습니다"));
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
          <PasswordArea>
            <PasswordTextArea>
              <PasswordText>비밀번호</PasswordText>
              <PasswordInfomationText>
                4~16자로 특수문자를 포함
              </PasswordInfomationText>
            </PasswordTextArea>
            <PasswordInputArea>
              <PasswordInput
                type="password"
                placeholder="비밀번호"
                onChange={handlePasswordChange}
              />
            </PasswordInputArea>
          </PasswordArea>
          <PasswordCheckArea>
            <PasswordCheckText>비밀번호 확인</PasswordCheckText>
            <PasswordCheckInput
              type="password"
              placeholder="비밀번호 확인"
              onChange={handleCheckPasswordChange}
            />
            <PasswordErrorText>{passwordError}</PasswordErrorText>
          </PasswordCheckArea>
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
          <NickNameArea>
            <NickNameTextArea>
              <NickNameText>닉네임</NickNameText>
              <NickNameInfomationText>2~10자 이내</NickNameInfomationText>
            </NickNameTextArea>
            <NickNameInputArea>
              <NickNameInput
                type="text"
                placeholder="닉네임 검색"
                onChange={handleNickNameChange}
              />
              <NickNameCheckButton onClick={handleNickNameCheck}>
                중복확인
              </NickNameCheckButton>
            </NickNameInputArea>
          </NickNameArea>
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
          <PhoneNumberArea>
            <PhoneNumberTextArea>
              <PhoneNumberText>휴대전화</PhoneNumberText>
            </PhoneNumberTextArea>
            <PhoneNumberInputTop>
              <PhoneNumberInput
                type="text"
                placeholder="전화번호"
                onChange={handlePhoneNumberChange}
                value={phoneNumber}
              />
              <PhoneNumberButton onClick={sendVerificationCode}>
                인증요청
              </PhoneNumberButton>
            </PhoneNumberInputTop>
            <PhoneNumberInputBottom>
              <PhoneNumberCheckInput
                type="text"
                value={verificationCode}
                onChange={e => setVerificationCode(e.target.value)}
                placeholder="인증번호"
              />
              <PhoneNumberCheckButton onClick={verifyCode}>
                확인
              </PhoneNumberCheckButton>
            </PhoneNumberInputBottom>
          </PhoneNumberArea>
        </BottomRightContentArea>
      </BottomContentArea>
      <RegisterButtonContainer>
        <RegisterButton onClick={handleSubmit}>가입하기</RegisterButton>
      </RegisterButtonContainer>
    </Container>
  );
};

export default RegisterContentDetail;
