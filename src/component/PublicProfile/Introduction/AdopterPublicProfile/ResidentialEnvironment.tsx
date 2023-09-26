import * as S from "./ResidentialEnvironmentStyle";

function ResidentialEnvironment() {
  const data = {
    residentialEnvironment: {
      roomDivision: ["마당", "거실", "화장실"],
    },
  };
  return (
    <S.Container>
      <S.ResidentialEnvironmentText>주거환경</S.ResidentialEnvironmentText>
      <S.ResidentialEnvironmentContainer>
        {data.residentialEnvironment.roomDivision.map((Home, index) => (
          <S.RoomDivision key={index}>
            <S.RoomDivisionImage />
            <S.RoomDivisionName>{Home}</S.RoomDivisionName>
          </S.RoomDivision>
        ))}
      </S.ResidentialEnvironmentContainer>
    </S.Container>
  );
}

export default ResidentialEnvironment;
