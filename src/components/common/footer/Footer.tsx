import { styled } from 'styled-components';
import Logo from '../logo/Logo';
import { footerItems } from './footerItems';
import Layout from '../Layout';

const FooterEl = styled.footer`
  background: #507375;
  width: 100%;
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 62px 14px;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.53);
  }
`;

const IntroContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
`;

const FooterItemList = styled.ul`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  gap: 60px;
  li.footer-item-title {
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 26px; /* 162.5% */
  }
`;
const FooterItemLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  li.link {
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

const CopyRight = styled.div`
  padding: 24px 0;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default function Footer() {
  return (
    <FooterEl>
      <Layout>
        <div className="container">
          <IntroContainer>
            <Logo color="white" />
            <span>
              펫트리는 브리더 서비스를 하는
              <br />
              기관입니다. 더 많은 가족이 브리더의
              <br />
              서비스를 통해 가족을 만날 수 있도록
              <br />
              최선을 다하겠습니다.
            </span>
          </IntroContainer>
          <FooterItemList id="footer-item-list">
            {footerItems.map((item, index) => (
              <li className="footer-item-title" key={index}>
                {item.title}
                <FooterItemLinks className="footer-item-links">
                  {item.links.map((content, index) => (
                    <li className="link" key={index}>
                      {content.name}
                    </li>
                  ))}
                </FooterItemLinks>
              </li>
            ))}
          </FooterItemList>
        </div>
        <CopyRight>2023 Breeder Inc. All rights reserved </CopyRight>
      </Layout>
    </FooterEl>
  );
}
