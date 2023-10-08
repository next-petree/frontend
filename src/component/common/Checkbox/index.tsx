import { HTMLAttributes } from "react";
import * as S from "./style";
export enum Size {
  LARGE,
  SMALL,
}
interface ICheckbox {
  label: string;
  value: boolean;
  size?: Size;
  onChange?: any;
}

export default function Checkbox({
  value,
  label,
  size = Size.SMALL,
  onChange,
}: ICheckbox & HTMLAttributes<HTMLInputElement>) {
  return (
    <S.Container>
      <S.Box
        size={size}
        type="checkbox"
        name={label}
        checked={value}
        onChange={onChange}
      />
      <S.Label size={size}>{label}</S.Label>
    </S.Container>
  );
}
