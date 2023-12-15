import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { dogfilters } from "../filter_data";
import AutoInput from "../../Auto_dogtype_complete_input/auto_complete_input";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  selectDog_searchfilter,
  set_searchfilterDogtype,
  set_searchfilterGender,
  set_searchfilterIsAvailable,
  set_searchfilterSize,
  set_searchfilterVerification,
} from "../../../../../redux/collect/dog_searchfilterSlice";
import { IDogyFilterParams } from "../../../../types/dogscollect_types";
import { setOnDogSearch } from "../../../../../redux/collect/onDogSearchSlice";
import { setOnUseDogfilter } from "../../../../../redux/collect/onUseDogfilterSlice";
import {
  Btn,
  Buttons,
  Check,
  Checks,
  ConfirmBtn,
  Confirms,
  FilterContainer,
  Form,
  Overlay,
  Span,
  Title,
} from "./styles";

export default function SearchFilter() {
  const { register, handleSubmit, watch, setValue } = useForm();

  const dispath = useAppDispatch();
  const category = useAppSelector(selectDog_searchfilter);

  const [dogtype, setDogtype] = useState(0);
  const [formdata, setFormdata] = useState<IDogyFilterParams>(category);

  const onClose = () => {
    dispath(setOnDogSearch(false));
  };

  const onValid = (data: any) => {
    dispath(setOnUseDogfilter(true));
    if (data.keyword === "") {
      setDogtype(0);
    } else if (data.keyword != "" && dogtype === 0) {
      setDogtype(-1);
    }
    dispath(set_searchfilterDogtype(dogtype));
    dispath(set_searchfilterGender(formdata.gender));
    dispath(set_searchfilterIsAvailable(formdata.isAvailable));
    dispath(set_searchfilterSize(formdata.size));
    dispath(set_searchfilterVerification(formdata.verification));
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
            {dogfilters.map((dogfilter) => (
              <Check key={dogfilter.id}>
                <Span>{dogfilter.name}</Span>
                <Buttons>
                  {dogfilter.category.map((btn) => (
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
            <ConfirmBtn type="submit" $isYes={true}>
              검색
            </ConfirmBtn>
            <ConfirmBtn type="button" onClick={onClose} $isYes={false}>
              취소
            </ConfirmBtn>
          </Confirms>
        </Form>
      </FilterContainer>
    </Overlay>
  );
}
