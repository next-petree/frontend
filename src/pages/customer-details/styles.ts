import styled from "styled-components";

export const TopContainer = styled.div`
  position: absolute;
  width: 968px;
  height: 437px;
  top: 206px;
  left: calc(50% - 968px / 2);
  padding: 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  z-index: 999;
`;

export const AvatarContainer = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Name = styled.p`
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0;
  margin: 0;
`;

export const IntroductionContainer = styled.div`
  width: 968px;
  height: 190px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const ButtonGroup = styled.div`
  width: 699px;
  height: 48px;
  gap: 16px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  min-width: 170px;
  height: 48px;
  border-radius: 80px;
  border: solid 2px #4ec1bf;
  gap: 10px;
  color: #4ec1bf;
  padding: 11px 30px;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.03em;
`;

export const DescContainer = styled.div`
  width: 726px;
  height: 58px;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: center;
  white-space: pre-wrap;
`;

export const BottomContainer = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 36px;

  position: absolute;
  width: 792px;
  height: 292px;
  left: calc(50% - 792px / 2);
  top: 727px;
  z-index: 999;
`;

export const Group = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 36px;

  width: 792px;
  height: 220px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const GroupItem = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 28px;

  width: 240px;
  height: 220px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ImageBox = styled.div<{ src: string }>`
  width: 240px;
  height: 144px;

  background: url(${(props) => props.src}), #f5f5f5;
  border-radius: 12px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const GroupTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 36px;

  width: 240px;
  height: 27px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const GroupText = styled.div`
  margin: 0 auto;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  /* identical to box height, or 135% */

  color: #333333;
`;

export const Headline = styled.div<{ textsize: number }>`
  width: 104px;
  height: 36px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.textsize}px;
  line-height: 36px;
  text-align: center;
  /* identical to box height, or 129% */

  color: #000000;
`;
