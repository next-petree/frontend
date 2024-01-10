import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

import * as S from "./styles";

interface IProps {
  content: string[];
  category: string;
  onClick: (value: string) => void;
}

const FilterBox = ({ content, category, onClick }: IProps) => {
  const [isSelectClicked, setIsSelectClicked] = useState(false);
  return (
    <S.SelectContainer onClick={() => setIsSelectClicked((prev) => !prev)}>
      <S.CustomSelect
        type="text"
        readOnly
        placeholder="항목을 선택해주세요"
        value={category}
      />
      <S.SelectIconContainer isclicked={isSelectClicked}>
        <BiSolidDownArrow />
      </S.SelectIconContainer>
      {isSelectClicked && (
        <S.SelectUl>
          {content.map((c, index) => (
            <S.SelectLi key={index} onClick={() => onClick(c)}>
              {c}
            </S.SelectLi>
          ))}
        </S.SelectUl>
      )}
    </S.SelectContainer>
  );
};

export default FilterBox;
