import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 400px;
  margin-top: 5%;
  margin-bottom: 8%;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  margin: 50px 50px 40px 50px;
`;

export const LivingEnvironmentLabel = styled.div`
  width: 100%;
  margin-top: 60px;
  font-size: 30px;
  font-weight: bold;
`;

export const LivingEnvironmentContent = styled.div`
  margin-top: 20px;
  width: 25%;
  height: 170px;
  text-align: center;
`;

export const LivingEnvironmentContentImage = styled.div`
  width: 100%;
  height: 130px;
  background-color: yellow;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const LivingEnvironmentContentLabel = styled.label`
  font-size: 25px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 15px 25px;
  cursor: pointer;
  border: none;
  font-size: 14px;
  border-radius: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

//저장버튼

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SaveButton = styled(Button)`
  width: 30%;
`;
