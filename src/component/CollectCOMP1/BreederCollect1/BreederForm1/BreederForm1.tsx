import BreederAuthToggle from "../BreederAuthToggle1/BreederAuthToggle1";
import { useForm } from "react-hook-form";
import AutoInput from "../../AutoDogtypeCompleteInput1/AutoCompleteInput1";
import { setOnBreederSearch } from "../../../../redux/Collect1/OnBreederSearchSlice1";
import {
  selectBreeder_search,
  set_breedersearchkeyword,
} from "../../../../redux/Collect1/BreederSearchSlice1";
import { Btn, Container, Form, State, ToggleContainer } from "./Styles1";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

export default function BreederForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm();
  const dispath = useAppDispatch();
  const searchs = useAppSelector(selectBreeder_search);

  const onValid = ({ keyword }: any) => {
    dispath(set_breedersearchkeyword(keyword));
    reset();
    dispath(setOnBreederSearch(true));
  };
  return (
    <Container>
      <ToggleContainer>
        <BreederAuthToggle />
        <State>
          {searchs.auth ? "인증 브리더만 보기" : "모든 브리더 보기"}
        </State>
      </ToggleContainer>
      <Form onSubmit={handleSubmit(onValid)}>
        <AutoInput
          register={register("keyword")}
          type="text"
          setValue={setValue}
          watch={watch}
        />
        <Btn>검색</Btn>
      </Form>
    </Container>
  );
}
