import { FC } from "react";
import { CircularProgress } from "@mui/material";
import * as S from "component/common/SuspendFallbackLoading/style";

interface SuspendFallbackLoadingProps {}

const SuspendFallbackLoading: FC<SuspendFallbackLoadingProps> = () => {
  return (
    <S.SuspendedFallbackLoadingContainer>
      <CircularProgress size={20} thickness={2} />
    </S.SuspendedFallbackLoadingContainer>
  );
};
export default SuspendFallbackLoading;
