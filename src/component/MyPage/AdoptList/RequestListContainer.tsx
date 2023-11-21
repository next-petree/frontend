import { useState } from 'react';
import { styled } from 'styled-components';
import {
  TitleWrap,
  Title,
  SubTitle,
  SearchWrap,
  DropDown,
  Input,
  Button,
  Table,
  THead,
  TBody,
  DetailButton,
  Tr,
  DisNone,
  DropDownWrap,
  Selected,
  Th,
  Td,
} from './RequestListStyle';
import arrowDown from '../../../assets/images/arrowDown.png';

export const Container = styled.div`
  background-color: white;
  width: 49vw;
  height: fit-content;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  padding: 4vw 3vw 2.5vw;
  z-index: 100;
  border: 1px solid green;
`;

const RequestListContainer = () => {
  const [fontSize, setFontSize] = useState('12px');
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('내용을 입력하세요');

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    if (value !== '내용을 입력하세요') {
      setInputValue(value);
    }
  };

  function DropOpen() {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }
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
              <Selected
                onClick={() => {
                  DropOpen();
                }}
              >
                <div>항목을 선택해주세요</div>
                <img src={arrowDown} />
              </Selected>
              {isOpen ? (
                <DropDownWrap>
                  <div className="sel">전체</div>
                  <div className="sel">견종</div>
                  <div className="sel">강아지 이름</div>
                </DropDownWrap>
              ) : (
                <DisNone>
                  <div className="sel">전체</div>
                  <div className="sel">견종</div>
                  <div className="sel">강아지 이름</div>
                </DisNone>
              )}
            </DropDown>
            <Input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            ></Input>
            <Button>검색</Button>
          </SearchWrap>
          <Table>
            <THead>
              <Tr>
                <Th>No</Th>
                <Th>분양 희망자</Th>
                <Th>출생일</Th>
                <Th>강아지(견종명)</Th>
                <Th>분양상태</Th>
                <Th>신청내역</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr>
                <Td>1</Td>
                <Td>종욱</Td>
                <Td>2020-01-01</Td>
                <Td>아리(구미호)</Td>
                <Td>분양 승인</Td>
                <Td>
                  <DetailButton
                    onClick={() => {
                      console.log('상세보기');
                    }}
                  >
                    상세보기
                  </DetailButton>
                </Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>종욱</Td>
                <Td>2020-01-01</Td>
                <Td>아리(구미호)</Td>
                <Td>분양 승인</Td>
                <Td>
                  <DetailButton
                    onClick={() => {
                      console.log('상세보기');
                    }}
                  >
                    상세보기
                  </DetailButton>
                </Td>
              </Tr>
            </TBody>
          </Table>
        </>
      ) : location.pathname === '/adoptlist/adopter' ? (
        <div>Adopter</div>
      ) : null}
    </Container>
  );
};

export default RequestListContainer;
