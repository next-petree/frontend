import DropDown from "@component/common/DropDown";
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
import ProfilePic from "@component/common/ProfilePicture";
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
    <DropDown>
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
      <S.ButtonContainer></S.ButtonContainer>
    </DropDown>
  );
};

export default GlobalDropDown;
