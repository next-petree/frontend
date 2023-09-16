import { useEffect, useState, useRef } from 'react';
import { styled } from 'styled-components';

const ToastDiv = styled.div`
  display: inline-block;
  position: fixed;
  opacity: 0;
  z-index: 100;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  transition:
    opacity 0.3s 0s ease-in,
    top 0.3s 0s ease-in;
  background: #fff;
  width: 479px;
  padding: 40px 165px;
  border-radius: 32px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.09);
  &.active {
    opacity: 1;
    z-index: 100;
    top: 70px;
    pointer-events: auto;
  }
  p {
    color: #000;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
  }
`;
let ToastOpen: any = '';
function Toast() {
  const pRef = useRef(null);
  const [view, setView] = useState(false);
  const [text, setText] = useState('');
  useEffect(() => {
    (pRef.current as any).addEventListener('custom', async (e: any) => {
      console.log('react caught custom event directly on component');
      await new Promise((resolve, reject) => {
        if (e.detail && e.detail.txt) {
          setText(e.detail.txt);
          setView(true);
        }
        setTimeout(() => {
          resolve('');
        }, 2000);
      });
      setView(false);
    });
    ToastOpen = (txt: string) => {
      const e = new CustomEvent<{ txt: string }>('custom', { detail: { txt } });
      (pRef.current as any).dispatchEvent(e);
    };
  });
  return (
    <ToastDiv className={(view && 'active') + ''}>
      <p ref={pRef}>{text}</p>
    </ToastDiv>
  );
}
export { Toast, ToastOpen };
