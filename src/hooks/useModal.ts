import { useCallback, useContext } from 'react';
import { ModalProps } from 'components/common/modal/Modal';
import { ModalContext } from 'components/common/modal/ModalProvider';

interface UseModal {
  open: (children: ModalProps['children'], option?: ModalProps['option']) => void;
  close: () => void;
  isOpen: boolean;
}

/**
 * 모달 컨텐츠를 열고 닫는 함수를 반환합니다.
 * @returns open, close
 * @author 호연
 */
export const useModal = (): UseModal => {
  const { setModalContent, isOpen, setOption } = useContext(ModalContext);

  /**
   * 모달을 닫는 함수
   */
  const close = useCallback(() => {
    setModalContent(null);
  }, [setModalContent]);

  /**
   * 모달을 여는 함수
   * @param children 모달의 content
   * @param option 모달의 옵셔널 인자
   * @author 호연
   */
  const open = useCallback(
    (children: ModalProps['children'], option?: ModalProps['option']) => {
      // 이미 열려있는 모달이 있는 경우
      if (isOpen) close();

      setModalContent(children);
      option && setOption(option);
    },
    [close, isOpen, setModalContent, setOption],
  );

  return {
    open,
    close,
    isOpen,
  };
};
