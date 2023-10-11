import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import ProfilePic from "@component/Common/ProfilePicture";
import { Logo } from "@component/Common/Logo";
import GlobalDropDown from "./GlobalDropDown";
interface MenuItem {
  name: string | React.ReactNode;
  path: string;
}

interface GlobalNavProps {
  isLoggedIn?: boolean;
}
const LayoutPageHeader = ({ isLoggedIn }: GlobalNavProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      name: "강아지 모아보기",
      path: "/dogs",
    },
    {
      name: "브리더 모아보기",
      path: "/dogs/:id",
    },
  ]);
  return (
    <S.Container>
      <S.InnerContainer>
        <Logo />
        <S.Menus>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
          <ProfilePic
            mine
            onClick={() => {
              if (!isDropdownOpen) setIsDropdownOpen(true);
            }}
          />
          {isDropdownOpen && (
            <GlobalDropDown
              setOpen={setIsDropdownOpen}
              isLoggedIn={isLoggedIn}
            />
          )}
        </S.Menus>
      </S.InnerContainer>
    </S.Container>
  );
};

export default LayoutPageHeader;
