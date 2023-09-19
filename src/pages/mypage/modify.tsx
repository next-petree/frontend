import axios from 'axios';
import Button, { ButtonSize } from 'components/common/button/Button';
import InputButton from 'components/signup/InputButton';
import Post from 'components/signup/Post';
import { useJwtInfo } from 'hooks/useJwtInfo';
import { useModal } from 'hooks/useModal';
import MypageForm from 'layout/MypageForm';
import MypageLayout from 'layout/MypageLayout';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { inputRegexs } from 'utils/Regex';

interface IMemberInfo {
  id: number;
  email: string;
  nickname: string;
  phoneNumber: string;
  address1: string;
  address2: string;
  verified: boolean;
}

interface MemberInfoResponse {
  status: 'SUCCESS' | 'FAIL';
  data: IMemberInfo;
}

export default function Modify() {
  const { email, role } = useJwtInfo();
  const { open } = useModal();

  const [memberInfo, setMemberInfo] = useState<IMemberInfo | undefined>();
  const [daumAddress, setDaumAddress] = useState({
    address: '',
  });
  const [isPost, setIsPost] = useState(false);

  const [state, setState] = useState({
    nicknameChecked: true,
    errorMsg: '영어 혹은 한글 닉네임을 입력해주세요.',
    successMsg: '',
  });

  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirmation: '',
  });

  const [passwordState, setPasswordState] = useState({
    current: false,
    new: false,
    confirmation: false,
    currentError: '특수문자를 조합하여 비밀번호를 만들어주세요.',
    newError: '특수문자를 조합하여 비밀번호를 만들어주세요.',
    confirmationError: '비밀번호를 똑같이 입력해주세요.',
  });

  const handleInputAddress = (e: any) => {
    setDaumAddress({
      ...daumAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostComplete = () => {
    setIsPost(!isPost);
  };

  const fetchMemberInfo = async () => {
    try {
      const { data: res } = await axios.get<MemberInfoResponse>('/me/member-info');
      setMemberInfo(res?.data);
    } catch (e) {
      const err = e as any;
      console.log(err.response.data.data);
    }
  };

  const handleNicknameCheck = async () => {
    if (memberInfo?.nickname === '') {
      setState((prev: any) => ({ ...prev, nicknameChecked: false }));
      setState((prev: any) => ({ ...prev, errorMsg: '영어 혹은 한글 닉네임을 입력해주세요.' }));
      return;
    }

    if (!state?.nicknameChecked) {
      return;
    }

    try {
      const { data: res } = await axios.get('api/nickname/check', {
        params: {
          nickname: memberInfo?.nickname,
        },
      });

      if (res.status === 'FAIL') {
        setState((prev: any) => ({ ...prev, nicknameChecked: false }));
        setState((prev: any) => ({ ...prev, errorMsg: res.data }));
        setMemberInfo((prev: any) => ({ ...prev, nickname: '' }));
        return;
      }

      setState((prev: any) => ({ ...prev, nicknameChecked: true }));
      setState((prev: any) => ({ ...prev, successMsg: res.data }));
    } catch (error: any) {}
  };

  const handleInfoSubmit = async () => {
    try {
      await axios
        .patch('/me/member-info', {
          nicknameChecked: state.nicknameChecked,
          nickname: memberInfo?.nickname,
          address1: memberInfo?.address1,
          address2: memberInfo?.address2,
        })
        .then((res: any) => {
          if (res.status === 200) {
            open(res.data.data, {
              closeOnOutsideClick: true,
              accept: {
                text: '확인',
                onClick: () => {},
              },
            });
          }
        });
    } catch (error: any) {}
  };

  const handlePasswordSubmit = async () => {
    if (passwordState.current && passwordState.new && passwordState.confirmation) {
      try {
        await axios
          .put('/me/member-info/pwd/change', {
            currentPassword: password.current,
            newPassword: password.new,
            newPasswordConfirmation: password.confirmation,
          })
          .then((res: any) => {
            if (res.status === 200) {
              open(res.data.data, {
                closeOnOutsideClick: true,
                accept: {
                  text: '확인',
                  onClick: () => {},
                },
              });
            }
          });
      } catch (error: any) {
        const e = error.response;
        if (e.status === 400) {
          open(e.data.data, {
            closeOnOutsideClick: true,
            accept: {
              text: '확인',
              onClick: () => {},
            },
          });
        }
      }
    } else {
      open('모든 내용을 작성해주세요.', {
        closeOnOutsideClick: true,
        accept: {
          text: '확인',
          onClick: () => {},
        },
      });
    }
  };

  useEffect(() => {
    fetchMemberInfo();
  }, []);

  useEffect(() => {
    setMemberInfo((prev: any) => ({ ...prev, address1: daumAddress.address }));
  }, [daumAddress.address]);

  return (
    <MypageLayout>
      <MypageForm>
        <Span>회원정보 수정</Span>
        <RowWrap>
          <ColumnWrap>
            <InputButton
              label={'회원유형'}
              type={'text'}
              value={role === 'BREEDER' ? '브리더' : '유저'}
              minLength={2}
              maxLength={20}
            />
            <InputButton label={'이메일'} type={'email'} value={email} minLength={2} maxLength={20} />
            <InputButton label={'휴대전화'} type={'text'} value={memberInfo?.phoneNumber || ''} />
          </ColumnWrap>
          <ColumnWrap>
            <InputButton
              label={'닉네임'}
              type={'text'}
              value={memberInfo?.nickname || ''}
              error={state.nicknameChecked}
              errorMsg={state.errorMsg}
              successMsg={state.successMsg}
              essential={true}
              onChange={(e) => {
                setState((prev: any) => ({ ...prev, successMsg: '' }));
                setMemberInfo((prev: any) => ({ ...prev, nickname: e.target.value }));
                setState((prev: any) => ({
                  ...prev,
                  nicknameChecked: inputRegexs.nicknameRegex.test(memberInfo?.nickname || ''),
                }));
              }}
              describe={'2~10자 이내'}
              buttonLabel={'중복확인'}
              onClick={() => handleNicknameCheck()}
            />
            <InputButton
              label={'활동지역'}
              type="text"
              value={memberInfo?.address1 || ''}
              placeholder={'주소'}
              essential={true}
              buttonLabel={'우편검색'}
              onChange={(e) => {
                handleInputAddress(e);
              }}
              onClick={() => {
                handlePostComplete();
              }}
            />
            <InputButton
              type={'text'}
              value={memberInfo?.address2 || ''}
              placeholder={'상세주소'}
              onChange={(e) => setMemberInfo((prev: any) => ({ ...prev, address2: e.target.value }))}
            />
          </ColumnWrap>
          {isPost && <Post company={daumAddress} setcompany={setDaumAddress} />}
        </RowWrap>
        <ButtonWrap>
          <Button buttonSize={ButtonSize.MEDIUM} onClick={handleInfoSubmit}>
            저장
          </Button>
        </ButtonWrap>
      </MypageForm>
      <MypageForm>
        <Span>비밀번호 수정</Span>
        <RowWrap>
          <ColumnWrap style={{ width: '25rem' }}>
            <InputButton
              label={'현재 비밀번호'}
              type={'password'}
              value={password.current}
              error={passwordState.current}
              errorMsg={passwordState.currentError}
              placeholder={'현재 비밀번호를 입력해주세요.'}
              onChange={(v) => {
                setPassword((prev: any) => ({ ...prev, current: v.target.value }));
                setPasswordState((prev: any) => ({
                  ...prev,
                  current: inputRegexs.passwordRegex.test(password.current),
                }));
              }}
              minLength={2}
              maxLength={20}
            />
            <InputButton
              label={'변경할 비밀번호'}
              type={'password'}
              value={password.new}
              error={passwordState.new}
              errorMsg={passwordState.newError}
              placeholder={'변경할 비밀번호를 입력해주세요.'}
              onChange={(v) => {
                setPassword((prev: any) => ({ ...prev, new: v.target.value }));
                setPasswordState((prev: any) => ({
                  ...prev,
                  new: inputRegexs.passwordRegex.test(password.new),
                }));
              }}
              minLength={2}
              maxLength={20}
              describe={'4~16자로 특수문자를 포함'}
            />
            <InputButton
              label={'변경할 비밀번호 확인'}
              type={'password'}
              value={password.confirmation}
              error={passwordState.confirmation}
              errorMsg={passwordState.confirmationError}
              placeholder={'변경할 비밀번호를 입력해주세요.'}
              onChange={(v) => {
                setPassword((prev: any) => ({ ...prev, confirmation: v.target.value }));
                setPasswordState((prev: any) => ({
                  ...prev,
                  confirmation: password.new === v.target.value,
                }));
              }}
              minLength={2}
              maxLength={20}
            />
          </ColumnWrap>
        </RowWrap>
        <ButtonWrap>
          <Button buttonSize={ButtonSize.MEDIUM} onClick={handlePasswordSubmit}>
            저장
          </Button>
        </ButtonWrap>
      </MypageForm>
    </MypageLayout>
  );
}

const Span = styled.span`
  font-size: 1.75rem;
  font-weight: 500;
`;

const RowWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
`;
const ColumnWrap = styled.div`
  display: flex;
  width: 22.5rem;
  flex-direction: column;
  margin-right: 2rem;
`;
const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
