import { styled } from "styled-components";
import DecodeToken from "../../../../utils/DecodeJWT/DecodeJWT";
import AutoInput from "../../../collectCOMP/Auto_dogtype_complete_input/auto_complete_input";
import {
  Button,
  Container,
  DeleteBtn,
  Form,
  Infos,
  Input,
  InsideForm,
  SearchButton,
  Store,
  Tag,
  Tags,
  Title,
} from "./styles";
import { useEffect, useState } from "react";
import { IDogType } from "../../../../types/auto_complete_type";
import { useForm } from "react-hook-form";
import alertList from "../../../../utils/swal";
import Swal from "sweetalert2";



const MajorDogForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();
  const getUser = DecodeToken();
  const [dogtypes, setDogtypes] = useState<IDogType[]>([
    {
      id: 1,
      imgUrl: "",
      name: "푸들",
    },
    {
      id: 2,
      imgUrl: "",
      name: "진돗개",
    },
    {
      id: 3,
      imgUrl: "",
      name: "요크셔테리어",
    },
  ]);
  const onSearch = (data: string) => {
    if (data === "") {
      Swal.fire({
        ...alertList.errorMessage("견종을 입력해주세요!"),
        width:"350px",
      });
    }
    else if (dogtypes.length >= 3) {
      Swal.fire({
        ...alertList.errorMessage("주력 견종은 최대 3개까지 등록 가능합니다!"),
        width:"350px",
      });
      setValue("dogtype", "");
    } else {
      const newdogtypes = { id: 5, imgUrl: "", name: data };
      setDogtypes([...dogtypes, newdogtypes]);
      setValue("dogtype", "");
    }
  };
  const onDelete = (id: number) => {
    const newdogtypes = dogtypes.filter(dogtype => {
      return dogtype.id !== id 
    })
    setDogtypes(newdogtypes);
  };
  const onValid = async () => {
    const answer = await Swal.fire({
      ...alertList.doubleCheckMessage("주력 견종을 저장 하시겠습니까?"),
      width: "350px"
    })
    if(answer.isConfirmed) {
      console.log(dogtypes)
    }
  }
  // 주력견종 3개 밖에 불가능 하다고 텍스트 써 놓기
  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <Infos>
          <Title>주력견종<span>※주력견종은 최대 3개 까지 등록 가능합니다.</span></Title>
          <InsideForm>
            <Input
              {...register("dogtype")}
              $islen="mid"
              placeholder="원하시는 견종을 입력해주세요"
            />
            <SearchButton onClick={() => onSearch(watch("dogtype"))}>
              검색
            </SearchButton>
          </InsideForm>
          <Tags>
            {dogtypes.map((dogtype) => (
              <Tag key={dogtype.id}>
                <span>{dogtype.name}</span>
                <DeleteBtn onClick={() => onDelete(dogtype.id)}>X</DeleteBtn>
              </Tag>
            ))}
          </Tags>
        </Infos>
        <Store>
          <Button $isLong={true}>저장</Button>
        </Store>
      </Form>
    </Container>
  );
};

export default MajorDogForm;
