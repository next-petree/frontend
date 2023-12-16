import React, { useState } from 'react';
import {
  Container,
  InnerContent,
  LeftArea,
  TitleArea,
  TitleLogo,
  TitleTextLogo,
  InnerTextArea,
  InnerText,
  RightArea,
  CategoriesMenu,
  CategoriesLink,
  PagesMenu,
  PagesLink,
  BottomArea,
  CopyRightLogo,
  CopyrightBanner,
} from './FooterStyle';
import useModal from '../AlertModal/AlertModal';

const Footer = () => {
  const { isModalVisible, showModal, hideModal } = useModal();
  const [modalMessage, setModalMessage] = useState('');
  const handleClick = () => {
    setModalMessage('아직 준비중이에요!');
    showModal();
  };
  return (
    <>
      {isModalVisible && (
        <div
          style={{
            width: '409px',
            height: '109px',
            borderRadius: '32px',
            background: '#fff',
            position: 'fixed',
            top: '10%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            boxShadow: '1px 1px 4px 1px rgba(0, 0, 0, 0.1)',
            fontSize: '20px',
          }}
        >
          {modalMessage}
        </div>
      )}
      <Container>
        <InnerContent>
          <LeftArea>
            <TitleArea>
              <TitleLogo />
              <TitleTextLogo />
            </TitleArea>

            <InnerTextArea>
              <InnerText>
                펫트리는 브리더 서비스를 하는
                <br />
                기관입니다. 더 많은 가족이 브리더의
                <br /> 서비스를 통해 가족을 만날 수 있도록
                <br />
                최선을 다하겠습니다.
              </InnerText>
            </InnerTextArea>
          </LeftArea>

          <RightArea>
            <CategoriesMenu>
              Categories
              <CategoriesLink to="/test-description">
                인증 테스트
              </CategoriesLink>
              <CategoriesLink to="/dogys/1">강아지 모아보기</CategoriesLink>
              <CategoriesLink to="/breeders/1">브리더모아보기</CategoriesLink>
            </CategoriesMenu>

            <PagesMenu>
              Pages
              <PagesLink onClick={() => handleClick()} to="/">
                About Us
              </PagesLink>
              <PagesLink onClick={() => handleClick()} to="/">
                Contact Us
              </PagesLink>
            </PagesMenu>
          </RightArea>
        </InnerContent>

        <BottomArea>
          <CopyRightLogo />
          <CopyrightBanner>
            2023 Breeder Inc. All rights reserved
          </CopyrightBanner>
        </BottomArea>
      </Container>
    </>
  );
};

export default Footer;
