import styled from "styled-components";

export const ReviewInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
`;

export const Textarea = styled.textarea`
    background: #f5f5f5;
    border-radius: 16px;
    height: 189px;
    padding: 20px;
    font-family: Noto Sans KR;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: -0.03em;
    text-align: left;
    color: #939393;
    border: none;
    isolation: isolate;
    resize: none;
    z-index: 1;
`;

export const TextLength = styled.span`
    position: absolute;
    width: 50px;
    height: 23px;
    right: 22px;
    bottom: 19px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.03em;

    color: #000000;
    z-index: 2;
`;
