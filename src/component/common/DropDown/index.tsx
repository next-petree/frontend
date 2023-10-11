import { HTMLAttributes, forwardRef, ReactNode } from "react";
import * as S from "./style";

interface DropDownProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const DropDown = forwardRef<HTMLDivElement, DropDownProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <S.DropDownContainer ref={ref} {...restProps}>
      {children}
    </S.DropDownContainer>
  );
});

export default DropDown;
