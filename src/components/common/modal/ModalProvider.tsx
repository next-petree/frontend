import { ReactNode, createContext, useEffect, useState } from 'react';
import Modal, { ModalProps } from './Modal';
import { createPortal } from 'react-dom';

export const ModalContext = createContext({
  modalContent: null as ReactNode,
  setModalContent: (content: ReactNode) => {},
  isOpen: false,
  setOption: (option: ModalProps['option']) => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export default function ModalProvider({ children }: ModalProviderProps) {
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [option, setOption] = useState<ModalProps['option']>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (modalContent === null) {
      setIsOpen(false);
      setOption(undefined);
    } else {
      setIsOpen(true);
    }
  }, [modalContent]);

  return (
    <ModalContext.Provider value={{ modalContent, setModalContent, isOpen, setOption }}>
      {children}
      {isOpen && createPortal(<Modal option={option}>{modalContent}</Modal>, modalRoot)}
    </ModalContext.Provider>
  );
}
