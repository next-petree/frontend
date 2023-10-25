import { styled } from "styled-components";

const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  opacity: 1;
`;

const FilterContainer = styled.div`
  position: absolute;
  width: 50vw;
  height: 37vw;
  border-radius: 50px;
  top: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 99999;
  background-color: white;
  padding: 3vw 6vw;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2vw;
`;
const Title = styled.h1`
  font-size: 3.5rem;
  display: flex;
`;
const Input = styled.input`
  width: 22vw;
  margin: 0 auto;
  border: none;
  border-radius: 12px;
  background-color: #f5f5f5;
  padding-left: 2vw;
  ::placeholder {
    font-weight: 600;
    font-size: 1.5rem;
    color: #939393;
  }
  &:focus {
    outline: none;
  }
`;
const Checks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1vw;
`;
const Check = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
`;
const Buttons = styled.div`
  display: flex;
  gap: 0.8vw;
`;
const Btn = styled.button<{ isCheck: boolean }>`
  width: 7.5vw;
  height: 7vh;
  border: ${(props) => (props.isCheck ? "none" : "1px solid #4EC1BF")};
  border-radius: 12px;
  background-color: ${(props) => (props.isCheck ? "#4EC1BF" : "white")};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: ${(props) => (props.isCheck ? "white" : " #4EC1BF")};
`;
const LongBtn = styled.button<{ isCheck: boolean }>`
  width: 17vw;
  height: 7vh;
  border: ${(props) => (props.isCheck ? "none" : "1px solid #4EC1BF")};
  border-radius: 12px;
  background-color: ${(props) => (props.isCheck ? "#4EC1BF" : "white")};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: ${(props) => (props.isCheck ? "white" : " #4EC1BF")};
`;
const Span = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

const Confirms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8vw;
  margin-top: 1vw;
`;

const ConfirmBtn = styled.button<{ isYes: boolean }>`
  width: 17vw;
  height: 7vh;
  border: none;
  border-radius: 12px;
  background-color: ${(props) => (props.isYes ? "#4EC1BF" : "black")};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: white;
`;

export default function SearchFilter() {
  return (
    <Overlay>
      <FilterContainer>
        <Form>
          <Title>
            필터{" "}
            <Input
              title="견종입력"
              placeholder="원하시는 견종을 입력해주세요"
            />
          </Title>
          <Checks>
            <Check title="브리더인증">
              <Span>브리더 인증 여부</Span>
              <Buttons>
                <Btn isCheck={true}>전체</Btn>
                <Btn isCheck={false}>인증 O</Btn>
              </Buttons>
            </Check>
            <Check title="분양가능">
              <Span>분양 가능 여부</Span>
              <Buttons>
                <LongBtn isCheck={true}>전체</LongBtn>
                <LongBtn isCheck={false}>분양 가능 강아지</LongBtn>
              </Buttons>
            </Check>
            <Check title="성별">
              <Span>성별</Span>
              <Buttons>
                <Btn isCheck={true}>전체</Btn>
                <Btn isCheck={false}>수컷</Btn>
                <Btn isCheck={false}>암컷</Btn>
              </Buttons>
            </Check>
            <Check title="크기">
              <Span>크기</Span>
              <Buttons>
                <Btn isCheck={true}>전체</Btn>
                <Btn isCheck={false}>초소형</Btn>
                <Btn isCheck={false}>소형</Btn>
                <Btn isCheck={false}>중형</Btn>
                <Btn isCheck={false}>대형</Btn>
                <Btn isCheck={false}>그 외</Btn>
              </Buttons>
            </Check>
          </Checks>
          <Confirms>
            <ConfirmBtn isYes={true}>검색</ConfirmBtn>
            <ConfirmBtn isYes={false}>취소</ConfirmBtn>
          </Confirms>
        </Form>
      </FilterContainer>
    </Overlay>
  );
}
