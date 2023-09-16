import { styled } from 'styled-components';

export const ReviewBox = styled.div`
  max-width: 1280px;
`;

export const ReviewContentsBox = styled.div`
  max-width: 1080px;
  min-height: 960px;
`;

export const PreviewBtn = styled.button`
  color: #939393;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.42px;
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  position: absolute;
  top: -42px;
  right: 0;
  div {
    margin-top: 5px;
  }
`;

export const EditBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const SemiTitle = styled.h3`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: #000;
  line-height: normal;
  margin-bottom: 24px;
`;
export const EditContetsBox = styled.div`
  margin-bottom: 40px;
  .line {
    margin-bottom: 32px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .box {
    max-width: 360px;
    width: 100%;
  }
`;
export const FormContainer = styled.form`
  width: 100%;
  color: #000;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;

export const Input = styled.input`
  /* input 기본 스타일 초기화 */
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
  input::-ms-clear {
    display: none;
  }

  /* input type number 에서 화살표 제거 */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  width: 100%;
  background: #f5f5f5;
  border-radius: 25px;
  padding: 13px 22px;
  border: none;
  height: 48px;
  box-sizing: border-box;
  font-size: 16px;
`;

export const ReviewWritingBox = styled(EditContetsBox)`
  margin-bottom: 60px;
  .box {
    max-width: 100%;
  }
`;
export const StyledTextarea = styled.textarea`
  width: 100%;
  background: #f5f5f5;
  border-radius: 25px;
  padding: 19px 22px;
  border: none;
  box-sizing: border-box;
  font-size: 16px;
  min-height: 198px;
  resize: none;
`;

export const ImageUploadBox = styled(EditContetsBox)`
  margin-bottom: 0;
  .box {
    font-size: 28px;
  }
`;
export const ImagesSeleted = styled.div`
  height: 200px;
  width: 240px;
  border-radius: 12px;
  background: #f5f5f5;
  margin-bottom: 20px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 0;
  .sumnail_icon {
    display: flex;
    align-items: flex-start;
  }
  &:hover {
    background: gray;
    transform: 0.5s;
    color: #fff;
  }
  input {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;
export const ImagesButton = styled.button`
  width: 100%;
  border-radius: 3px;
  height: 50px;
  cursor: pointer;
`;
export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  button {
    margin: 0 5px;
  }
`;
