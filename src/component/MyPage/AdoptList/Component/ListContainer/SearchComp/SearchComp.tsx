import { useState } from 'react';
import {
  SearchWrap,
  DropDown,
  Input,
  // Button,
  DisNone,
  DropDownWrap,
  Selected,
} from './style';
import arrowDown from '../../../../../../assets/images/arrowDown.png';
import Button from '../../Button/Button';
export default function SearchComp() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('내역을 검색하세요');
  const [select, setSelect] = useState('항목을 선택해주세요');
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
      <Button
        bgcolor={'#4EC1BF'}
        buttonwidth={'8vw'}
        buttonheight={'50px'}
        onClick={getValue}
      >
        검색
      </Button>
    </SearchWrap>
  );
}
