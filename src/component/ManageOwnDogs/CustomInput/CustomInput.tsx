import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

import * as S from "./styles";

interface IProps {
    value?: string;
    genderArr?: string[];
    statusArr?: string[];
    width: string;
    height: string;
    updateGenderState?: (value: string) => void;
    updateStatusState?: (value: string) => void;
}

const CustomInput = ({
    value,
    genderArr,
    statusArr,
    width,
    height,
    updateGenderState,
    updateStatusState
}: IProps) => {
    const [isArrowClicked, setIsArrowClicked] = useState(false);
    const [gender, setGender] = useState<string | undefined>(value);
    const [status, setStatus] = useState<string | undefined>(value);

    if (genderArr) {
        return (
            <S.Wrapper width={width} height={height}>
                <S.Input value={gender} disabled />
                <S.IconContainer
                    onClick={() => setIsArrowClicked(!isArrowClicked)}
                    isclicked={isArrowClicked}
                >
                    <BiSolidDownArrow />
                </S.IconContainer>
                <S.SelectUl>
                    {isArrowClicked &&
                        genderArr.map((g, index) => (
                            <S.SelectLi
                                key={index}
                                onClick={() => {
                                    setGender(g);
                                    updateGenderState && updateGenderState(g);
                                    setIsArrowClicked(!isArrowClicked);
                                }}
                            >
                                {g}
                            </S.SelectLi>
                        ))}
                </S.SelectUl>
            </S.Wrapper>
        );
    }

    return (
        <S.Wrapper width={width} height={height}>
            <S.Input value={status} disabled />
            <S.IconContainer
                isclicked={isArrowClicked}
                onClick={() => setIsArrowClicked(!isArrowClicked)}
            >
                <BiSolidDownArrow />
            </S.IconContainer>
            <S.SelectUl>
                {isArrowClicked &&
                    statusArr?.map((s, index) => (
                        <S.SelectLi
                            key={index}
                            onClick={() => {
                                setStatus(s);
                                updateStatusState && updateStatusState(s);
                                setIsArrowClicked(!isArrowClicked);
                            }}
                        >
                            {s}
                        </S.SelectLi>
                    ))}
            </S.SelectUl>
        </S.Wrapper>
    );
};

export default CustomInput;
