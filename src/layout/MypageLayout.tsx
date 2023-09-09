import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import ICON1 from 'assets/images/mypage/icon1.svg';
import ICON2 from 'assets/images/mypage/icon2.svg';
import LOGO from 'assets/images/mypage/logo.svg';
import SideMenuButton from 'components/mypage/SideMenuButton';
import { adoptmenuItem, breedmenuItem } from 'components/mypage/sidemenuItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { useJwtInfo } from 'hooks/useJwtInfo';

interface IMypageLayout {
  children: React.ReactNode;
}

export default function MypageLayout({ children, ...props }: IMypageLayout & HTMLAttributes<HTMLDivElement>) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const { role } = useJwtInfo();
  const menuList = role === 'BREEDER' ? breedmenuItem : adoptmenuItem;

  return (
    <Container {...props}>
      <HeaderWrap>
        <Img1 src={ICON1} />
        <Logo src={LOGO} />
        <Img2 src={ICON2} />
      </HeaderWrap>
      <ContainerWrap>
        <SideMenu>
          {menuList.map((v, i) => (
            <SideMenuButton
              key={i}
              label={v.name}
              state={pathname === v.path}
              onClick={() => navigate(v.path)}
              style={{
                borderTopLeftRadius: i === 0 ? '1rem' : '0',
                borderTopRightRadius: i === 0 ? '1rem' : '0',
              }}
            />
          ))}
          <Gap />
          <Button>회원탈퇴</Button>
        </SideMenu>
        <ContentWrap>{children}</ContentWrap>
      </ContainerWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 105rem;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 23.938rem;
  background-color: #4ec1bf;
  padding-left: 8rem;
`;

const Img1 = styled.img`
  width: 7.563rem;
  height: 12.813rem;
  margin-bottom: 1rem;
  margin-top: 1.4rem;
`;
const Img2 = styled.img`
  width: 11.261rem;
  height: 14.799rem;
  margin-top: 4.8rem;
  margin-left: 18rem;
`;

const Logo = styled.img`
  width: 21.438rem;
  height: 6.688rem;
  margin-left: 4rem;
`;

const ContainerWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 17.75rem;
  min-width: 1280px;
  height: 100%;
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 17%;
  height: 58rem;
  margin-right: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  border-radius: 1.5rem;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 83%;
`;

const Button = styled.button`
  width: 100%;
  height: 4.4rem;
  font-size: 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const Gap = styled.div`
  flex: 1;
`;

MypageLayout.Label = function Label({ children }: { children: React.ReactNode }) {
  return <LabelWrap>{children}</LabelWrap>;
};

const LabelWrap = styled.h4`
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.25rem;
  margin-bottom: 40px;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

MypageLayout.Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
MypageLayout.ContentsHeaders = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

MypageLayout.Content = styled.div``;

MypageLayout.Footer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
