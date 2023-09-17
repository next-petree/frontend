import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../logo/Logo';

import { PATHS } from '../../../constants';
import { useJwtInfo } from 'hooks/useJwtInfo';
import ProfilePic from '../profile-pic/ProfilePic';
import GnbDropdown from './GnbDropdown';

const Container = styled.header`
  width: 100%;
  height: 64px;
  z-index: 999;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #f5f5f5;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 10px 0px rgba(119, 119, 119, 0.05);
  backdrop-filter: blur(2px);
`;

const InnerContainer = styled.div`
  position: relative;
  margin: 0 auto;
  height: 100%;
  max-width: 1400px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menus = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1rem;
`;

interface MenuItem {
  name: string | React.ReactNode;
  path: string;
}

interface GlobalNavProps {
  isLoggedIn?: boolean;
}

export default function GlobalNav({ isLoggedIn }: GlobalNavProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { role } = useJwtInfo();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      name: '강아지 모아보기',
      path: PATHS.dogs.root,
    },
    {
      name: '브리더 모아보기',
      path: PATHS.breeders.root,
    },
  ]);

  useEffect(() => {
    if (role === 'BREEDER') {
      setMenuItems([
        {
          name: '브리더 인증받기',
          path: PATHS.breedercert.root,
        },
        {
          name: '강아지 모아보기',
          path: PATHS.dogs.root,
        },
        {
          name: '브리더 모아보기',
          path: PATHS.breeders.root,
        },
      ]);
    } else if (role === 'ADOPTER') {
      setMenuItems([
        {
          name: '인증 테스트',
          path: PATHS.certification.guide,
        },
        {
          name: '강아지 모아보기',
          path: PATHS.dogs.root,
        },
        {
          name: '브리더 모아보기',
          path: PATHS.breeders.root,
        },
      ]);
    } else {
      setMenuItems([
        {
          name: '강아지 모아보기',
          path: PATHS.dogs.root,
        },
        {
          name: '브리더 모아보기',
          path: PATHS.breeders.root,
        },
      ]);
    }
  }, [role]);
  return (
    <Container data-testid="gnb-container">
      <InnerContainer>
        <Logo />
        <Menus>
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
        </Menus>
        {isDropdownOpen && <GnbDropdown setOpen={setIsDropdownOpen} isLoggedIn={isLoggedIn} role={role} />}
      </InnerContainer>
    </Container>
  );
}

GlobalNav.defaultProps = {
  isLoggedIn: false,
};
