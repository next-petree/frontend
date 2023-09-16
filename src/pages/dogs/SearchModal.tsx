/**
 * @author 임유정
 * @description 강아지 모아보기 필터검색
 */

import { css, styled } from 'styled-components';
import MajorSelect, { BreedSelectType } from 'components/common/select/MajorSelect';
import { FC, useState, useEffect } from 'react';
import { Hashtag, HashtagBox } from '../signup/step-2';
import { E_Dog_Gender, E_dog_size, E_is_available, E_is_verified, dogGenderList } from './constatns';
import axios from 'axios';
import {
  filterDogState,
  setDogId,
  setGender,
  setIsAvailable,
  setIsVerified,
  setSize,
} from '../../store/slices/filterDog';
import { useDispatch, useSelector } from 'react-redux';

interface BtnType {
  code: any;
  label: string;
}

const isVerifiedBtnGroup: BtnType[] = [
  {
    code: E_is_verified.ALL,
    label: '전체',
  },
  {
    code: E_is_verified.IS_VERIFIED,
    label: '인증 O',
  },
];

const isAvailableBtnGroup: BtnType[] = [
  {
    code: E_is_available.ALL,
    label: '전체',
  },
  {
    code: E_is_available.IS_AVAILABLE,
    label: '분양가능 강아지',
  },
];

const dogSizeBtnGroup: BtnType[] = [
  {
    code: E_dog_size.ALL,
    label: '전체',
  },
  {
    code: E_dog_size.EXTRA_SMALL,
    label: '초소형',
  },
  {
    code: E_dog_size.SMALL,
    label: '소형',
  },
  {
    code: E_dog_size.MEDIUM,
    label: '중형',
  },
  {
    code: E_dog_size.LARGE,
    label: '대형',
  },
  {
    code: E_dog_size.UNKNOWN,
    label: '그 외',
  },
];

interface Props {
  setDogs: any;
  setPageInfo: any;
  onClose: () => void;
}

const SearchModal: FC<Props> = ({ setDogs, setPageInfo, onClose }) => {
  const { dogId, isAvailable, isVerified, gender, size } = useSelector(filterDogState);
  const dispatch = useDispatch();
  const [dogTypeIdList, setDogTypeIdList] = useState<BreedSelectType[] | undefined>(dogId);

  const handleSearch = async () => {
    try {
      const {
        data: {
          data: { content, totalPages, first, last, number },
        },
      } = await axios.get(
        `/dogs?
        ${dogId && dogId.length ? `dogTypeId=${dogId[0].id}` : ''}
        ${isVerified !== E_is_verified.ALL ? '&verification=yes' : ''}
        ${isAvailable !== E_is_available.ALL ? '&isAvailable=true' : ''}
        ${gender !== E_Dog_Gender.ALL ? `&gender=${gender}` : ''}
        ${size !== E_dog_size.ALL ? `&size=${size}` : ''}
        `,
      );

      setDogs(content);
      setPageInfo({
        totalPages: totalPages,
        first: first,
        last: last,
        number: number,
      });
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    });
    return () => window.removeEventListener('keydown', () => onClose);
  }, [onClose]);

  return (
    <Modal>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <Title>필터</Title>
        <MajorSelect
          maxNum={1}
          style={{ width: 430 }}
          onChange={(v) => {
            dispatch(setDogId(v));
            setDogTypeIdList(v);
          }}
        />
      </div>
      <HashtagBox>
        {dogId?.map((v, i) => (
          <Hashtag key={i}>
            #{v.name}
            <DeleteBtn
              onClick={() => {
                setDogTypeIdList([]);
                dispatch(setDogId(undefined));
              }}
            >
              x
            </DeleteBtn>
          </Hashtag>
        ))}
      </HashtagBox>
      <Section>
        <SectionTitle>브리더 인증 여부</SectionTitle>
        <Selection>
          {isVerifiedBtnGroup.map((button: BtnType) => {
            return (
              <SmallBtn
                key={button.code}
                onClick={() => {
                  dispatch(setIsVerified(button.code));
                  // setFilters({ ...filters, isVerified: button.code });
                }}
                className={button.code === isVerified ? 'active' : undefined}
              >
                {button.label}
              </SmallBtn>
            );
          })}
        </Selection>
      </Section>

      <Section>
        <SectionTitle>분양가능 여부</SectionTitle>
        <Selection>
          {isAvailableBtnGroup.map((button: BtnType) => {
            return (
              <BigBtn
                key={button.code}
                onClick={() => {
                  // setFilters({ ...filters, isAvailable: button.code })
                  dispatch(setIsAvailable(button.code));
                }}
                className={button.code === isAvailable ? 'active' : undefined}
              >
                {button.label}
              </BigBtn>
            );
          })}
        </Selection>
      </Section>

      <Section>
        <SectionTitle>성별</SectionTitle>
        <Selection>
          {dogGenderList.map((button: BtnType) => {
            return (
              <SmallBtn
                key={button.code}
                onClick={() => {
                  // setFilters({ ...filters, gender: button.code })
                  dispatch(setGender(button.code));
                }}
                className={button.code === gender ? 'active' : undefined}
              >
                {button.label}
              </SmallBtn>
            );
          })}
        </Selection>
      </Section>

      <Section>
        <SectionTitle>크기</SectionTitle>
        <Selection>
          {dogSizeBtnGroup.map((button: BtnType) => {
            return (
              <SmallBtn
                key={button.code}
                onClick={() => {
                  // setFilters({ ...filters, size: button.code })
                  dispatch(setSize(button.code));
                }}
                className={button.code === size ? 'active' : undefined}
              >
                {button.label}
              </SmallBtn>
            );
          })}
        </Selection>
      </Section>
      <Bottom>
        <SearchBtn className="active" onClick={handleSearch}>
          검색
        </SearchBtn>
        <CancleBtn onClick={onClose}>취소</CancleBtn>
      </Bottom>
    </Modal>
  );
};

export default SearchModal;

const Modal = styled.div`
  display; flex;
  flex-flow: column;
  position: absolute;
  width: 1118px;
  height: 920px;
  top: 280px;
  padding: 86px 112px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 20px 0px #00000017;
  padding: 112px 83px;
  border-radius: 32px;
  color:  ${({ theme }) => theme.colors.black333};
  font-family: Noto Sans KR;
`;

const Title = styled.span`
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  margin-right: 120px;
  position: relative;
  top: -10px;
`;

const Section = styled.div`
  display: flex;
  flex-flow: column;
`;

const SectionTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 36px;
  margin: 34px 0 16px 0;
`;

const Selection = styled.div`
  display: flex;
`;

const commonBtnStyle = css`
  border-radius: 16px;
  background-color: ${(props: any) => (props.className === 'active' ? '#4EC1BF' : '#fff')};
  color: ${(props: any) => (props.className === 'active' ? '#fff' : '#4EC1BF')};
  border: 1px solid#4EC1BF;
  font-size: 16px;
  font-weight: 700;
  line-height: 23px;
  height: 52px;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const SmallBtn = styled.button`
  ${commonBtnStyle}
  width: 120px;
`;

const BigBtn = styled.button`
  ${commonBtnStyle}
  width: 320px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 82px;
`;

const SearchBtn = styled.button`
  ${commonBtnStyle}
  width: 240px;
  border: none;
`;

const CancleBtn = styled.button`
  ${commonBtnStyle}
  width: 240px;
  color: #fff;
  background: #2f2f2f;
  border: none;
`;

export const DeleteBtn = styled.button`
  ${commonBtnStyle}
  height: auto;
  width: 20px;
  border: none;
  font-size: 20px;
  &:hover {
    color: #59d0ce;
  }
`;
