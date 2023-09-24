import { useCallback } from "react";
import { getGlobalState } from "utils/getGlobalState";
import _ from "lodash";

const useUserData = () => {
  const onWindowResize = useCallback(() => {
    const { device } = getGlobalState();
    const rect = document.body.getBoundingClientRect();
  }, []);

  return {
    onWindowResize,
  };
};

export default useUserData;
