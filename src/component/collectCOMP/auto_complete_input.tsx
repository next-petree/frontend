import { useEffect, useState } from "react";
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import styled from "styled-components";
import { DogsTypeurl } from "../../utils/collect_url";
import { get } from "../../api/api";

const SearchContainer = styled.div`
  width: 400px;
  height: 45px;
  position: relative;
  border: 0;
  margin: 0 auto;
`;

const Search = styled.input`
  display: flex;
  align-items: center;
  border: none;
  width: 314px;
  height: 48px;
  border-radius: 12px;
  background-color: #f5f5f5;
  padding-left: 2vw;
  ::placeholder {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #939393;
  }
  &:focus {
    outline: none;
  }
`;

const AutoSearchContainer = styled.div`
  z-index: 3;
  height: fit-content;
  width: 314px;
  padding: 14px 0 14px 14px;
  background-color: #fff;
  position: absolute;
  top: 45px;
  border: 1px solid #edf5f5;
  border-radius: 12px;
`;

const AutoSearchWrap = styled.ul``;

const AutoSearchData = styled.li`
  width: 100%;
  list-style: none;
  /* height: 30px; */
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #5d5d5d;
  z-index: 4;
  letter-spacing: 2px;
  margin-left: -2.5vw;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  position: relative;
`;

interface Iinput {
  [key: string]: any;
  type: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  setDogtype?:React.Dispatch<React.SetStateAction<number>>
}

interface IDogTypeAPI {
  status: "SUCCESS" | "FAIL";
  data:IType[];
}

interface IType {
  id: number;
  imgUrl: string;
  name: string;
}

export default function AutoInput({
  type,
  register,
  required,
  setValue,
  watch,
  setDogtype,
  ...rest
}: Iinput) {
  const [show, setShow] = useState(false);
  const [types, setTypes] = useState<IType[]>([]);
  const [keyItems, setKeyItems] = useState<IType[]>([]);
  const fetchData = async () => {
    try {
      const url = DogsTypeurl();
      const response = await get<IDogTypeAPI>(url);
      if (response.data.status === "FAIL") {
        throw "올바르지 못한 접근 입니다.";
      }
      setTypes(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const upDateData = () => {
    setShow(true);
    let b = types.filter((res) => res.name.includes(watch("keyword")) === true);
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
      />
      {keyItems.length > 0 && keyItems && show && (
        <AutoSearchContainer>
          <AutoSearchWrap>
            {keyItems.map((item) => (
              <AutoSearchData
                key={item.id}
                onClick={() => {
                  setValue("keyword", item.name);
                  setShow(false);
                  if(setDogtype) setDogtype(item.id)
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
