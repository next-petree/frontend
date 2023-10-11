import DropDown from "@component/Common/DropDown";
import { useOutsideClick } from "@hooks/useQuickSiteClick";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import ProfilePic from "@component/Common/ProfilePicture";
import Button from "@component/Common/Button";
interface DropDownProps {
  isLoggedIn?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  role?: string;
}

const GlobalDropDown = ({ isLoggedIn, setOpen, role }: DropDownProps) => {
  const [_, setOutsideClick] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useOutsideClick(ref, () => setOutsideClick(true));
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  const firstButtonClicked = () => {
    if (isLoggedIn) navigate("/mypage/adopt");
    else navigate("/login");
    setOpen(false);
  };

  const secondButtonClicked = () => {
    if (isLoggedIn) {
      navigate("/");
    } else navigate("/signup/step-1");
    setOpen(false);
  };
  return (
    <DropDown
      ref={ref}
      style={{
        bottom: "-11rem",
        right: 10,
        padding: "1.38rem 1.63rem",
      }}
    >
      <S.ProfileContainer>
        <ProfilePic
          style={{
            width: "38px",
            height: "38px",
          }}
        />
        {isLoggedIn ? (
          <span>
            안녕하세요,
            <br />
            {role === "BREEDER" ? "브리더" : "유저"}님
          </span>
        ) : (
          <span>
            서비스 이용을 위해 <br />
            로그인 해주세요.
          </span>
        )}
      </S.ProfileContainer>
      <S.ButtonContainer>
        <Button
          style={{
            width: "7.5rem",
            height: "3.625rem",
            fontSize: "1rem",
            fontWeight: 700,
          }}
          onClick={firstButtonClicked}
        >
          {isLoggedIn ? "마이 페이지" : "로그인"}
        </Button>
        <Button
          style={{
            width: "7.5rem",
            height: "3.625rem",
            fontSize: "1rem",
            backgroundColor: "#fff",
            color: "#4EC1BF",
            border: "1px solid #4EC1BF",
            fontWeight: 700,
          }}
          onClick={secondButtonClicked}
        >
          {isLoggedIn ? "로그아웃" : "회원가입"}
        </Button>
      </S.ButtonContainer>
    </DropDown>
  );
};

export default GlobalDropDown;
