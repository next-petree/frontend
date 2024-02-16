import styled from "styled-components";

export const Wrapper = styled.div<{ height: string }>`
    /* width: calc((100% / 3) - 20px); */

    @media (min-width: 1024px) and (max-width: 1240px) {
    width: 200px;
    }

    @media (min-width: 768px ) and (max-width: 1023px) {
      width: 120px;
    }

    @media (max-width: 767px) {
      width: 100px;
    }

    height: ${(props) => props.height};
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;

    padding: 0 0 0 12px;
    margin: 0;

    border: 1px solid #dddddd;
    border-radius: 12px;
    background: #f5f5f5;

    &::placeholder {
        font-size: 16px;
    }
`;

export const IconContainer = styled.div<{ isclicked: boolean }>`
    position: absolute;
    top: 10px;
    right: 0;
    width: 26px;
    height: 32px;

    transform: ${(props) => (props.isclicked ? "rotate(180deg)" : "rotate(0)")};

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    color: #4ec1bf;

    cursor: pointer;
`;

export const SelectUl = styled.ul`
    width: 100%;
    position: absolute;
    top: 50px;
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 12px;
    box-shadow: 0px 14px 20px 0px #3a3a3a14;
    list-style-type: none;

    margin: 0;
    padding: 0;
    z-index: 999;

    cursor: pointer;
`;

export const SelectLi = styled.li`
    /* width: 100%; */
    height: 58px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    border-radius: 16px;
    border-bottom: 1px solid #eeeeee;

    padding: 0px 20px;
    gap: 10px;

    font-family: Noto Sans KR;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: -0.03em;
    text-align: left;
    color: #000000;

    &:hover {
        background: #4ec1bf;
    }
`;
