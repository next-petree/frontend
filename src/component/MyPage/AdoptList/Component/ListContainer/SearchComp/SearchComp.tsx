import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setSelect,
  setInputValue,
} from "../../../../../../redux/SearchResult/SearchResultSlice";
import {
  SearchWrap,
  DropDown,
  Input,
  DisNone,
  DropDownWrap,
  Selected,
} from "./Style1";
import arrowDown from "../../../../../../assets/images/arrowDown.png";
import Button from "../../Button/Button";
export default function SearchComp() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [localSelect, setLocalSelect] = useState("전체");
  const [localInputValue, setLocalInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalInputValue(event.target.value);
  };

  const handleInputFocus = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "내역을 검색하세요") {
      setLocalInputValue("");
    }
  };

  const selectItem = (item: string) => {
    setLocalSelect(item);
    setIsOpen(false);
  };

  const DropOpen = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const getValue = () => {
    dispatch(setSelect(localSelect));
    dispatch(setInputValue(localInputValue));
    console.log(`선택된 항목: ${localSelect}, 검색어: ${localInputValue}`);
  };

  return (
    <SearchWrap>
      <DropDown>
        <Selected onClick={DropOpen}>
          <div>{localSelect}</div>
          <img src={arrowDown} />
        </Selected>
        {isOpen ? (
          <DropDownWrap>
            <div className="sel" onClick={() => selectItem("전체")}>
              전체
            </div>
            <div className="sel" onClick={() => selectItem("견종")}>
              견종
            </div>
            <div className="sel" onClick={() => selectItem("강아지 이름")}>
              강아지 이름
            </div>
          </DropDownWrap>
        ) : (
          <DisNone></DisNone>
        )}
      </DropDown>
      <Input
        type="text"
        value={localInputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <Button
        bgcolor={"#4EC1BF"}
        buttonwidth={"100px"}
        buttonheight={"50px"}
        onClick={getValue}
      >
        검색
      </Button>
    </SearchWrap>
  );
}
