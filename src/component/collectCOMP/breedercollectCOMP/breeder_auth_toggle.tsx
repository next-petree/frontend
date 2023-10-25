import styled from "styled-components";

const Toggle = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 48px;
  height: 24px;
  border-radius: 16px;
  border: none;
  position: relative;
  background-color: #4ec1bf;
`;

const Circle = styled.div`
    position: absolute;
    top: 2px;
    right: 2px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 2px 8px 0px #00000029;
    
`;

export default function BreederAuthToggle() {
  return (
    <Toggle>
      <Circle />
    </Toggle>
  );
}
