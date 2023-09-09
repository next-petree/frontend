import Layout from 'components/common/Layout';
import { styled } from 'styled-components';
import Background from 'assets/images/main/team_mission_background.png';

const TeamMission = styled.section`
  position: relative;
  width: 100%;
  height: 793px;
  background-color: #ddd;
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Message = styled.div`
  display: inline-flex;
  height: 334px;
  padding: 24px 60px;
  margin-top: 237px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.65);
  h2 {
    color: #4a4a4a;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px; /* 125% */
    letter-spacing: -2px;
  }
  p {
    color: #636363;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1.2px;
  }
`;

const TeamMissionSection = () => {
  return (
    <TeamMission>
      <Layout>
        <Message>
          <h2>
            펫트리 <br />
            Team Mission
          </h2>
          <p>
            펫트리팀은 반려견과 분양희망자를 좀 더 원활히 이어줄 수 있도록
            <br />
            도와주자는 일념하에 구성되었습니다
            <br />
            반려견의 속마음을 잘 아는 브리더, 반려견을 케어해 줄
            <br />
            분양희망자를 모집합니다
          </p>
        </Message>
      </Layout>
    </TeamMission>
  );
};

export default TeamMissionSection;