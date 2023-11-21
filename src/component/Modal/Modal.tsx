import { useState, useCallback } from 'react';

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const showModal = useCallback((content: any) => {
    setIsModalVisible(true);
    setModalContent(content);
    document.body.style.overflow = 'hidden'; // 모달이 열렸을 때 뒷배경 스크롤 막기
  }, []);

  const hideModal = useCallback(() => {
    setIsModalVisible(false);
    document.body.style.overflow = 'auto'; // 모달이 닫혔을 때 뒷배경 스크롤 허용
  }, []);

  return { isModalVisible, showModal, hideModal, modalContent };
};

export default useModal;
