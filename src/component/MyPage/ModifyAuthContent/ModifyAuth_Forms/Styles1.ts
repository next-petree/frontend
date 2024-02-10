import { styled } from "styled-components";

export const Container = styled.div`
  background-color: white;
  height: fit-content;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  padding: 4vw 3vw 2.5vw;
  z-index: 1;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;
`;
export const Form1 = styled.form`
  padding-top: 3vh;
  padding-left: 1vw;
`;

export const InsideForm = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 975px) {
    justify-content: flex-start;
  }
  @media (max-width: 450px) {
    justify-content: space-between;
  }
  gap: 0.5vw;
`;

export const Form2 = styled.form`
  margin-top: 4.3vh;
`;

export const Infos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 3vw;
  @media (max-width: 975px) {
    grid-template-columns: 1fr;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 2rem;
  span {
    font-weight: 500;
    font-size: 1.7rem;
    margin-left: 8vw;
  }
`;
export const Input = styled.input<{ $islen: string }>`
  display: flex;
  align-items: center;
  border: none;
  width: ${props =>
    props.$islen === "mid"
      ? "18.7vw"
      : props.$islen === "shot"
      ? "15vw"
      : props.$islen === "long"
      ? "21.5vw"
      : null};
  min-width: 230px;
  @media (max-width: 450px) {
    min-width: 180px;
  }
  height: 48px;
  border-radius: 12px;
  background-color: #f5f5f5;
  padding-left: 14px;
  font-size: 1.7rem;
  font-weight: 600;
  &::placeholder {
    font-weight: 600;
    font-size: 1.7rem;
    color: #939393;
  }
`;

export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6vw;
  min-width: 85px;
  height: 52px;
  @media (max-width: 450px) {
    min-width: 50px;
  }
  border: none;
  border-radius: 12px;
  background-color: #35d8d5;
  font-weight: 700;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
`;

export const Button = styled.button<{ $isLong: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.$isLong ? "12.5vw" : "6vw")};
  min-width: 80px;
  height: 52px;
  border: none;
  border-radius: 12px;
  background-color: #35d8d5;

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
    font-size: 14px;
    font-weight: 350;
    text-align: right;
    margin-bottom: -3vh;
  }
`;

export const Pw = styled.div`
  display: flex;
  gap: 1.5vw;
  min-width: 800px;
  @media (max-width: 850px) {
    min-width: 300px;
    flex-direction: column;
    gap: 1.5vh;
  }
  position: relative;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 850px) {
    gap: 20px;
  }
`;

export const SeeBtn = styled.span<{ $isClicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.$isClicked ? "#35d8d5" : "#b6b6b6")};
  width: 20px;
  height: 10px;
  padding-bottom: 25px;
  @media (min-width: 850px) {
    margin-left: 100px;
  }
`;

export const Errmsg = styled.div<{ $needMargin: boolean }>`
  font-weight: 500;
  font-size: 1.7rem;
  margin-left: ${props => (props.$needMargin ? "12.5vw" : "14px")};
  margin-top: ${props => (props.$needMargin ? "-2.5vh" : null)};
  color: #35d8d5;
`;

export const TextSpan = styled.span`
  min-width: 270px;
  @media (max-width: 450px) {
    margin-left: -30px;
    margin-top: -10px;
  }
`;
