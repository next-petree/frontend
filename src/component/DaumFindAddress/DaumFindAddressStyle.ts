import styled from "styled-components";

export const Container = styled.div``;

export const RegionSelectorInputTop = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
const ShortInput = styled.input`
  width: 200px;
  height: 20px;
  padding: 13px 25px;
  border: none;
  border-radius: 12px;
  background-color: #f5f5f5;
  color: #939393;
  font-family: Noto Sans KR;
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
`;

const LongInput = styled.input`
  width: 320px;
  height: 20px;
  padding: 13px 25px;
  border: none;
  border-radius: 12px;
  background-color: #f5f5f5;
  color: #939393;
  font-family: Noto Sans KR;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
`;

const CheckButton = styled.button`
  width: 110px;
  height: 45px;
  padding: 13px 25px;
  border: none;
  border-radius: 12px;
  background-color: #4ec1bf;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const RegionSelectorInput = styled(ShortInput)``;

export const RegionSearchButton = styled(CheckButton)``;

export const RegionSelctorInputBottom = styled.div``;

export const RegionSectorDetailInput = styled(LongInput)``;
