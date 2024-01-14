import styled from "styled-components";

export const DOBInputBox = styled.div<{ width: string; height: string }>`
    /* width: calc((100% / 3) - 20px); */
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: relative;
`;

export const DOBInput = styled.input`
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

export const IconContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 0;
    width: 26px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    color: #4ec1bf;
`;
