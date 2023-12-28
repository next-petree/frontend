import React, { useState } from "react";
import { get, post } from "../../../api/api";
import { RegisterResponse } from "../../../types/authType";
import Swal from "sweetalert2";
import alertList from "../../../utils/Swal1";
import { useNavigate } from "react-router-dom";
import DaumFindAdress from "../../DaumFindAddress/DaumFindAddress";

import {
  Container,
  RegisterSequence,
  RegisterSequenceStyle,
  SelectArea,
  BreederButton,
  CustomerButton,
  TopContentArea,
  TopLeftContentArea,
  EmailArea,
  EmailTextArea,
  EmailText,
  EmailInfomationText,
  EmailInputArea,
  EmailInput,
  EmailCheckButton,
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
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<DogType[]>([]);
  const [selectedBreeds, setSelectedBreeds] = useState<DogType[]>([]);

  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/success-register");
  };

  const navigateToBreeder = () => {
    navigate("/register/breeder-detail");
  };

  const navigateToAdopter = () => {
    navigate("/register/adopter-detail");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

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

  const handleSearchKeywordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchKeyword(e.target.value);
  };

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(
      e.target.value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`),
    );
  };

  const handleEmailCheck = async () => {
    if (!email) {
      Swal.fire(alertList.infoMessage("이메일을 입력해주세요."));
      return;
    }

    try {
      const response = await get<RegisterResponse>("/email/check", {
        params: { email: email },
      });

      if (response.data.status === "SUCCESS") {
        Swal.fire(alertList.successMessage("사용 가능한 이메일입니다."));
      } else {
        Swal.fire(alertList.errorMessage("이미 사용 중인 이메일입니다."));
      }
    } catch (error) {
      Swal.fire(
        alertList.errorMessage("이메일 중복 확인 중 오류가 발생했습니다."),
      );
    }
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
          console.log(response.data.data.length);
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

  const handleNickNameCheck = async () => {
    if (!nickname) {
      Swal.fire(alertList.infoMessage("닉네임을 입력해주세요"));
      return;
    }

    try {
      const response = await get<RegisterResponse>("nickname/check", {
        params: { nickname },
      });

      if (response.data.status === "SUCCESS") {
        Swal.fire(alertList.successMessage("사용 가능한 닉네임입니다."));
      } else {
        Swal.fire(alertList.errorMessage("이미 사용 중인 닉네임입니다."));
      }
    } catch (error) {
      Swal.fire(
        alertList.errorMessage("닉네임 중복 확인 중 오류가 발생했습니다."),
      );
    }
  };

  const sendVerificationCode = async () => {
    if (!phoneNumber) {
      Swal.fire(alertList.infoMessage("휴대전화 번호를 입력해주세요."));
      return;
    }

    try {
      const response = await post<RegisterResponse>("/sms/send", {
        to: phoneNumber,
      });

      if (response.data.status === "SUCCESS") {
        Swal.fire(alertList.successMessage("인증번호가 발송되었습니다."));
      } else if (response.data.status === "FAIL") {
        console.log(response.data.data);
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
      const response = await post<RegisterResponse>("/sms/verify", {
        phoneNumber,
        code: verificationCode,
      });

      if (response.data.status === "SUCCESS") {
        Swal.fire(alertList.successMessage("인증 성공!"));
      } else {
        Swal.fire(alertList.errorMessage("인증 실패!"));
      }
    } catch (error) {
      Swal.fire(alertList.errorMessage("인증 중 오류가 발생했습니다."));
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
        <SelectArea>
          <BreederButton onClick={navigateToBreeder}>브리더</BreederButton>
          <CustomerButton onClick={navigateToAdopter}>
            분양희망자
          </CustomerButton>
        </SelectArea>
      </SelectArea>
      <TopContentArea>
        <TopLeftContentArea>
          <EmailArea>
            <EmailTextArea>
              <EmailText>이메일</EmailText>
              <EmailInfomationText>2~10자 이내</EmailInfomationText>
            </EmailTextArea>
            <EmailInputArea>
              <EmailInput
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="breeder@email.com"
              />
              <EmailCheckButton onClick={handleEmailCheck}>
                중복확인
              </EmailCheckButton>
            </EmailInputArea>
          </EmailArea>
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
        <RegisterButton onClick={handleNextClick}>가입하기</RegisterButton>
      </RegisterButtonContainer>
    </Container>
  );
};

export default RegisterContentDetail;
