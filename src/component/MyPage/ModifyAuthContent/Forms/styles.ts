import { styled } from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 49vw;
  height: fit-content;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  padding: 4vw 3vw 2.5vw;
  z-index: 100;
`;

export const Title = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 3rem;
`;
export const Form1 = styled.form`
  padding-top: 3vh;
  padding-left: 1vw;
`;

export const Form2 = styled.form`
  display: flex;
  gap: 0.5vw;
`;

export const Form3 = styled.form`
  margin-top: 4.3vh;
`;

export const Infos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 3vw;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  span {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    font-size: 1.7rem;
    margin-left: 8vw;
  }
`;
export const Input = styled.input<{ islen: string }>`
  display: flex;
  align-items: center;
  border: none;
  width: ${(props) =>
    props.islen === "mid"
      ? "18.7vw"
      : props.islen === "shot"
      ? "15vw"
      : props.islen === "long"
      ? "21.5vw"
      : null};
  height: 48px;
  border-radius: 12px;
  background-color: #fefefe;
  padding-left: 14px;
  ::placeholder {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: 1vw;
    color: #939393;
  }
`;

export const Button = styled.button<{ isLong: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.isLong ? "12.5vw" : "6vw")};
  height: 52px;
  border: none;
  border-radius: 12px;
  background-color: #35d8d5;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: white;
`;
export const Store = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 8vh;
`;

export const Pws = styled.div`
  width: 32vw;
  display: flex;
  flex-direction: column;
  gap: 4.3vh;
  span {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 14px;
    font-weight: 350;
    text-align: right;
    margin-bottom: -3vh;
  }
`;

export const Pw = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5vh;
`;
