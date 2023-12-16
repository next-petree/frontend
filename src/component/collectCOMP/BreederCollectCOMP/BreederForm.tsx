import styled from "styled-components";
import BreederAuthToggle from "./BreederAuthToggle";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IForms, IParams } from "./BCMain";
import AutoInput from "../AutoDogtypeCompleteInput/AutoCompleteInput";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  height: 52px;
  margin: 0 auto;
  margin-bottom: -2vh;
`;

const State = styled.span`
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  color: #4ec1bf;
`;
const Form = styled.form`
  display: flex;
  gap: 17px;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  display: flex;
  align-items: center;
  border: none;
  width: 314px;
  height: 48px;
  border-radius: 12px;
  background-color: #f5f5f5;
  padding-left: 14px;
  &::placeholder {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #939393;
  }
`;
const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 52px;
  border: none;
  border-radius: 12px;
  background-color: #35d8d5;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  color: white;
`;

export default function BreederForm({ forms, setForms, setOnSearch }: IParams) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm();
  const onValid = ({ keyword }: any) => {
    setForms({ ...forms, keyword });
    reset();
    setOnSearch(true);
  };
  return (
    <Container>
      <BreederAuthToggle
        forms={forms}
        setForms={setForms}
        setOnSearch={setOnSearch}
      />
      <State>{forms.auth ? "인증 브리더만 보기" : "모든 브리더 보기"}</State>
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
