import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';

interface Option {
  value: string;
  label: string;
}
interface SelectOptionProps {
  selectedValue: string | undefined;
  onSelect: (value: string) => void;
  options: Option[];
  optionStyle?: React.CSSProperties;
  selectedOptionStyle?: React.CSSProperties;
  placeholder: string | undefined;
  size: 'lg' | 'md' | 'sm';
}
const CustomSelect = styled.div`
  position: relative;
  max-width: 240px;
  font-size: 0;
  display: flex;
`;
const Select = styled.div`
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  border: 1px solid #dddddd;
  border-radius: 1rem;
  box-sizing: border-box;
  background-color: #fff;
  color: #939393;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 13px 9px 22px;
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.393px;
  }
  & > ul {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(calc(100% + 1px));
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 11.45942px 16.3706px 0px rgba(58, 58, 58, 0.08);
    border-radius: 1rem;
    overflow: hidden;
    transition: 0.2s ease-in-out all;
    &.close {
      height: 0;
    }
  }
`;
const IconSVG = styled.svg`
  align-self: center;
  width: 32px;
  height: 32px;
`;
const StyledOption = styled.li<{ $isSelected: boolean }>`
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? '#e6f6f6' : 'white')};
  font-weight: ${(props) => (props.$isSelected ? 'bold' : 'normal')};
  padding: 15px 32px;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  & + li::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 81.9%;
    height: 1px;
    background: #eee;
  }
`;

const Container = styled.div<{ size: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 1.25rem;
  margin-right: 15px;
  ${(props) => {
    switch (props.size) {
      case 'lg':
        return `
        max-width:280px
        `;
      case 'md':
        return `
        max-width:240px
        `;
      case 'sm':
        return `
        max-width:196px
        `;
      default:
        return '';
    }
  }}
`;

const SelectOption: React.FC<SelectOptionProps> = ({ selectedValue, onSelect, options, placeholder, size }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(placeholder);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const onSelectOption = (option: Option) => {
    onSelect(option.value);
    setSelectedOption(option.label);
  };
  return (
    <Container ref={containerRef} size={size}>
      <CustomSelect>
        <Select
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div>
            {selectedOption}
            <IconSVG width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.7425 21.1716C16.3452 21.614 15.6519 21.614 15.2545 21.1716L8.83648 14.0253C8.25832 13.3816 8.7152 12.3571 9.58047 12.3571L22.4166 12.3571C23.2819 12.3571 23.7388 13.3816 23.1606 14.0253L16.7425 21.1716Z"
                fill="#4EC1BF"
              />
            </IconSVG>
          </div>
          <ul className={isOpen ? '' : 'close'}>
            {options.map((option) => (
              <StyledOption
                key={option.value}
                value={option.value}
                $isSelected={selectedValue === option.value}
                onMouseEnter={() => {
                  onSelectOption(option);
                }}
              >
                {option.label}
              </StyledOption>
            ))}
          </ul>
        </Select>
      </CustomSelect>
    </Container>
  );
};

export default SelectOption;
