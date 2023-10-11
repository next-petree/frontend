import styled from "styled-components";
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 1.25rem;
  color: "#000000";
`;

export const Input = styled.input<{ size: "sm" | "md" | "lg" }>`
  width: 21.25rem;
  padding: 1.25rem;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  background-color: #f5f5f5 !important;
  color: #000000;
  &:focus {
    box-shadow: none;
    outline: none;
    background-color: #f5f5f5;
  }
  ${(props) => {
    switch (props.size) {
      case "lg":
        return `
        max-width:280px
        `;
      case "md":
        return `
        max-width:240px
        `;
      case "sm":
        return `
        max-width:196px
        `;
      default:
        return "";
    }
  }}
`;
