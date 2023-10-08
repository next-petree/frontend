import styled from "styled-components";
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Input = styled.input<{ size: "sm" | "md" | "lg" }>`
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
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
