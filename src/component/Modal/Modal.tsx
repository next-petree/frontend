import { useState } from 'react';

function useModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    document.body.style.overflow = 'hidden'; // 모달이 열렸을 때 뒷배경 스크롤 막기
  };

  const hideModal = () => {
    setIsModalVisible(false);
    document.body.style.overflow = 'auto'; // 모달이 닫혔을 때 뒷배경 스크롤 허용
  };

  return { isModalVisible, showModal, hideModal };
}

export default useModal;
