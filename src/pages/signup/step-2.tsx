import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import Button, { ButtonColor, ButtonSize } from '../../components/common/button/Button';
import InputButton from 'components/signup/InputButton';
import SignupLayout from 'layout/SignupLayout';
import axios from 'axios';
import Post from 'components/signup/Post';
import STEP from 'assets/images/signup/step2.svg';
import { inputRegexs } from 'utils/Regex';
import { useNavigate } from 'react-router-dom';
import MajorSelect, { BreedSelectType } from 'components/common/select/MajorSelect';
import { useModal } from 'hooks/useModal';
import { DeleteBtn } from '../dogs/SearchModal';

enum TabTypeEnum {
  DEFAULT,
  HIDE,
}

enum Role {
  BREEDER,
  ADOPTER,
}

export default function Step2() {
  const navigate = useNavigate();
  const { open } = useModal();
  const [tabType, setTabType] = useState<TabTypeEnum>(TabTypeEnum.DEFAULT);
  const [errorMsg, setErrorMsg] = useState({
    email: '이메일 형식으로 입력해주세요.',
    nickname: '영어 혹은 한글 닉네임을 입력해주세요.',
    password: '특수문자를 조합하여 비밀번호를 만들어주세요.',
    confirmPassword: '비밀번호를 똑같이 입력해주세요.',
    address: '주소를 입력해주세요.',
    phoneNumber: '휴대번호를 정확하게 입력해주세요.',
    verify: '',
  });

  const [successMsg, setSuccessMsg] = useState({
    email: '',
    nickname: '',
    address: '',
    verify: '',
  });

  interface userInfoType {
    emailChecked: boolean;
    nicknameChecked: boolean;
    phoneNumberChecked: boolean;
    verifyChecked: boolean;
    passwordChecked: boolean;
    confirmPasswordChecked: boolean;
    addressChecked: boolean;
    email: string;
    nickname: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    verifyNumber: string;
    address1: string;
    address2: string;
    role: Role;
    dogTypeId: any[];
  }

  const [userInfo, setUserInfo] = useState<userInfoType>({
    emailChecked: false,
    nicknameChecked: false,
    phoneNumberChecked: false,
    verifyChecked: false,
    passwordChecked: false,
    confirmPasswordChecked: false,
    addressChecked: false,
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    verifyNumber: '',
    address1: '',
    address2: '',
    role: Role.BREEDER,
    dogTypeId: [],
  });
  const [daumAddress, setDaumAddress] = useState({
    address: '',
  });
  const [isPost, setIsPost] = useState(false);
  const [dogTypeIdList, setDogTypeIdList] = useState<BreedSelectType[] | undefined>();

  const passwordDoubleCheck = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  const handleInputAddress = (e: any) => {
    setDaumAddress({
      ...daumAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostComplete = () => {
    setIsPost(!isPost);
  };

  const handleChangeTabType = (type: TabTypeEnum) => {
    setTabType(type);
    if (type === 1) {
      setUserInfo((prev: any) => ({ ...prev, dogTypeId: [{}] }));
    }
  };

  const handleEmailCheck = async () => {
    if (userInfo.email === '') {
      setUserInfo((prev: any) => ({ ...prev, emailChecked: false }));
      setErrorMsg((prev: any) => ({ ...prev, email: '이메일 형식으로 입력해주세요.' }));
      return;
    }
    if (!userInfo.emailChecked) {
      return;
    }
    try {
      const { data: res } = await axios.get('api/email/check', {
        params: {
          email: userInfo.email,
        },
      });

      if (res.status === 'FAIL') {
        setUserInfo((prev: any) => ({ ...prev, emailChecked: false }));
        setErrorMsg((prev: any) => ({ ...prev, email: res.data }));
        return;
      }

      setUserInfo((prev: any) => ({ ...prev, emailChecked: true }));
      setSuccessMsg((prev: any) => ({ ...prev, email: res.data }));
    } catch (error: any) {}
  };

  const handleGetDogId = (v: any) => {
    setUserInfo((prev) => ({ ...prev, dogTypeId: v!.map((v: any) => v.id) }));
  };

  const handleNicknameCheck = async () => {
    if (userInfo.nickname === '') {
      setUserInfo((prev: any) => ({ ...prev, nicknameChecked: false }));
      setErrorMsg((prev: any) => ({ ...prev, nickname: '영어 혹은 한글 닉네임을 입력해주세요.' }));
      return;
    }

    // if (!userInfo.nicknameChecked) {
    //   return;
    // }

    try {
      const { data: res } = await axios.get('api/nickname/check', {
        params: {
          nickname: userInfo.nickname,
        },
      });

      if (res.status === 'FAIL') {
        setUserInfo((prev: any) => ({ ...prev, nicknameChecked: false }));
        setErrorMsg((prev: any) => ({ ...prev, nickname: res.data }));
        setSuccessMsg((prev: any) => ({ ...prev, nickname: '' }));
        return;
      }

      setUserInfo((prev: any) => ({ ...prev, nicknameChecked: true }));
      setSuccessMsg((prev: any) => ({ ...prev, nickname: res.data }));
    } catch (error: any) {}
  };

  const handleSendSMS = async () => {
    if (userInfo.phoneNumber === '') {
      setUserInfo((prev: any) => ({ ...prev, phoneNumberChecked: false }));
      setErrorMsg((prev: any) => ({ ...prev, phoneNumber: '휴대번호를 정확하게 입력하세요.' }));
      return;
    }

    if (!userInfo.phoneNumberChecked) {
      return;
    }

    try {
      await axios
        .post(`api/sms/send`, {
          to: userInfo.phoneNumber,
        })
        .then((res: any) => {
          if (res.data.status === 'FAIL') {
            setUserInfo((prev: any) => ({ ...prev, phoneNumberChecked: false }));
            return;
          }

          if (res.data.statue === 'SUCCESS') {
            setUserInfo((prev: any) => ({ ...prev, verifyChecked: false }));
            setErrorMsg((prev: any) => ({ ...prev, verify: '발송된 인증번호를 입력해주세요.' }));
          }
        });
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleVerifySMS = async () => {
    if (userInfo.verifyNumber === '') {
      setUserInfo((prev: any) => ({ ...prev, phoneNumberChecked: false }));
      setErrorMsg((prev: any) => ({ ...prev, phoneNumber: '발송된 인증번호를 입력해주세요.' }));
      return;
    }

    try {
      await axios
        .post(`api/sms/verify`, {
          code: userInfo.verifyNumber,
          phoneNumber: userInfo.phoneNumber,
        })
        .then((res: any) => {
          if (res.data.status === 'FAIL') {
            setUserInfo((prev: any) => ({ ...prev, verifyChecked: false }));
            setErrorMsg((prev: any) => ({ ...prev, verify: '잘못된 인증번호입니다.' }));
            return;
          }
          if (res.data.status === 'SUCCESS') {
            setUserInfo((prev: any) => ({ ...prev, verifyChecked: true }));
            setSuccessMsg((prev: any) => ({ ...prev, verify: res.data.data }));
          }
        });
    } catch (error: any) {}
  };

  const handleSubmit = async () => {
    // handleGetDogId();
    if (
      userInfo.emailChecked &&
      userInfo.nicknameChecked &&
      userInfo.phoneNumberChecked &&
      userInfo.verifyChecked &&
      userInfo.passwordChecked &&
      userInfo.confirmPasswordChecked &&
      userInfo.addressChecked
    ) {
      try {
        await axios
          .post(`api/signup`, {
            emailChecked: userInfo.emailChecked,
            nicknameChecked: userInfo.nicknameChecked,
            phoneNumberChecked: userInfo.verifyChecked,
            email: userInfo.email,
            nickname: userInfo.nickname,
            password: userInfo.password,
            confirmPassword: userInfo.confirmPassword,
            phoneNumber: userInfo.phoneNumber,
            address1: userInfo.address1,
            address2: userInfo.address2,
            role: userInfo.role,
            mainBreedDtoRequest: {
              dogTypeId: userInfo.dogTypeId,
            },
          })
          .then((res: any) => {
            if (res.status === 200) {
              navigate('/signup/step-3');
            }
          });
      } catch (error: any) {
        console.log(error);
      }
    } else {
      open('모든 정보를 입력해주세요. ', {
        closeOnOutsideClick: true,
        accept: {
          text: '확인',
          onClick: () => {},
        },
      });
    }
  };

  useEffect(() => {
    if (userInfo.phoneNumber.length === 10) {
      setUserInfo((prev: any) => ({
        ...prev,
        phoneNumber: userInfo.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'),
      }));
    }
    if (userInfo.phoneNumber.length === 13) {
      setUserInfo((prev: any) => ({
        ...prev,
        phoneNumber: userInfo.phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      }));
    }
  }, [userInfo.phoneNumber]);

  useEffect(() => {
    if (tabType === 0) {
      setUserInfo((prev: any) => ({ ...prev, role: Role.BREEDER }));
    }
    if (tabType === 1) {
      setUserInfo((prev: any) => ({ ...prev, role: Role.ADOPTER }));
    }
  }, [tabType]);

  useEffect(() => {
    setUserInfo((prev: any) => ({ ...prev, address1: daumAddress.address }));
    if (userInfo.address1 !== '') {
      setUserInfo((prev: any) => ({ ...prev, addressChecked: true }));
    }
  }, [userInfo.address1, daumAddress.address, isPost]);

  return (
    <SignupLayout>
      <Img src={STEP} alt="step2" />
      <TabContainer>
        <Tab active={tabType === TabTypeEnum.DEFAULT} onClick={() => handleChangeTabType(TabTypeEnum.DEFAULT)}>
          브리더
        </Tab>
        <Tab active={tabType === TabTypeEnum.HIDE} onClick={() => handleChangeTabType(TabTypeEnum.HIDE)}>
          분양희망자
        </Tab>
      </TabContainer>
      <RowWrap>
        <ColumnWrap style={{ marginRight: '6rem' }}>
          <InputButton
            label={'이메일'}
            type={'email'}
            value={userInfo.email}
            placeholder={'breeder@email.com'}
            minLength={2}
            maxLength={20}
            error={userInfo.emailChecked}
            errorMsg={errorMsg.email}
            successMsg={successMsg.email}
            onChange={(e) => {
              setSuccessMsg((prev: any) => ({ ...prev, email: '' }));
              setErrorMsg((prev: any) => ({ ...prev, email: '이메일 형식으로 입력해주세요.' }));
              setUserInfo((prev: any) => ({ ...prev, email: e.target.value }));
              setUserInfo((prev: any) => ({ ...prev, emailChecked: inputRegexs.emailRegex.test(userInfo.email) }));
            }}
            essential={true}
            describe={'2~20자 이내'}
            buttonLabel={'중복확인'}
            onClick={() => handleEmailCheck()}
          />
          <InputButton
            label={'비밀번호'}
            type={'password'}
            value={userInfo.password}
            placeholder={'비밀번호'}
            minLength={4}
            maxLength={16}
            error={userInfo.passwordChecked}
            errorMsg={errorMsg.password}
            onChange={(e) => {
              setUserInfo((prev: any) => ({ ...prev, password: e.target.value }));
              setUserInfo((prev: any) => ({
                ...prev,
                passwordChecked: inputRegexs.passwordRegex.test(userInfo.password),
              }));
            }}
            essential={true}
            describe={'4~16자로 특수문자를 포함'}
          />
          <InputButton
            label={'비밀번호 확인'}
            type={'password'}
            value={userInfo.confirmPassword}
            placeholder={'비밀번호'}
            minLength={4}
            maxLength={16}
            error={userInfo.confirmPasswordChecked}
            errorMsg={errorMsg.confirmPassword}
            onChange={(e) => {
              setUserInfo((prev: any) => ({ ...prev, confirmPassword: e.target.value }));
              setUserInfo((prev: any) => ({
                ...prev,
                confirmPasswordChecked: passwordDoubleCheck(userInfo.password, e.target.value),
              }));
            }}
          />
        </ColumnWrap>
        <ColumnWrap>
          {!tabType && (
            <label
              style={{
                fontSize: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '1rem',
                gap: '1rem',
              }}
            >
              주력견종
              <MajorSelect
                onChange={(v) => {
                  setDogTypeIdList(v);
                  handleGetDogId(v);
                }}
              />
              <HashtagBox>
                {dogTypeIdList?.map((v, i) => (
                  <Hashtag key={i}>
                    #{v.name}
                    <DeleteBtn
                      onClick={() => {
                        setDogTypeIdList((prev) => {
                          if (Array.isArray(prev)) {
                            const newList = [...prev];
                            newList?.splice(i, 1);
                            return newList;
                          }
                        });
                      }}
                    >
                      x
                    </DeleteBtn>
                  </Hashtag>
                ))}
              </HashtagBox>
            </label>
          )}

          <InputButton
            label={'닉네임'}
            type={'text'}
            value={userInfo.nickname}
            placeholder={'닉네임'}
            minLength={2}
            maxLength={10}
            error={userInfo.nicknameChecked}
            errorMsg={errorMsg.nickname}
            successMsg={successMsg.nickname}
            onChange={(e) => {
              setSuccessMsg((prev: any) => ({ ...prev, nickname: '' }));
              setErrorMsg((prev: any) => ({ ...prev, nickname: '영어 혹은 한글 닉네임을 입력해주세요.' }));
              setUserInfo((prev: any) => ({ ...prev, nickname: e.target.value }));
              setUserInfo((prev: any) => ({
                ...prev,
                nicknameChecked: inputRegexs.nicknameRegex.test(userInfo.nickname),
              }));
            }}
            essential={true}
            describe={'2~10자 이내'}
            buttonLabel={'중복확인'}
            onClick={() => handleNicknameCheck()}
          />
        </ColumnWrap>
      </RowWrap>
      <RowWrap style={{ marginTop: '3rem', marginBottom: '6rem' }}>
        <ColumnWrap style={{ marginRight: '6rem' }}>
          <InputButton
            label={'활동지역'}
            type="text"
            error={userInfo.addressChecked}
            errorMsg={errorMsg.address}
            successMsg={successMsg.address}
            value={daumAddress.address}
            placeholder={'주소'}
            onChange={(e) => {
              handleInputAddress(e);
            }}
            essential={true}
            buttonLabel={'우편검색'}
            onClick={() => {
              handlePostComplete();
            }}
          />
          <InputButton
            type={'text'}
            value={userInfo.address2}
            placeholder={'상세주소'}
            onChange={(e) => {
              setUserInfo((prev: any) => ({
                ...prev,
                address2: e.target.value,
              }));
            }}
          />
        </ColumnWrap>

        <ColumnWrap>
          <InputButton
            label={'휴대전화'}
            type={'text'}
            value={userInfo.phoneNumber}
            placeholder={'전화번호'}
            error={userInfo.phoneNumberChecked}
            errorMsg={errorMsg.phoneNumber}
            onChange={(e) => {
              setUserInfo((prev: any) => ({ ...prev, phoneNumber: e.target.value }));
              setUserInfo((prev: any) => ({
                ...prev,
                phoneNumberChecked: inputRegexs.phoneNumberRegex.test(userInfo.phoneNumber),
              }));
            }}
            essential={true}
            minLength={13}
            maxLength={13}
            buttonLabel={'인증요청'}
            onClick={() => handleSendSMS()}
          />
          <InputButton
            type={'number'}
            value={userInfo.verifyNumber}
            placeholder={'인증번호'}
            error={userInfo.verifyChecked}
            errorMsg={errorMsg.verify}
            successMsg={successMsg.verify}
            onChange={(e) => {
              setErrorMsg((prev: any) => ({ ...prev, verify: '' }));
              setUserInfo((prev: any) => ({ ...prev, verifyNumber: e.target.value }));
            }}
            buttonLabel={'확인'}
            buttonColor={ButtonColor.DARKGRAY}
            onClick={() => handleVerifySMS()}
          />
        </ColumnWrap>
      </RowWrap>
      <Button buttonSize={ButtonSize.MEDIUM} onClick={() => handleSubmit()}>
        가입하기
      </Button>
      {isPost && <Post company={daumAddress} setcompany={setDaumAddress} />}
    </SignupLayout>
  );
}

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3.25rem;
  margin-bottom: 3rem;
`;

const Tab = styled.div<{ active: boolean }>`
  display: flex;
  width: 20rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: -1px;
  font-size: 1.5rem;
  border-radius: 1rem;
  font-weight: 700;
  margin-right: 1rem;
  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          letter-spacing: -0.3px;
          color: #ffffff;
          background-color: #4ec1bf;
        `
      : css`
          letter-spacing: -0.3px;
          color: #23a4a1;
          border: 1px solid #4ec1bf;
        `}
`;
const RowWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;
const ColumnWrap = styled.div`
  display: flex;
  width: 24.75rem;
  flex-direction: column;
`;

const Img = styled.img`
  width: 15rem;
  height: 4.938rem;
  margin: 3rem 0;
`;

export const HashtagBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: -1rem 0 0.5rem 0;
`;

export const Hashtag = styled.span`
  font-size: 1rem;
  border-radius: 1rem;
  padding: 0.5rem;
  border: 1px solid #4ec1bf;
  background-color: #ffffff;
  margin-right: 0.5rem;
  font-weight: 500;
`;
