import { useState, useCallback } from "react";

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const showModal = useCallback((content: any = "") => {
    // 기본값 설정
    setIsModalVisible(true);
    setModalContent(content);
    document.body.style.overflow = "hidden";
  }, []);

  const hideModal = useCallback(() => {
    setIsModalVisible(false);
    document.body.style.overflow = "auto";
  }, []);

  return { isModalVisible, showModal, hideModal, modalContent };
};

export default useModal;
