import { ChangeEvent } from "react";
import * as S from "./style";
interface TextInputProps {
  label: string;
  value: string;
  size: "lg" | "md" | "sm";
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({
  label,
  value,
  type,
  size = "md",
  onChange,
}: TextInputProps) => (
  <S.InputWrapper>
    <S.Label>{label}</S.Label>
    <S.Input type={type} size={size} value={value} onChange={onChange} />
  </S.InputWrapper>
);
export default Input;
