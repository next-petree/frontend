import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

interface ModalContainerProps extends PropsWithChildren {
  closeModal: () => void;
}

const CommonModalContainer = ({ children }: ModalContainerProps) => {
  return <S.Background>{children}</S.Background>;
};

export const CommonModal = Object.assign(CommonModalContainer, {});

const fadeInKeyframs = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const S = {
  Background: styled.section`
    z-index: 2000;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;

    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);

    animation-name: ${fadeInKeyframs};
    animation-duration: 0.3s;
  `,
};
