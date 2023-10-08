import { HTMLAttributes } from "react";
import * as S from "./style";

interface ICheckbox {
  label: string;
  name: string;
  text: string;
  value: boolean;
  size?: string;
  onChange?: any;
}

export default function Checkbox({
  value,
  text,
  label,
  name,
  size,
  onChange,
}: ICheckbox & HTMLAttributes<HTMLInputElement>) {
  return (
    <S.Container>
      <S.LabelText size={size}>{text}</S.LabelText>
      <S.Box
        id={text}
        size={size}
        type="radio"
        name={name}
        checked={value}
        onChange={onChange}
      />
      <S.Label htmlFor={text} size={size} checked={value}></S.Label>
    </S.Container>
  );
}
