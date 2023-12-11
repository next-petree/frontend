import BreederAuthToggle from "../breeder_auth_toggle/breeder_auth_toggle";
import { useForm } from "react-hook-form";
import AutoInput from "../../Auto_dogtype_complete_input/auto_complete_input";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setOnBreederSearch } from "../../../../features/collect/onBreederSearchSlice";
import {
  selectBreeder_search,
  set_breedersearchkeyword,
} from "../../../../features/collect/breeder_searchSlice";
import { Btn, Container, Form, State } from "./styles";

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
      <BreederAuthToggle />
      <State>{searchs.auth ? "인증 브리더만 보기" : "모든 브리더 보기"}</State>
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
