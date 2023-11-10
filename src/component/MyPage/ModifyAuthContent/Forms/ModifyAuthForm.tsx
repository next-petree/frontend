import {
  Button,
  Container,
  Form1,
  Form2,
  Info,
  Infos,
  Input,
  Label,
  Store,
  Title,
} from "./styles";

const ModifyAuthForm = () => {
  return (
    <Container>
      <Title>회원정보 수정</Title>
      <Form1>
        <Infos>
          <Info>
            <Label>회원유형</Label>
            <Input islen="mid" />
          </Info>
          <Info>
            <Label>
              닉네임<span>2~10자 이내</span>
            </Label>
            <Form2>
              <Input islen="shot" placeholder="닉네임을 넣어주세요" />
              <Button isLong={false}>중복확인</Button>
            </Form2>
          </Info>
          <Info>
            <Label>이메일</Label>
            <Input islen="mid" />
          </Info>
          <Info>
            <Label>활동지역</Label>
            <Form2>
              <Input islen="shot" />
              <Button isLong={false}>주소검색</Button>
            </Form2>
            <Input islen="long" />
          </Info>
          <Info>
            <Label>휴대전화</Label>
            <Input islen="mid" />
          </Info>
        </Infos>

        <Store>
          <Button isLong={true}>저장</Button>
        </Store>
      </Form1>
    </Container>
  );
};

export default ModifyAuthForm;
