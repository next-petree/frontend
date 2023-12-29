import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { post } from "../../../api/api";
import { CertificationCheckResponse } from "../../../types/authType";
import Swal from "sweetalert2";
import alertList from "../../../utils/Swal1";
import { useNavigate } from "react-router-dom";
import DaumFindAdress from "../../DaumFindAddress/DaumFindAddress";
import EmailContent from "./EmailContent";
import NicknameContent from "./NicknameContent";
import PhoneNumberContent from "./PhoneNumberContent";
import PasswordContent from "./PasswordContent";
import MainBreedContent from "./MainBreedContent";

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
  BottomContentArea,
  BottomLeftContentArea,
  RegionSelectorArea,
  RegionSelectorTextArea,
  RegionSelectorText,
  BottomRightContentArea,
  RegisterButtonContainer,
  RegisterButton,
} from "./RegisterContentDetailStyle";

import RegisterSequenceImage2 from "../../../assets/images/register-sequence2.png";

const RegisterContentDetail = () => {
  const address = useSelector((state: RootState) => state.address);
  const email = useSelector((state: RootState) => state.email);
  const nickname = useSelector((state: RootState) => state.nickname);
  const phonenumber = useSelector((state: RootState) => state.phonenumber);
  const password = useSelector((state: RootState) => state.password);
  const selectedBreeds = useSelector(
    (state: RootState) => state.mainbreed.selectedBreeds,
  );

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

    console.log(dogTypeIds);

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
          <MainBreedContent />
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
