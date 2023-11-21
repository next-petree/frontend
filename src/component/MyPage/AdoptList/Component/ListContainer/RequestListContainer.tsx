import { useState, useMemo } from 'react';
import { styled } from 'styled-components';
import {
  TitleWrap,
  Title,
  SubTitle,
  SearchWrap,
  DropDown,
  Input,
  Button,
  DisNone,
  DropDownWrap,
  Selected,
  PageNationWrap,
} from './RequestListStyle';
import arrowDown from '../../../../../assets/images/arrowDown.png';
import TableComp from '../TableComponent/TableComp';

export const Container = styled.div`
  background-color: white;
  width: 49vw;
  height: fit-content;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  padding: 4vw 3vw 2.5vw;
  z-index: 100;
`;
type Column = {
  Header: string;
  accessor: keyof dataType;
};
type dataType = {
  name: string;
  breed: string;
  bday: string;
  state: string;
};

const RequestListContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('내역을 검색하세요');
  const [select, setSelect] = useState('항목을 선택해주세요');

  const headerData: Column[] = [
    { accessor: 'name', Header: '분양희망자' },
    { accessor: 'breed', Header: '강아지(견종명)' },
    { accessor: 'bday', Header: '출생일' },
    { accessor: 'state', Header: '분양상태' },
  ];
  const Theaders = useMemo(() => headerData, []);
  const items = useMemo(
    () => [
      {
        name: '수현',
        breed: '아리(구미호)',
        bday: '2013-05-29',
        state: '분양승인',
      },
      {
        name: '케이틀린',
        breed: '말파이트(돌덩이)',
        bday: '2013-05-29',
        state: '분양거절',
      },
      {
        name: '룰루',
        breed: '아리(구미호)',
        bday: '2013-05-29',
        state: '미승인',
      },
      {
        name: '욱종',
        breed: '아리(구미호)',
        bday: '2013-05-29',
        state: '분양거절',
      },
      {
        name: '종욱',
        breed: '아리(구미호)',
        bday: '2013-05-29',
        state: '분양승인',
      },
    ],
    []
  );
  const handleInputChange = (event: any) => {
    const value = event.target.value;
    if (value !== '내역을 검색하세요') {
      setInputValue(value);
    }
  };
  const handleInputFocus = (event: any) => {
    if (event.target.value === '내역을 검색하세요') {
      setInputValue('');
    }
  };

  const DropOpen = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const getValue = () => {
    console.log(`선택된 항목: ${select}, 검색어: ${inputValue}`);
  };

  return (
    <Container>
      {location.pathname === '/adoptlist/breeder' ? (
        <>
          <TitleWrap>
            <Title>분양신청내역</Title>
            <SubTitle>분양 승인 시, 분양희망자의 연락처가 공개됩니다.</SubTitle>
          </TitleWrap>
          <SearchWrap>
            <DropDown>
              <Selected onClick={DropOpen}>
                <div>{select}</div> {/* 상태 변수 select의 값을 표시 */}
                <img src={arrowDown} />
              </Selected>
              {isOpen ? (
                <DropDownWrap>
                  <div
                    className="sel"
                    onClick={() => {
                      setSelect('전체');
                      setIsOpen(false);
                    }}
                  >
                    전체
                  </div>
                  <div
                    className="sel"
                    onClick={() => {
                      setSelect('견종');
                      setIsOpen(false);
                    }}
                  >
                    견종
                  </div>
                  <div
                    className="sel"
                    onClick={() => {
                      setSelect('강아지 이름');
                      setIsOpen(false);
                    }}
                  >
                    강아지 이름
                  </div>
                </DropDownWrap>
              ) : (
                <DisNone></DisNone>
              )}
            </DropDown>
            <Input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            ></Input>
            <Button onClick={getValue}>검색</Button>
          </SearchWrap>
          <TableComp columns={Theaders} data={items}></TableComp>
          <PageNationWrap>
            <div>
              <button>&lt;</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>&gt;</button>
            </div>
          </PageNationWrap>
        </>
      ) : location.pathname === '/adoptlist/adopter' ? (
        <div>Adopter</div>
      ) : null}
    </Container>
  );
};

export default RequestListContainer;
