import styled from "styled-components";
import { CircularProgress } from "@mui/material";
export const StyledSpinner = styled(CircularProgress)`
  && {
    /* 원하는 스타일을 여기에 추가합니다. */
    color: #2196f3; /* 스피너 색상 변경 */
    /* 다른 스타일 속성 추가 가능 */
  }
`;
const SuspendedFallbackLoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { SuspendedFallbackLoadingContainer };
