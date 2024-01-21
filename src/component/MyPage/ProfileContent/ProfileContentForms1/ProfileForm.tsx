import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Auth,
  Avatar,
  AvatarBorder,
  AvatarInfo,
  Badge,
  Button,
  Checklen,
  Container,
  Form,
  Info,
  Infos,
  Introduce,
  Label,
  AvatarLabel,
  Store,
  Title,
  CheckMark,
} from "./Styles1";
import Swal from "sweetalert2";
import alertList from "../../../../utils/Swal1";
import AvatarUpload from "./AvatarUpload";
import DecodeToken from "../../../../utils/DecodeJWT/DecodeJWT";
import { AvatarUrl, IntroduceUrl } from "../../../../utils/MypageUrl1";
import {
  AvatarResultResponse,
  IIntroductionForm,
  ResultResponse,
} from "../../../../types/MypageType1";
import { get, put } from "../../../../api/api";
import {
  selectAvatarSlice,
  setAvatar,
  setAvatarId,
} from "../../../../redux/Mypage1/AvatarSlice1";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { selectChangeAvatarSlice, setChangeavatar } from "../../../../redux/Mypage1/ChangeAvatarSlice1";
interface IUser {
  email: string;
  exp: number;
  iat: number;
  role: "ADOPTER" | "BREEDER";
  sub: string;
  verification: boolean;
}

const ProfileForm = () => {
  const [isBreederAuth, setIsBreederAuth] = useState(false);
  const [isAdopterAuth, setIsAdopterAuth] = useState(false);

  const avatar = useAppSelector(selectAvatarSlice);
  const changeavatar = useAppSelector(selectChangeAvatarSlice);
  const dispath = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm<IIntroductionForm>();

  const accountInfo = DecodeToken();
  const [user] = useState<IUser>(accountInfo);

  const onValid = async ({ introduction }: IIntroductionForm) => {
    const answer = await Swal.fire({
      ...alertList.doubleCheckMessage("자기 소개를 저장 하시겠습니까?"),
      width: "350px",
    });
    if (answer.isConfirmed) {
      /// post 요청과 답은 제대로 오는데 수정이 되지 않음
      try {
        const url = IntroduceUrl();
        const response = await put<ResultResponse>(url, {
          content:introduction
        });
        if (response.data.status === "FAIL") {
          throw "올바르지 못한 접근 입니다.";
        }
        Swal.fire({
          ...alertList.successMessage("자기소개가 저장 되었습니다."),
          width: "350px",
        });
      } catch (e) {
        Swal.fire({
          ...alertList.errorMessage("오류가 발생했습니다."),
          width: "350px",
        });
      }
    }
  };
  const getAvatar = async () => {
    try {
      const url = AvatarUrl("get");
      const response = await get<AvatarResultResponse>(url);
      if (response.data.status === "FAIL") {
        throw "올바르지 못한 접근 입니다.";
      }
      dispath(setAvatar(response.data.data.fileUrl));
      dispath(setAvatarId(response.data.data.id));
    } catch (e) {}
  };

  const getIntroduce = async () => {
    try {
      const url = IntroduceUrl();
      const response = await get<ResultResponse>(url);
      if (response.data.status === "FAIL") {
        throw "올바르지 못한 접근 입니다.";
      }
      setValue("introduction", response.data.data);
    } catch (e) {}
  };
  const onChangeAvatar = () => {
    dispath(setChangeavatar(true));
  };

  useEffect(() => {
    if (user.role === "BREEDER" && user.verification) {
      setIsBreederAuth(true);
    }
    if (user.role === "ADOPTER" && user.verification) {
      setIsAdopterAuth(true);
    }
  }, []);

  useEffect(() => {
    getAvatar();
    getIntroduce();
  }, []);
  return (
    <>
      <Container>
        <Infos>
          <AvatarInfo >
            <AvatarBorder $isAuth={isBreederAuth} onClick={onChangeAvatar}>
              {avatar.avatar ? (
                <Avatar src={avatar.avatar} alt="Profile_image" />
              ) : (
                <AvatarLabel>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="-1.6 -1.6 19.20 19.20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                      <rect
                        x="-1.6"
                        y="-1.6"
                        width="19.20"
                        height="19.20"
                        rx="9.6"
                        fill="#9c9c9c"
                        strokeWidth="0"
                      ></rect>
                    </g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0"
                        fill="#686868"
                      ></path>{" "}
                    </g>
                  </svg>
                </AvatarLabel>
              )}
            </AvatarBorder>
            <Badge>
              {isBreederAuth ? (
                <svg
                width="2.2vw"
                height="2.5vw"
                viewBox="0 0 53 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M45.9235 34.1445C44.5836 37.6805 42.5566 40.7539 39.8983 43.2803C36.872 46.1562 32.9098 48.4413 28.1211 50.0711C27.9639 50.1243 27.8 50.168 27.6351 50.2003C27.4174 50.2421 27.1969 50.2649 26.9773 50.2677H26.9344C26.7001 50.2677 26.4649 50.2449 26.2317 50.2003C26.0668 50.168 25.9048 50.1243 25.7486 50.0721C20.955 48.4451 16.987 46.1609 13.9587 43.285C11.2994 40.7587 9.27244 37.6871 7.9335 34.1511C5.4996 27.7231 5.63817 20.6426 5.74943 14.9516L5.75138 14.8643C5.77383 14.3941 5.78846 13.9012 5.79627 13.356C5.83726 10.6796 8.02328 8.4657 10.7734 8.31659C16.5068 8.00506 20.9423 6.18531 24.7327 2.59045L24.7659 2.56101C25.3954 1.99875 26.1878 1.72332 26.9773 1.73471C27.7375 1.74516 28.4958 2.01964 29.1028 2.56101L29.135 2.59045C32.9254 6.18531 37.3609 8.00506 43.0943 8.31659C45.8444 8.4657 48.0305 10.6796 48.0715 13.356C48.0793 13.905 48.0939 14.3979 48.1164 14.8643V14.9013C48.2286 20.6027 48.3662 27.6975 45.9235 34.1445Z"
                    fill="#FF6363"
                />
                <path
                    d="M39.3616 25.9976C39.3616 32.6526 33.8097 38.0701 26.9774 38.0938H26.9335C20.0807 38.0938 14.5044 32.6669 14.5044 25.9976C14.5044 19.3284 20.0807 13.9023 26.9335 13.9023H26.9774C33.8097 13.9261 39.3616 19.3426 39.3616 25.9976Z"
                    fill="white"
                />
                <path
                    d="M32.5745 24.2561L26.9767 29.7039L25.7676 30.8807C25.4816 31.159 25.1069 31.2976 24.7331 31.2976C24.3593 31.2976 23.9836 31.159 23.6977 30.8807L21.0969 28.3486C20.525 27.7921 20.525 26.8917 21.0969 26.3351C21.6678 25.7786 22.5939 25.7786 23.1658 26.3351L24.7321 27.8595L30.5046 22.2416C31.0765 21.6851 32.0026 21.6851 32.5735 22.2416C33.1454 22.7982 33.1454 23.6995 32.5735 24.2551L32.5745 24.2561Z"
                    fill="#908181"
                />
            </svg>
              ) : (
                <svg
                  width="2.2vw"
                  height="2.5vw"
                  viewBox="0 0 53 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.9235 33.1445C39.5836 36.6805 37.5566 39.7539 34.8983 42.2803C31.872 45.1562 27.9098 47.4413 23.1211 49.0711C22.9639 49.1243 22.8 49.168 22.6351 49.2003C22.4174 49.2421 22.1969 49.2649 21.9773 49.2677H21.9344C21.7001 49.2677 21.4649 49.2449 21.2317 49.2003C21.0668 49.168 20.9048 49.1243 20.7486 49.0721C15.955 47.4451 11.987 45.1609 8.95873 42.285C6.29939 39.7587 4.27244 36.6871 2.9335 33.1511C0.499596 26.7231 0.638175 19.6426 0.749428 13.9516L0.75138 13.8643C0.773826 13.3941 0.788464 12.9012 0.796271 12.356C0.837259 9.6796 3.02328 7.4657 5.77338 7.31659C11.5068 7.00506 15.9423 5.18531 19.7327 1.59045L19.7659 1.56101C20.3954 0.998749 21.1878 0.723317 21.9773 0.734715C22.7375 0.745162 23.4958 1.01964 24.1028 1.56101L24.135 1.59045C27.9254 5.18531 32.3609 7.00506 38.0943 7.31659C40.8444 7.4657 43.0305 9.6796 43.0715 12.356C43.0793 12.905 43.0939 13.3979 43.1164 13.8643V13.9013C43.2286 19.6027 43.3662 26.6975 40.9235 33.1445Z"
                    fill="#23F39C"
                  />
                  <path
                    d="M34.3616 24.9976C34.3616 31.6526 28.8097 37.0701 21.9774 37.0938H21.9335C15.0807 37.0938 9.50439 31.6669 9.50439 24.9976C9.50439 18.3284 15.0807 12.9023 21.9335 12.9023H21.9774C28.8097 12.9261 34.3616 18.3426 34.3616 24.9976Z"
                    fill="white"
                  />
                  <path
                    d="M27.5745 23.2561L21.9767 28.7039L20.7676 29.8807C20.4816 30.159 20.1069 30.2976 19.7331 30.2976C19.3593 30.2976 18.9836 30.159 18.6977 29.8807L16.0969 27.3486C15.525 26.7921 15.525 25.8917 16.0969 25.3351C16.6678 24.7786 17.5939 24.7786 18.1658 25.3351L19.7321 26.8595L25.5046 21.2416C26.0765 20.6851 27.0026 20.6851 27.5735 21.2416C28.1454 21.7982 28.1454 22.6995 27.5735 23.2551L27.5745 23.2561Z"
                    fill="#6FA5AA"
                  />
                </svg>
              )}
            </Badge>
          </AvatarInfo>
          <Form onSubmit={handleSubmit(onValid)}>
            <Title>프로필</Title>
            <Info>
              {user.role === "BREEDER" ? (
                <>
                  {isBreederAuth ? (
                    <Auth>
                      브리더 인증자
                      <CheckMark>
                        <svg
                          width="21"
                          height="16"
                          viewBox="0 0 21 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.4432 3.97122L10.3021 12.8675L8.32757 14.7891C7.86063 15.2436 7.24867 15.47 6.63831 15.47C6.02794 15.47 5.41439 15.2436 4.94745 14.7891L0.700405 10.6543C-0.233468 9.74543 -0.233468 8.27512 0.700405 7.36626C1.63268 6.4574 3.14505 6.4574 4.07892 7.36626L6.63671 9.85555L16.0631 0.681645C16.997 -0.227215 18.5093 -0.227215 19.4416 0.681645C20.3755 1.5905 20.3755 3.06236 19.4416 3.96967L19.4432 3.97122Z"
                            fill="#4EC1BF"
                          />
                        </svg>
                      </CheckMark>
                    </Auth>
                  ) : (
                    <Auth>브리더 인증 되지않음</Auth>
                  )}
                </>
              ) : (
                <>
                  <Label>분양희망자 인증여부</Label>
                  {isAdopterAuth ? (
                    <Auth>
                      반려견 기초 테스트 인증자
                      <CheckMark>
                        <svg
                          width="21"
                          height="16"
                          viewBox="0 0 21 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.4432 3.97122L10.3021 12.8675L8.32757 14.7891C7.86063 15.2436 7.24867 15.47 6.63831 15.47C6.02794 15.47 5.41439 15.2436 4.94745 14.7891L0.700405 10.6543C-0.233468 9.74543 -0.233468 8.27512 0.700405 7.36626C1.63268 6.4574 3.14505 6.4574 4.07892 7.36626L6.63671 9.85555L16.0631 0.681645C16.997 -0.227215 18.5093 -0.227215 19.4416 0.681645C20.3755 1.5905 20.3755 3.06236 19.4416 3.96967L19.4432 3.97122Z"
                            fill="#4EC1BF"
                          />
                        </svg>
                      </CheckMark>
                    </Auth>
                  ) : (
                    <Auth>반려견 기초 테스트 인증 되지않음</Auth>
                  )}
                  ;
                </>
              )}
            </Info>
            <Info>
              <Label>자기소개</Label>
              <Introduce
                {...register("introduction", {
                  required: true,
                  maxLength: 300,
                })}
                maxLength={300}
                placeholder="키워드와 함께 짧은 글로 자기소개를 해보세요"
              />
              <Checklen>{`${watch("introduction")}`.length + "/300"}</Checklen>
            </Info>
            <Store>
              <Button $isLong={true}>저장</Button>
            </Store>
          </Form>
        </Infos>
      </Container>
      {changeavatar.changeavatar ? <AvatarUpload /> : null}
    </>
  );
};
export default ProfileForm;
