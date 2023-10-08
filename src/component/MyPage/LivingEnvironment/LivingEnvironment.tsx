import * as S from "./LivingEnvironmentStyle";

const LivingEnvironment = () => {
  return (
    <S.Container>
      <S.Content>
        <S.LivingEnvironmentLabel>주거환경</S.LivingEnvironmentLabel>
        <S.LivingEnvironmentContent>
          <S.LivingEnvironmentContentImage />
          <S.LivingEnvironmentContentLabel>
            마당
          </S.LivingEnvironmentContentLabel>
        </S.LivingEnvironmentContent>
      </S.Content>

      <S.ButtonContainer>
        <S.SaveButton>저장</S.SaveButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default LivingEnvironment;
