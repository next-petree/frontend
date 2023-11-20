import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80vh;
  margin: 80px auto 150px auto;
  flex-direction: column;
  align-items: start;
`;

export const RegisterSequence = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 80px;
`;

export const RegisterSequenceStyle = styled.img`
  width: 250px;
`;

export const SelectArea = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 10px;
  margin-bottom: 50px;
`;

const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 270px;
  padding: 13px 25px;
  border: none;
  border-radius: 16px;
  background-color: #35d8d5;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const TextArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 5px;
`;

const Text = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.6px;
`;

const InfomationText = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  letter-spacing: -0.42px;
`;

const ShortInput = styled.input`
  width: 200px;
  height: 20px;
  padding: 10px;
  border: none;
  border-radius: 12px;
  background-color: #f5f5f5;
  color: #939393;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
`;

const LongInput = styled.input`
  width: 310px;
  height: 20px;
  padding: 10px;
  border: none;
  border-radius: 12px;
  background-color: #f5f5f5;
  color: #939393;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
`;

const CheckButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 7px;
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

export const BreederButton = styled(SelectButton)``;

export const CustomerButton = styled(SelectButton)`
  border: 1px solid #35d8d5;
  background-color: #fff;
  color: #35d8d5;
`;

export const TopContentArea = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 100px;
  gap: 60px;
`;

export const TopLeftContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const EmailArea = styled.div`
  margin-bottom: 30px;
`;

export const EmailTextArea = styled(TextArea)``;

export const EmailText = styled(Text)``;

export const EmailInfomationText = styled(InfomationText)`
  margin-right: 110px;
`;

export const EmailInputArea = styled.div`
  display: flex;
  gap: 10px;
`;

export const EmailInput = styled(ShortInput)``;

export const EmailCheckButton = styled(CheckButton)``;

export const PasswordArea = styled.div`
  margin-bottom: 30px;
`;

export const PasswordTextArea = styled(TextArea)``;

export const PasswordText = styled(Text)``;

export const PasswordInfomationText = styled(InfomationText)``;

export const PasswordInputArea = styled.div``;

export const PasswordInput = styled(LongInput)``;

export const PasswordCheckArea = styled.div``;

export const PasswordCheckText = styled(Text)`
  margin-bottom: 5px;
`;

export const PasswordCheckInput = styled(LongInput)``;

export const TopRightContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const MainBreedArea = styled.div`
  margin-bottom: 30px;
`;

export const MainBreedTextArea = styled(TextArea)``;

export const MianBreedText = styled(Text)``;

export const MainBreedInputArea = styled.div`
  display: flex;
  gap: 10px;
`;

export const MainBreedInput = styled(ShortInput)``;

export const MainBreedSearchButton = styled(CheckButton)``;

export const NickNameArea = styled.div``;

export const NickNameTextArea = styled(TextArea)``;

export const NickNameText = styled(Text)``;

export const NickNameInfomationText = styled(InfomationText)`
  margin-right: 110px;
`;

export const NickNameInputArea = styled.div`
  display: flex;
  gap: 10px;
`;

export const NickNameInput = styled(ShortInput)``;

export const NickNameCheckButton = styled(CheckButton)``;

export const BottomContentArea = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 100px;
  gap: 60px;
`;

export const BottomLeftContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const RegionSelectorArea = styled.div``;

export const RegionSelectorTextArea = styled(TextArea)``;

export const RegionSelectorText = styled(Text)``;

export const RegionSelectorInputArea = styled.div``;

export const RegionSelctorInputTop = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const RegionSelectorInput = styled(ShortInput)``;

export const RegionSearchButton = styled(CheckButton)``;

export const RegionSelctorInputBottom = styled.div``;

export const RegionSectorDetailInput = styled(LongInput)``;

export const BottomRightContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const PhoneNumberArea = styled.div``;

export const PhoneNumberTextArea = styled(TextArea)``;

export const PhoneNumberText = styled(Text)``;

export const PhoneNumberInputTop = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const PhoneNumberInput = styled(ShortInput)``;

export const PhoneNumberButton = styled(CheckButton)``;

export const PhoneNumberInputBottom = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const PhoneNumberCheckInput = styled(ShortInput)``;

export const PhoneNumberCheckButton = styled(CheckButton)`
  background-color: #707070;
`;

export const RegisterButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const RegisterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  padding: 13px 25px;
  border: none;
  border-radius: 16px;
  background-color: #35d8d5;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
