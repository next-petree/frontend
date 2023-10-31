import { useState, useEffect } from 'react';

function useModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (isModalVisible) {
      const timer = setTimeout(() => {
        hideModal();
      }, 3000); // 2초 후에 모달 숨기기

      return () => {
        clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 제거
      };
    }
  }, [isModalVisible]);

  return { isModalVisible, showModal, hideModal };
}

export default useModal;
