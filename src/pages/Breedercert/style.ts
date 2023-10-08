import { styled } from "styled-components";

export const TextButton = styled.span`
  cursor: pointer;
`;

export const CertSection = styled.section`
  cursor: pointer;
  margin: 20px 0px 106px 0px;
  width: 1152px;
  height: 339px;
  h2 {
    color: #333;
    font-family: Noto Sans KR;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.72px;
    margin-bottom: 20px;
  }
  img {
    width: 155px;
    height: 210px;
  }
  .box {
    position: relative;
    display: flex;
    gap: 100px;
    width: 1152px;
    height: 284px;
    box-sizing: border-box;
    padding: 20px 28px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #969696;
    div {
      position: absolute;
      bottom: 20px;
      right: 30px;
      text-align: right;
      color: #333;
      text-align: right;
      font-family: Noto Sans KR;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.6px;
    }
  }
  ul {
    width: 750px;
    height: 145px;
    color: #333;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 31px; /* 155% */
    letter-spacing: -0.6px;
    margin-bottom: 80px;
    word-break: keep-all;
    li {
      position: relative;
      &:before {
        content: " ";
        position: absolute;
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 15px;
        background: #333;
        top: 16px;
        left: -15px;
      }
    }
  }
  button {
    float: right;
    width: 327px;
    font-size: 20px;
    margin-top: 22px;
  }
`;

export const FormSection = styled.form`
  cursor: pointer;
  > h2 {
    color: #333;
    font-family: Noto Sans KR;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.72px;
  }
  label {
    color: #333;
    font-family: Noto Sans KR;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.54px;
  }
  .filebox {
    position: relative;
    margin: 10px 0px 0px 20px;
    .upload-name {
      display: inline-block;
      vertical-align: top;
      width: 360px;
      height: 48px;
      padding-left: 20px;
      box-sizing: border-box;
      background: #f5f5f5;
      color: #999999;
      border-radius: 16px;
      margin-right: 18px;
      border: 0px;
    }
    button {
      display: inline-block;
      vertical-align: top;
      width: 240px;
      height: 48px;
      text-align: center;
      line-height: 48px;
      flex-shrink: 0;
      border-radius: 16px;
      background: #4ec1bf;
      color: #fff;
      font-family: Noto Sans KR;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
    }
    label {
      position: absolute;
      width: 360px;
      height: 48px;
      display: block;
      top: 0px;
      left: 0px;
      font-size: 0px;
    }
    input[type="file"] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  }
  > div {
    display: inline-block;
    vertical-align: middle;
  }
  .radios > div {
    margin: 20px 0px 10px 0px;
    & + div {
      margin-top: 0px;
    }
    label {
      margin-left: 10px;
    }
  }
`;
export const Modal = styled.div<{ $height: number }>`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: ${(p) => p.$height + 10 + "px"};
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  top: 0px;
  > div {
    position: relative;
    top: 289px;
    width: 901px;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    margin: auto;
    img {
      width: 861px;
    }
    button {
      margin: auto;
    }
  }
`;
