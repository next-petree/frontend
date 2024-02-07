import { styled } from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 100%;
  height: fit-content;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  padding: 4vw 3vw 2.5vw;
  z-index: 100;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

export const Infos = styled.div`
  padding-top: 3vh;
  padding-left: 1vw;
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  position: relative;
`;

export const AvatarBox = styled.div`
  position: relative;
  background-color: white;
  width: 13vw;
  height: fit-content;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  padding: 4vw 3vw 2.5vw;
  z-index: 120;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const AvatarInfo = styled.div`
  position: relative;
`;
export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const AvatarBorder = styled.div<{ $isAuth: boolean }>`
  width: 9vw;
  height: 9vw;
  border-radius: 100%;
  border: 2px solid ${(props) => (props.$isAuth ? "#FF6363" : "#23F39C")};
  overflow: hidden;
  cursor: pointer;
`;
export const UploadAvatarBorder = styled.div`
  position: relative;
  width: 10vw;
  height: 10vw;
  border-radius: 100%;
  overflow: hidden;
  align-self: center;
  margin-bottom: -3vh;
  cursor: pointer;
`;

export const AvatarInput = styled.input`
  display: none;
`;

export const AvatarLabel = styled.label`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const AvatarDeleteBtn = styled.div`
  position: absolute;
  top:5vw;
  right: 4.27vw;
`;
export const Badge = styled.span`
  position: absolute;
  width: 2.2vw;
  height: 2.5vw;
  bottom: 0;
  left: 7vw;
`;
export const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  span {
    font-size: 1.5rem;
    margin-left: 3vw;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 2rem;
`;
export const Auth = styled.div`
  position: relative;
  width: 22vw;
  height: 5vh;
  background-color: #f5f5f5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.5rem;
  padding-left: 20px;
`;

export const CheckMark = styled.div`
  position: absolute;
  right: 1vw;
`
export const Introduce = styled.textarea`
  width: 85%;
  height: 150px;
  padding-left: 20px;
  font-size: 1.8rem;
  padding: 20px;
  padding-right: 10%;
  border: none;
  background-color: #f5f5f5;
  border-radius: 12px;
  resize: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 600;
    font-size: 1.5rem;
    color: #939393;
  }
`;

export const Checklen = styled.div`
  position: absolute;
  font-size: 1.7rem;

  font-weight: 600;
  bottom: 10%;
  right: 5%;
`;

export const Input = styled.input<{ $islen: string }>`
  display: flex;
  align-items: center;
  border: none;
  width: ${(props) =>
    props.$islen === "mid"
      ? "18.7vw"
      : props.$islen === "shot"
      ? "15vw"
      : props.$islen === "long"
      ? "21.5vw"
      : null};
  height: 48px;
  border-radius: 12px;
  background-color: #f5f5f5;
  padding-left: 14px;
  font-size: 1.7rem;
  &::placeholder {
    font-weight: 600;
    font-size: 1.7rem;
    color: #939393;
  }
`;

export const Images = styled.div`
  display: flex;
  gap: 2vw;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 12.5vw;
  height: 26vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  background-position: center;
  background-size: cover;
`;

export const ImageDeleteBtn = styled.div`
  position: absolute;
  top: -18px;
  right: -19px;
`;

export const ImageInput = styled.input`
  display: none;
`;
export const ImageLabel = styled.label`
  display: inline-block;
  width: 100%;
  height: 72%;
  color: #999;
  background-color: #f5f5f5;
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageText = styled.span`
  margin-top: 29px;
  color: #333333;
  font-size: 20px;
  font-weight: 600;
`;

export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6vw;
  height: 52px;
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
  width: ${(props) => (props.$isLong ? "12.5vw" : "6vw")};
  height: 52px;
  border: none;
  border-radius: 12px;
  background-color: #35d8d5;
  font-weight: 700;
  font-size: 1.8rem;
  color: white;
`;

export const InsideForm = styled.div`
  display: flex;
  gap: 0.5vw;
`;

export const Store = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 8vh;
`;

export const Tags = styled.div`
  margin-left: 1.5vw;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Tag = styled.div`
  position: relative;
  background-color: #f5f5f5;
  padding: 8px 14px;
  border-radius: 12px;
  span {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

export const DeleteBtn = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: #aeaeae;
  font-size: 1.2rem;
  font-weight: 600;
  top: 0;
  right: 0;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
