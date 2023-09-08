import { styled } from 'styled-components';
import Logo from '../logo/Logo';
import { footerItems } from './footerItems';

const Container = styled.footer`
  background: #507375;
  width: 100%;
  height: 325px;
  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 10px 45px 10px;
  border-bottom: 0.5px solid #fff;
`;

const Wapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-right: 120px;
`;

const FooterItem = styled.div`
  color: #fff;
  display: flex;
  gap: 60px;
`;

const FooterItemTitle = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: 26px; /* 162.5% */
`;

const FooterItemContent = styled.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterItemLiEl = styled.li`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  span {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
`;

const CopyRight = styled.div`
  align-self: center;
  height: 100%;
  display: grid;
  align-content: center;
  color: #fff;
  font-size: 11px;
  font-style: normal;
  line-height: normal;
`;

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <Wapper>
          <IntroContainer>
            <Logo color="white" />
            <span>
              펫트리는 브리더와 입양자를 잇는 <br /> 매칭 플랫폼입니다. 더 많은 가족이 <br />
              브리더의 서비스를 통해 가족을 만날 수 있도록
              <br /> 최선을 다하겠습니다.
            </span>
          </IntroContainer>
          <FooterItem>
            {footerItems.map((item, index) => (
              <FooterItemContent key={index}>
                <FooterItemTitle>{item.title}</FooterItemTitle>
                {item.links.map((content, index) => (
                  <FooterItemLiEl key={index}>{content.name}</FooterItemLiEl>
                ))}
              </FooterItemContent>
            ))}
          </FooterItem>
        </Wapper>
      </InnerContainer>
      <CopyRight>2023 Breeder Inc. All rights reserved </CopyRight>
    </Container>
  );
}
