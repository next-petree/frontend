import Layout from 'components/common/Layout';
import { styled } from 'styled-components';
import breader from 'assets/images/main/join_breeder.png';
import buyer from 'assets/images/main/join_hopeful_buyer.png';

const Join = styled.section`
  width: 100%;
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 54px; /* 135% */
    letter-spacing: -2px;
    margin: 184px 0 10px;
    & + p {
      color: ${({ theme }) => theme.colors.primary};
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 42px; /* 175% */
      letter-spacing: -1.2px;
    }
  }
`;

const ThumbnailCardWrapper = styled.div`
  margin: 60px 0 322px;
  display: flex;
  gap: 20px;
`;

const ThumbnailCard = styled.div`
  .thumbnailWrapper {
    width: 480px;
    height: 340px;
    position: relative;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.09);
    border-radius: 18px;
    overflow: hidden;
    .tag {
      position: absolute;
      top: 20px;
      left: 20px;
      display: inline-flex;
      padding: 3px 20px;
      justify-content: center;
      align-items: center;
      gap: 6px;
      border-radius: 50px;
      border: 2px solid ${({ theme }) => theme.colors.accent};
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.accent};
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 36px; /* 225% */
      letter-spacing: -0.8px;
    }
    img {
      width: 480px;
      height: 340px;
    }
  }
  p {
    margin-top: 20px;
    color: #292929;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1.2px;
  }
`;

const JoinSection = () => {
  return (
    <Join>
      <Layout>
        <h2>새로운 당신의 가족, 반려동물을 맞이하세요!</h2>
        <p>사랑스러운 반려견을 따뜻한 가족의 품으로 함께 동참하세요!</p>
        <ThumbnailCardWrapper>
          <ThumbnailCard>
            <div className="thumbnailWrapper">
              <span className="tag">#브리더</span>
              <img src={breader} alt="브리더" />
            </div>
            <p>
              반려견의 속마음을 <br />잘 아는 브리더
            </p>
          </ThumbnailCard>
          <ThumbnailCard>
            <div className="thumbnailWrapper">
              <span className="tag">#분양희망자</span>
              <img src={buyer} alt="분양희망자" />
            </div>
            <p>
              반려견을 잘 케어해 줄 <br />
              분양희망자
            </p>
          </ThumbnailCard>
        </ThumbnailCardWrapper>
      </Layout>
    </Join>
  );
};

export default JoinSection;
