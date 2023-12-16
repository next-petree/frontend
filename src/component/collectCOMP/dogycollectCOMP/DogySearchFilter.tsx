import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { dogfilters } from "./filter_data";
import AutoInput from "../AutoDogtypeCompleteInput/AutoCompleteInput";
import { IDogyFilterParams } from "./DCMain";

const Overlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  opacity: 1;
`;

const FilterContainer = styled.div`
  position: absolute;
  width: 50vw;
  height: 37vw;
  border-radius: 50px;
  top: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 99999;
  background-color: white;
  padding: 3vw 6vw;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2vw;
`;
const Title = styled.h1`
  font-size: 3.5rem;
  display: flex;
  align-items: center;
`;

const Checks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1vw;
`;
const Check = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
`;
const Buttons = styled.div`
  display: flex;
  gap: 0.8vw;
`;
const Btn = styled.div<{ $isCheck: boolean | undefined; $isLong: boolean }>`
  width: ${props => (props.$isLong ? "17vw" : "7.5vw")};
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => (props.$isCheck ? "none" : "1px solid #4EC1BF")};
  border-radius: 12px;
  background-color: ${props => (props.$isCheck ? "#4EC1BF" : "white")};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: ${props => (props.$isCheck ? "white" : " #4EC1BF")};
`;

const Span = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

const Confirms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8vw;
  margin-top: 1vw;
`;

const ConfirmBtn = styled.button<{ $isYes: boolean }>`
  width: 17vw;
  height: 7vh;
  border: none;
  border-radius: 12px;
  background-color: ${props => (props.$isYes ? "#4EC1BF" : "black")};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: white;
`;

interface IParams2 {
  setOnSearch: React.Dispatch<React.SetStateAction<boolean>>;
  category: IDogyFilterParams;
  setCategory: React.Dispatch<React.SetStateAction<IDogyFilterParams>>;
  setOnUseFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchFilter({
  setOnSearch,
  category,
  setCategory,
  setOnUseFilter,
}: IParams2) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();
  const [dogtype, setDogtype] = useState(0);
  const [formdata, setFormdata] = useState(category);
  const onClose = () => {
    setOnSearch(prev => !prev);
  };
  const onValid = (data: any) => {
    setOnUseFilter(true);
    if (data.keyword === "") {
      setDogtype(0);
    } else if (data.keyword != "" && dogtype === 0) {
      setDogtype(-1);
    }
    setCategory({ ...formdata, dogtype });
    onClose();
  };
  const onCategorySet = (data1: any, data2: any) => {
    if (data1 === "verification") {
      setFormdata({ ...formdata, verification: data2 });
    } else if (data1 === "isAvailable") {
      setFormdata({ ...formdata, isAvailable: data2 });
    } else if (data1 === "gender") {
      setFormdata({ ...formdata, gender: data2 });
    } else if (data1 === "size") {
      setFormdata({ ...formdata, size: data2 });
    }
  };
  const onCategoryCheck = (data1: any, data2: any) => {
    if (data1 === "verification") {
      return Boolean(formdata.verification === data2);
    } else if (data1 === "isAvailable") {
      return Boolean(formdata.isAvailable === data2);
    } else if (data1 === "gender") {
      return Boolean(formdata.gender === data2);
    } else if (data1 === "size") {
      return Boolean(formdata.size === data2);
    }
  };

  return (
    <Overlay>
      <FilterContainer>
        <Form onSubmit={handleSubmit(onValid)}>
          <Title>
            필터{" "}
            <AutoInput
              register={register("keyword")}
              type="text"
              setValue={setValue}
              watch={watch}
              setDogtype={setDogtype}
            />
          </Title>
          <Checks>
            {dogfilters.map(dogfilter => (
              <Check key={dogfilter.id}>
                <Span>{dogfilter.name}</Span>
                <Buttons>
                  {dogfilter.category.map(btn => (
                    <Btn
                      key={btn.key}
                      onClick={() => onCategorySet(dogfilter.value, btn.value)}
                      $isCheck={onCategoryCheck(dogfilter.value, btn.value)}
                      $isLong={dogfilter.isLong}
                    >
                      {btn.str}
                    </Btn>
                  ))}
                </Buttons>
              </Check>
            ))}
          </Checks>
          <Confirms>
            <ConfirmBtn $isYes={true}>검색</ConfirmBtn>
            <ConfirmBtn onClick={onClose} $isYes={false}>
              취소
            </ConfirmBtn>
          </Confirms>
        </Form>
      </FilterContainer>
    </Overlay>
  );
}
