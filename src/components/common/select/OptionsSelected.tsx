import React, { useRef } from 'react';
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
const Select = styled.select`
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  padding-left: 2rem;
  border: 1px solid#dddddd;
  border-radius: 1rem;
  box-sizing: border-box;
  background-color: #fff;
  color: #939393;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
const IconSVG = styled.svg`
  margin-left: -44px;
  align-self: center;
  width: 32px;
  height: 32px;
`;
const StyledOption = styled.option<{ isSelected: boolean }>`
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? 'lightblue' : 'white')};
  font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
`;

const SelectOption: React.FC<SelectOptionProps> = ({ selectedValue, onSelect, options, placeholder, size }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <Container ref={containerRef} size={size}>
      <CustomSelect>
        <Select placeholder={placeholder}>
          {options.map((option) => (
            <StyledOption
              key={option.value}
              value={option.value}
              isSelected={selectedValue === option.value}
              onMouseEnter={() => onSelect(option.value)}
            >
              {option.label}
            </StyledOption>
          ))}
        </Select>
        <IconSVG width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.7425 21.1716C16.3452 21.614 15.6519 21.614 15.2545 21.1716L8.83648 14.0253C8.25832 13.3816 8.7152 12.3571 9.58047 12.3571L22.4166 12.3571C23.2819 12.3571 23.7388 13.3816 23.1606 14.0253L16.7425 21.1716Z"
            fill="#4EC1BF"
          />
        </IconSVG>
      </CustomSelect>
    </Container>
  );
};

export default SelectOption;
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
        max-width:160px
        `;
      default:
        return '';
    }
  }}
`;
