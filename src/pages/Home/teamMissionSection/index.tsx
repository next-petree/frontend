import Picture from "@component/Common/PictureEl";
import * as S from "./style";
import Background from "assets/images/main/team_mission_background.png";
import BackgroundAvif from "assets/images/main/team_mission_background.avif";
import BackgroundWebp from "assets/images/main/team_mission_background.webp";
export const TeamMissionSection = () => {
  return (
    <S.TeamMission>
      <Picture
        className="background"
        imgUrl={Background}
        avifUrl={BackgroundAvif}
        webpUrl={BackgroundWebp}
        imgAlt="강아지들"
      />
      <S.Container>
        <S.InnerContainer>
          <S.Message>
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
          </S.Message>
        </S.InnerContainer>
      </S.Container>
    </S.TeamMission>
  );
};
