import Layout from 'components/common/Layout';
import { styled } from 'styled-components';
import TwoPuppys from 'assets/images/main/service_left.png';

const Service = styled.section`
  width: 100%;
  .container {
    width: 1240px;
    display: flex;
    gap: 90px;
    margin: 222px 320px 184px;
  }
`;

const TowPuppysImage = styled.img`
  width: 480px;
  height: 440px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 135%;
    letter-spacing: -2px;
    margin-bottom: 24px;
    & + .sub-title {
      color: #3dbcb9;
      font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -1.2px;
    }
  }
`;

const BreederWrapper = styled.div`
  h2 {
    color: #333;
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1.2px;
    margin: 45px 0 13px;
    & + p {
      color: #333;
      font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -1px;
      word-break: keep-all;
    }
  }
`;

const ServiceSection = () => {
  return (
    <Service>
      <Layout>
        <div className="container">
          <TowPuppysImage src={TwoPuppys} alt="두마리 강아지" />
          <TextWrapper>
            <h2>
              완전히 새로운 서비스
              <br />
              브리더와 분양자를 이어줍니다
            </h2>
            <p className="sub-title">또 하나의 가족이 될 반려견과 분양희망자를 위해 노력합니다</p>
            <BreederWrapper>
              <h2>브리더란?</h2>
              <p>
                우수한 견종보존을 위해 동물보호 의식과 견종표준의 이해를 기반으로 견종의
                <br /> 짝짓기, 출산, 질병, 위생 자견분양 등 번식에 전문적인 지식을 갖추어
                <br /> 강아지나 고양이의 혈통을 유지하고 올바르게 번식해 애견문화 발전에 기여합니다
              </p>
            </BreederWrapper>
          </TextWrapper>
        </div>
      </Layout>
    </Service>
  );
};

export default ServiceSection;
