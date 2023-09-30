import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

interface SwitchIOSProps {
  checked: boolean;
  onClick?: () => void;

  duration?: number;
  colors?: {
    trackColor: string;
    circleColor: string;
  };
}

export const SwitchIOS = ({
  checked,
  onClick,
  duration,
  colors,
}: SwitchIOSProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  // colors?.trackColor;
  // colors?.circleColor;

  useEffect(() => {
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), duration || 300);
  }, [checked, duration]);

  return (
    <div>
      <S.SwitchCotainer>
        <S.SwitchBackground checked={checked}>
          <S.SwitchTrack onClick={onClick} disabled={isDisabled}>
            <S.SwitchCircle checked={checked} />
          </S.SwitchTrack>
        </S.SwitchBackground>
      </S.SwitchCotainer>
    </div>
  );
};

const S = {
  SwitchCotainer: styled.div`
    width: 48px;
    height: 24px;
    border-radius: 48px;
    overflow: hidden;
    text-align: center;
    position: relative;
  `,
  SwitchBackground: styled.div<{ checked: boolean }>`
    width: 48px;
    height: 24px;

    ${({ checked }) => css`
      background-color: ${checked ? "red" : "black"};
    `}
  `,
  SwitchCircle: styled.div<{ checked: boolean }>`
    box-sizing: border-box;
    position: absolute;
    width: 22px;
    height: 22px;
    border: none;

    background-color: white;
    border-radius: 50%;
    box-shadow: 0 3px 7px 0 rgba(0 0 0 / 0.12);

    ${({ checked }) => css`
      left: ${checked ? "50%" : "2px"};
      transition: left 0.3s ease-out;
    `};
  `,
  SwitchTrack: styled.button`
    width: 48px;
    height: 24px;
    border: none;
    background-color: transparent;

    :hover {
      cursor: pointer;
    }
  `,
};
