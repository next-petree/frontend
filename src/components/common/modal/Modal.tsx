import { styled } from 'styled-components';
import { Overlay } from './Overlay';
import React, { HTMLAttributes, memo, useRef } from 'react';
import { useModal } from 'hooks/useModal';

const Container = styled.div.attrs({ 'aria-label': 'modal-container' })`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 2.75rem;
  border-radius: 1.5rem;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
`;

const Button = styled.button<{ variant: ButtonVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 3.75rem;
  padding: 1.8125rem 10rem;
  border-radius: 1rem;
  background: ${({ variant, theme }) => (variant === 'accept' ? theme.colors.accent : theme.colors.white)};
  color: ${({ variant, theme }) => (variant === 'accept' ? theme.colors.white : theme.colors.text)};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 1.5rem;
`;

const CloseButton = styled.button.attrs({
  'aria-label': 'modal-close-button',
})`
  all: unset;
  position: absolute;
  cursor: pointer;
  width: 2.75rem;
  height: 2.75rem;
  top: -1.5rem;
  right: -1rem;
`;

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  option?: {
    hasCloseButton?: boolean;
    closeOnOutsideClick?: boolean;
    accept?: {
      text: string;
      onClick: () => void;
    };
    cancel?: {
      text: string;
      onClick: () => void;
    };
  };
}

type ButtonVariant = 'accept' | 'cancel';

function Modal({ children, option, ...props }: ModalProps) {
  const { close } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Overlay
        onClick={() => {
          option?.closeOnOutsideClick && close();
        }}
      />
      <Container {...props} ref={modalRef}>
        {option?.hasCloseButton && (
          <CloseButton onClick={close} data-testid="modal-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <g filter="url(#filter0_d_302_1582)">
                <path
                  d="M25 2C12.834 2 3 11.834 3 24C3 36.166 12.834 46 25 46C37.166 46 47 36.166 47 24C47 11.834 37.166 2 25 2Z"
                  fill="#191919"
                />
              </g>
              <path d="M30.7837 17.2324L19.2571 29.7679" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <path d="M31.3179 29.2305L18.7235 17.7683" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <filter
                  id="filter0_d_302_1582"
                  x="0"
                  y="0"
                  width="50"
                  height="50"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_302_1582" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_302_1582" result="shape" />
                </filter>
              </defs>
            </svg>
          </CloseButton>
        )}
        {children}
        <ButtonContainer>
          {option?.accept !== undefined && (
            <Modal.Accept
              onClick={() => {
                option.accept?.onClick();
                close();
              }}
            >
              {option.accept.text}
            </Modal.Accept>
          )}
          {option?.cancel !== undefined && (
            <Modal.Cancel
              onClick={() => {
                option.cancel?.onClick();
                close();
              }}
            >
              {option.cancel.text}
            </Modal.Cancel>
          )}
        </ButtonContainer>
      </Container>
    </>
  );
}

interface ModalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

Modal.Accept = ({ children, ...props }: ModalButtonProps) => (
  <Button aria-label="modal-accept" variant="accept" {...props}>
    {children}
  </Button>
);

Modal.Cancel = ({ children, ...props }: ModalButtonProps) => (
  <Button aria-label="modal-cancel" variant="cancel" {...props}>
    {children}
  </Button>
);

export default memo(Modal);
