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
  return <S.Container></S.Container>;
}
