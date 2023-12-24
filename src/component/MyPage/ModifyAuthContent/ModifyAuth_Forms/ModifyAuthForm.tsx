import { useForm } from "react-hook-form";
import {
  Button,
  Container,
  Errmsg,
  Form1,
  Info,
  Infos,
  Input,
  InsideForm,
  Label,
  SearchButton,
  Store,
  Title,
} from "./styles";
import Swal from "sweetalert2";
import alertList from "../../../../utils/swal";
import DecodeToken from "../../../../utils/DecodeJWT/DecodeJWT";
import { DuplicateCheckUrl, MemberInfoUrl } from "../../../../utils/mypage_url";
import { useEffect, useState } from "react";
import {
  ResultResponse,
  IMemberInfoAPI,
  IMeberInfoForm,
} from "../../../../types/mypage_type";
import { get, post, patch } from "../../../../api/api";
import React from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";

const ModifyAuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<IMeberInfoForm>();
  const [onCheckDuplicate, setonCheckDuplicate] = useState<boolean>(false);
  const [authtype, setauthtype] = useState<string>("");
  const [currentNickname, setCurrentNickname] = useState<string>("");
  const [addressSearch, setAddressSearch] = useState<boolean>(false);
  const onValid = async (data: IMeberInfoForm) => {
    const answer = await Swal.fire({
      ...alertList.doubleCheckMessage("회원정보를 저장하시겠습니까?"),
      width: "350px",
    });
    if (answer.isConfirmed) {
      try {
        const url = MemberInfoUrl(false);
        const response = await patch<ResultResponse>(url, {
          nicknameChecked: onCheckDuplicate,
          nickname: data.nickname,
          email: data.email,
          address1: data.address1,
          address2: data.address2,
          phoneNumber: data.phoneNumber,
        });
        Swal.fire({
          ...alertList.successMessage(response.data.data),
          width: "350px",
        });
      } catch (e: any) {
        Swal.fire({
          ...alertList.errorMessage(e.response.data.data),
          width: "350px",
        });
      }
    }
  };
  const getAuthInformation = async () => {
    try {
      const url = MemberInfoUrl(false);
      const response = await get<IMemberInfoAPI>(url);

      if (response.data.status === "FAIL") {
        throw "올바르지 못한 접근 입니다.";
      }
      setValue("nickname", response.data.data.nickname);
      setValue("email", response.data.data.email);
      setValue("address1", response.data.data.address1);
      setValue("address2", response.data.data.address2);
      setValue("phoneNumber", response.data.data.phoneNumber);
      setCurrentNickname(response.data.data.nickname);
    } catch (e) {}
  };
  const AddressSearchHandler = (data: any) => {
    setValue("address1",data.roadAddress)
    setAddressSearch(false);
  };

  const onDuplicateCheck = async () => {
    if (currentNickname === watch("nickname")) {
      setonCheckDuplicate(true);
      return Swal.fire({
        ...alertList.successMessage("현재 사용중인 닉네임과 같습니다"),
        width: "350px",
      });
    }
    const url = DuplicateCheckUrl(watch("nickname"));
    const response = await get<ResultResponse>(url);
    if (response.data.status === "FAIL") {
      setonCheckDuplicate(false);
      return Swal.fire({
        ...alertList.errorMessage(response.data.data),
        width: "350px",
      });
    } else {
      setonCheckDuplicate(true);
      return Swal.fire({
        ...alertList.successMessage(response.data.data),
        width: "350px",
      });
    }
  };
  useEffect(() => {
    getAuthInformation();
    const user = DecodeToken();
    if (user.role === "BREEDER") {
      setauthtype("브리더");
    } else {
      setauthtype("분양희망자");
    }
  }, []);

  return (
    <Container>
      <Title>회원정보 수정</Title>
      <Form1 onSubmit={handleSubmit(onValid)}>
        <Infos>
          <Info>
            <Label>회원유형</Label>
            <Input $islen="mid" value={authtype} disabled />
          </Info>
          <Info>
            <Label>
              닉네임<span>2~10자 이내</span>
            </Label>
            <InsideForm>
              <Input
                type="text"
                $islen="shot"
                placeholder="닉네임을 넣어주세요"
                {...register("nickname", {
                  minLength: {
                    value: 2,
                    message: "2~10자 이내로 입력해주세요",
                  },
                  maxLength: {
                    value: 10,
                    message: "2~10자 이내로 입력해주세요",
                  },
                  required: "닉네임을 입력해주세요",
                })}
              />
              <SearchButton onClick={onDuplicateCheck}>중복확인</SearchButton>
            </InsideForm>
            {errors.nickname ? (
              <Errmsg
                $needMargin={false}
              >{`${errors.nickname.message}`}</Errmsg>
            ) : null}
          </Info>
          <Info>
            <Label>이메일</Label>
            <Input
              type="email"
              $islen="mid"
              {...register("email", { required: "이메일을 입력해주세요" })}
            />
            {errors.email ? (
              <Errmsg $needMargin={false}>{`${errors.email.message}`}</Errmsg>
            ) : null}
          </Info>
          <Info>
            <Label>활동지역</Label>
            <InsideForm>
              <Input
                type="text"
                $islen="shot"
                {...register("address1", {
                  required: "활동지역을 입력해주세요",
                })}
              />
              <SearchButton onClick={() => setAddressSearch(true)}>
                주소검색
              </SearchButton>
            </InsideForm>
            <Input
              type="text"
              $islen="long"
              {...register("address2", { required: "상세주소를 입력해주세요" })}
            />
            {errors.address1 ? (
              <Errmsg
                $needMargin={false}
              >{`${errors.address1.message}`}</Errmsg>
            ) : null}
            {errors.address2 ? (
              <Errmsg
                $needMargin={false}
              >{`${errors.address2.message}`}</Errmsg>
            ) : null}
          </Info>
          <Info>
            <Label>휴대전화</Label>
            <Input
              type="text"
              $islen="mid"
              {...register("phoneNumber", {
                required: "휴대전화 번호를 입력해주세요",
                pattern: {
                  value: /^01([016789])-?([0-9]{3,4})-?([0-9]{4})$/,
                  message: "휴대전화 번호의 형식이 아닙니다.",
                },
              })}
            />
            {errors.phoneNumber ? (
              <Errmsg
                $needMargin={false}
              >{`${errors.phoneNumber.message}`}</Errmsg>
            ) : null}
          </Info>
        </Infos>
        <Store>
          <Button $isLong={true}>저장</Button>
        </Store>
      </Form1>
      {addressSearch ? (
        <Modal
          isOpen={addressSearch}
          ariaHideApp={false}
          className="ReactModal__Content"
          overlayClassName="ReactModal__Overlay"
        >
          <DaumPostcode onComplete={AddressSearchHandler} />
        </Modal>
      ) : null}
      
    </Container>
  );
};

export default ModifyAuthForm;
