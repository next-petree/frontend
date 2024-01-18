import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: white;
    /* width: 1060px; */
    width: 49vw;
    height: fit-content;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
    border-radius: 32px;
    padding: 4vw 3vw 2.5vw;
    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
`;

export const ReturnBtnContainer = styled.div`
    position: absolute;
    top: 5%;
    right: 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 7px;
`;

export const ReturnButton = styled.div`
    width: 48px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #aeaeae;
    font-size: 32px;

    border: 2px solid #aeaeae;
    border-radius: 8px;

    cursor: pointer;
`;

export const ReturnBtnText = styled.div`
    font-family: Noto Sans KR;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.03em;
    text-align: center;
    color: #939393;
`;

export const Title = styled.div`
    width: 100%;
    font-family: Noto Sans KR;
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
`;

export const InnerContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    margin-top: 20px;
`;

export const Form = styled.form`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const TopInputContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 40px 30px;
`;

export const LeftInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
export const RightInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const InputContainer = styled.div`
    width: 429px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const InputTitle = styled.h1`
    font-family: Noto Sans KR;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.03em;
    text-align: left;
    color: #000000;
    padding: 0;
    margin: 0;
`;

export const Input = styled.input`
    width: 92%;
    height: 48px;
    padding: 0 15px;

    background: #f5f5f5;
    border-radius: 12px;
    border: none;

    font-family: Noto Sans KR;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: -0.03em;
    text-align: left;
    color: #939393;
`;

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

export const ImageUploaderContainer = styled.div`
    // 240 * 3 + 36 * 2
    width: 100%;
    // 지워야함
    /* height: 212px; */

    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const ImageUploaderTitle = styled.div`
    font-family: Noto Sans KR;
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
`;

export const ImageUploaderFlexBox = styled.div`
    width: 100%;
    background-color: green;
    display: flex;
    justify-content: space-between;
    /* gap: 15px; */
`;

export const ImageUpoaderbox = styled.div`
    width: 200px;
    height: 180px;

    background-color: greenyellow;

    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ImageBox = styled.div<{ img?: string }>`
    width: 100%;
    height: 144px;
    border-radius: 12px;
    background: #f5f5f5;
    background-image: url(${(props) => props.img});
`;

export const ImageUploaderButton = styled.button`
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 16px;
    background: #4ec1bf;

    font-family: Noto Sans KR;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;

    cursor: pointer;
`;
