import { EnterInformationFormItem } from "@component/SignUp/EnterInformation/EnterInformationInput";
import styled from "@emotion/styled";

export const EnterInformationForm = () => {
  return (
    <div>
      <S.Flex gap={9}>
        <EnterInformationFormItem.Trigger>
          브리더
        </EnterInformationFormItem.Trigger>
        <EnterInformationFormItem.Trigger>
          분양희망자
        </EnterInformationFormItem.Trigger>
      </S.Flex>
      <S.FormContainer>
        <S.GridContainer>
          <EnterInformationFormItem>
            <EnterInformationFormItem.Title required>
              이메일
            </EnterInformationFormItem.Title>
            <EnterInformationFormItem.Column>
              <EnterInformationFormItem.Row>
                <EnterInformationFormItem.Input
                  guideMessage="2 ~ 10자 이내"
                  placeholder="breeder@email.com"
                />
                <EnterInformationFormItem.Trigger>
                  중복확인
                </EnterInformationFormItem.Trigger>
              </EnterInformationFormItem.Row>
            </EnterInformationFormItem.Column>
          </EnterInformationFormItem>

          <EnterInformationFormItem>
            <EnterInformationFormItem.Title required>
              주력견종
            </EnterInformationFormItem.Title>
            <EnterInformationFormItem.Column>
              <EnterInformationFormItem.Row>
                <EnterInformationFormItem.Input placeholder="원하시는 견종을 입력해 주세요." />
                <EnterInformationFormItem.Trigger>
                  검색
                </EnterInformationFormItem.Trigger>
              </EnterInformationFormItem.Row>
            </EnterInformationFormItem.Column>
          </EnterInformationFormItem>

          <EnterInformationFormItem>
            <EnterInformationFormItem.Title required>
              비밀번호
            </EnterInformationFormItem.Title>
            <EnterInformationFormItem.Column>
              <EnterInformationFormItem.Input
                guideMessage="4~16자로 특수문자를 포함"
                placeholder="비밀번호"
              />
            </EnterInformationFormItem.Column>
          </EnterInformationFormItem>

          <EnterInformationFormItem>
            <EnterInformationFormItem.Title required>
              닉네임
            </EnterInformationFormItem.Title>
            <EnterInformationFormItem.Column>
              <EnterInformationFormItem.Row>
                <EnterInformationFormItem.Input
                  placeholder="닉네임 검색"
                  guideMessage="2 ~ 10자 이내"
                />
                <EnterInformationFormItem.Trigger>
                  중복확인
                </EnterInformationFormItem.Trigger>
              </EnterInformationFormItem.Row>
            </EnterInformationFormItem.Column>
          </EnterInformationFormItem>

          <EnterInformationFormItem>
            <EnterInformationFormItem.Title required={false}>
              비밀번호 확인
            </EnterInformationFormItem.Title>
            <EnterInformationFormItem.Column>
              <EnterInformationFormItem.Input placeholder="비밀번호" />
            </EnterInformationFormItem.Column>
          </EnterInformationFormItem>
        </S.GridContainer>

        <S.GridContainer>
          <EnterInformationFormItem>
            <EnterInformationFormItem.Title required>
              활동지역
            </EnterInformationFormItem.Title>
            <EnterInformationFormItem.Column>
              <EnterInformationFormItem.Row>
                <EnterInformationFormItem.Input placeholder="주소" />
                <EnterInformationFormItem.Trigger>
                  주소검색
                </EnterInformationFormItem.Trigger>
              </EnterInformationFormItem.Row>
              <EnterInformationFormItem.Input placeholder="상세주소" />
            </EnterInformationFormItem.Column>
          </EnterInformationFormItem>

          <EnterInformationFormItem>
            <EnterInformationFormItem.Title required>
              휴대전화
            </EnterInformationFormItem.Title>
            <EnterInformationFormItem.Column>
              <EnterInformationFormItem.Row>
                <EnterInformationFormItem.Input
                  guideMessage="2 ~ 10자 이내"
                  placeholder="전화번호"
                />
                <EnterInformationFormItem.Trigger>
                  인증요청
                </EnterInformationFormItem.Trigger>
              </EnterInformationFormItem.Row>
              <EnterInformationFormItem.Row>
                <EnterInformationFormItem.Input placeholder="인증번호" />
                <EnterInformationFormItem.Trigger>
                  확인
                </EnterInformationFormItem.Trigger>
              </EnterInformationFormItem.Row>
            </EnterInformationFormItem.Column>
          </EnterInformationFormItem>
        </S.GridContainer>
      </S.FormContainer>
    </div>
  );
};

const S = {
  Flex: styled.div<{ gap?: number }>`
    display: flex;
    justify-content: center;
    gap: ${({ gap }) => gap && `${gap}px`};
  `,

  FormContainer: styled.form`
    display: flex;
    flex-direction: column;

    gap: 110px;
    max-width: 900px;
    margin: 85px auto 182px auto;
  `,

  GridContainer: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 37px;
  `,
};
