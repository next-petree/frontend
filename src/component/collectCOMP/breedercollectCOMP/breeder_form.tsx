import styled from "styled-components";
import BreederAuthToggle from "./breeder_auth_toggle";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  height: 52px;
  margin: 0 auto;
`;

const State = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  color: #4ec1bf;
`;
const Form = styled.form`
  display: flex;
  gap: 17px;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  display: flex;
  align-items: center;
  border: none;
  width: 314px;
  height: 48px;
  border-radius: 12px;
  background-color: #f5f5f5;
  padding-left: 14px;
  ::placeholder {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #939393;
  }
`;
const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 52px;
    border: none;
    border-radius: 12px;
    background-color: #35D8D5;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: 2.5rem;
    color: white;
`;

export default function BreederForm() {
  return (
    <Container>
      <BreederAuthToggle />
      <State>인증 브리더만 보기</State>
      <Form>
        <Input placeholder="원하시는 견종을 입력해주세요" />
        <Btn>검색</Btn>
      </Form>
    </Container>
  );
}
