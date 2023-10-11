import React, { useRef, useState } from "react";
import * as S from "./style";
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
  size: "lg" | "md" | "sm";
}

const SelectOption: React.FC<SelectOptionProps> = ({
  selectedValue,
  onSelect,
  options,
  placeholder,
  size,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    placeholder
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const onSelectOption = (option: Option) => {
    onSelect(option.value);
    setSelectedOption(option.label);
  };
  return (
    <S.Container ref={containerRef} size={size}>
      <S.CustomSelect>
        <S.Select
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div>
            {selectedOption}
            <S.IconSVG
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.7425 21.1716C16.3452 21.614 15.6519 21.614 15.2545 21.1716L8.83648 14.0253C8.25832 13.3816 8.7152 12.3571 9.58047 12.3571L22.4166 12.3571C23.2819 12.3571 23.7388 13.3816 23.1606 14.0253L16.7425 21.1716Z"
                fill="#4EC1BF"
              />
            </S.IconSVG>
          </div>
          <ul className={isOpen ? "" : "close"}>
            {options.map((option) => (
              <S.StyledOption
                key={option.value}
                value={option.value}
                $isSelected={selectedValue === option.value}
                onMouseEnter={() => {
                  onSelectOption(option);
                }}
              >
                {option.label}
              </S.StyledOption>
            ))}
          </ul>
        </S.Select>
      </S.CustomSelect>
    </S.Container>
  );
};

export default SelectOption;
