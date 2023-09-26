import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import { ReactNode, useState } from "react";
import { ReactComponent as TriangleSVG } from "@assets/0min/triangle.svg";

interface TermsOfServiceTextAreaProps {
  datas: ReactNode[] | [];
}

export const TermsOfServiceTextArea = ({
  datas,
}: TermsOfServiceTextAreaProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isOpen = currentIndex > 0;

  const reset = () => setCurrentIndex(0);
  const next = () => setCurrentIndex(currentIndex + 1);

  const handleCurrentIndexOnClick = () => {
    const maxIndex = datas.length - 1;
    currentIndex === maxIndex ? reset() : next();
  };

  return (
    <S.TermsOfServiceArea isOpen={isOpen}>
      <S.TermsOfServiceContent>
        <Typography component="p">{datas[currentIndex]}</Typography>
      </S.TermsOfServiceContent>

      <S.Absolute isOpen={isOpen} onClick={handleCurrentIndexOnClick}>
        <TriangleSVG />
      </S.Absolute>
    </S.TermsOfServiceArea>
  );
};

const S = {
  TermsOfServiceArea: styled.div<{ isOpen: boolean }>`
    box-sizing: border-box;
    position: relative;
    padding: 20px 81px 20px 24px;

    background-color: gray;
    transition: height 300ms ease;

    height: ${({ isOpen }) => (isOpen ? "124px" : "58px")};
  `,

  TermsOfServiceContent: styled.div`
    overflow: auto;
    width: 100%;
    height: 100%;

    /** Firefox */
    scrollbar-width: none;

    /** Chrome/Edge */
    &::-webkit-scrollbar {
      width: 0;
    }
  `,
  Absolute: styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 10px;
    right: 40px;
    rotate: ${({ isOpen }) => (isOpen ? "calc(180deg)" : 0)};
    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  `,
};
