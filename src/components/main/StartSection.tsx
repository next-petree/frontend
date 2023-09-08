import { styled } from 'styled-components';
import Layout from 'components/common/Layout';
import BgImage from 'assets/images/main/start_background.png';

const Start = styled.section`
  width: 100%;
  height: 717px;
  background: linear-gradient(324deg, #3cbe9f 8.33%, #8ff9b9 100%);
  background-image: url(${BgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h2 {
    margin-top: 229px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 54px; /* 135% */
    letter-spacing: -2px;
  }
  .sub-title {
    margin: 28px 0;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px; /* 150% */
    letter-spacing: -1.2px;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 16px;
  .tag {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 50px;
    border: 2px solid ${({ theme }) => theme.colors.white};
    background: rgba(255, 255, 255, 0);
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px; /* 210% */
    letter-spacing: -1px;
  }
  margin-bottom: 17.37rem;
`;

export default function StartSection() {
  return (
    <Start>
      <Layout>
        <h2>
          펫트리와 함께,
          <br /> 분양 서비스를 시작하세요!
        </h2>
        <p className="sub-title">섬세한 브리더의 손길로 탄생한 반려견과 함께하세요!</p>
        <TagWrapper>
          <span className="tag">#펫트리</span>
          <span className="tag">#브리더</span>
          <span className="tag">#반려동물</span>
          <span className="tag">#댕댕이</span>
          <span className="tag">#가족</span>
        </TagWrapper>
      </Layout>
    </Start>
  );
}
