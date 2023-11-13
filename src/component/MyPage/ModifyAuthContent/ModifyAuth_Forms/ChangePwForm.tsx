import {
  Button,
  Container,
  Form3,
  Input,
  Label,
  Pw,
  Pws,
  Store,
  Title,
} from "./styles";

const ChangePwForm = () => {
  return (
    <Container>
      <Title>비밀번호 변경</Title>
      <Form3>
        <Pws>
          <Pw>
            <Label>현재 비밀번호 입력</Label>
            <Input islen="mid" />
          </Pw>
          <span>비밀번호는 영문,숫자 입력으로 4~16자 이내</span>
          <Pw>
            <Label>변경할 비밀번호 입력</Label>
            <Input islen="mid" />
          </Pw>
          <Pw>
            <Label>변경할 비밀번호 확인</Label>
            <Input islen="mid" />
          </Pw>
        </Pws>
        <Store>
          <Button isLong={true}>저장</Button>
        </Store>
      </Form3>
    </Container>
  );
};

export default ChangePwForm;
