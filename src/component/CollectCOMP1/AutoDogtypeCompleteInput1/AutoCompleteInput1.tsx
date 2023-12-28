import { useEffect, useState } from "react";
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { DogsTypeurl } from "../../../utils/CollectUrl1";
import { get } from "../../../api/api";
import {
  AutoSearchContainer,
  AutoSearchData,
  AutoSearchWrap,
  Search,
  SearchContainer,
} from "./Styles1";
import { IDogType, IDogTypeAPI } from "../../../types/AutoCompleteType1";

interface Input {
  [key: string]: any;
  type: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  setDogtype?: React.Dispatch<React.SetStateAction<number>>;
  width?: number;
}

export default function AutoInput({
  type,
  register,
  required,
  setValue,
  watch,
  setDogtype,
  width,
  ...rest
}: Input) {
  const [show, setShow] = useState(false);
  const [types, setTypes] = useState<IDogType[]>([]);
  const [keyItems, setKeyItems] = useState<IDogType[]>([]);
  const fetchData = async () => {
    try {
      const url = DogsTypeurl();
      const response = await get<IDogTypeAPI>(url);
      if (response.data.status === "FAIL") {
        throw "올바르지 못한 접근 입니다.";
      }
      setTypes(response.data.data);
    } catch (e) {}
  };
  const upDateData = () => {
    setShow(true);
    let b = types.filter(res => res.name.includes(watch("keyword")) === true);
    setKeyItems(b);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (watch("keyword") && watch("keyword").length > 0) upDateData();
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [watch("keyword")]);
  return (
    <SearchContainer>
      <Search
        {...register}
        {...rest}
        type={type}
        placeholder="원하시는 견종을 입력해주세요"
        $width={width ? width : null}
      />
      {keyItems.length > 0 && keyItems && show && (
        <AutoSearchContainer>
          <AutoSearchWrap>
            {keyItems.map(item => (
              <AutoSearchData
                key={item.id}
                onClick={() => {
                  setValue("keyword", item.name);
                  setShow(false);
                  if (setDogtype) setDogtype(item.id);
                }}
              >
                {item.name}
              </AutoSearchData>
            ))}
          </AutoSearchWrap>
        </AutoSearchContainer>
      )}
    </SearchContainer>
  );
}
