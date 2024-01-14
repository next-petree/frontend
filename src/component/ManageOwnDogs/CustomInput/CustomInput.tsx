import styled from "styled-components";
import { BiSolidDownArrow } from "react-icons/bi";

import * as S from "./styles";

type Props = {
    placeHolder: string;
    width: string;
    height: string;
};

const CustomInput = ({ placeHolder, width, height }: Props) => {
    return (
        <S.DOBInputBox width={width} height={height}>
            <S.DOBInput placeholder={placeHolder} disabled />
            <S.IconContainer>
                <BiSolidDownArrow />
            </S.IconContainer>
        </S.DOBInputBox>
    );
};

export default CustomInput;
