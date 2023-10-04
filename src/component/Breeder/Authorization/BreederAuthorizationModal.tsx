import { Column } from "@component/0min/Column";
import { CommonModal } from "@component/0min/CommonModal";
import { useControlModal } from "@component/Search/Animal/SearchAnimalModal";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";

interface BreederAuthorizationModalProps extends PropsWithChildren {
  content: ReactNode;
}

export const BreederAuthorizationModal = ({
  children,
  content,
}: BreederAuthorizationModalProps) => {
  const { isShow, openModal, closeModal } = useControlModal();

  return (
    <>
      {isShow && (
        <CommonModal closeModal={closeModal}>
          <S.RectModal>
            <Column styles={{ gap: "20px" }}>
              {content}

              <Button variant="contained" onClick={closeModal}>
                확인
              </Button>
            </Column>
          </S.RectModal>
        </CommonModal>
      )}

      <span onClick={openModal}>{children}</span>
    </>
  );
};

const S = {
  RectModal: styled.div`
    padding: 20px;
    max-height: 90vh;
    overflow: auto;

    background-color: white;
  `,
};
