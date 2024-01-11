import AutoInput from "../../../CollectCOMP1/AutoDogtypeCompleteInput1/AutoCompleteInput1";
import {
  Button,
  Container,
  DeleteBtn,
  Form,
  Infos,
  InsideForm,
  SearchButton,
  Store,
  Tag,
  Tags,
  Title,
} from "./Styles1";
import { useEffect, useState } from "react";
import { IDogType } from "../../../../types/AutoCompleteType1";
import { useForm } from "react-hook-form";
import alertList from "../../../../utils/Swal1";
import Swal from "sweetalert2";
import { MajordogUrl } from "../../../../utils/MypageUrl1";
import { MajordogResultResponse } from "../../../../types/MypageType1";
import { get, patch } from "../../../../api/api";
import React from "react";

const MajorDogForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm();
  const [majordogtypes, setMajordogtypes] = useState<IDogType[]>([]);
  const [dogtype, setDogtype] = useState(0);
  const onSearch = (data: string) => {
    if (data === "") {
      Swal.fire({
        ...alertList.errorMessage("견종을 입력해주세요!"),
        width: "350px",
      });
    } else if (majordogtypes.length >= 3) {
      Swal.fire({
        ...alertList.errorMessage("주력 견종은 최대 3개까지 등록 가능합니다!"),
        width: "350px",
      });
      setValue("keyword", "");
    } else if (majordogtypes.some(majordogtype => majordogtype.name === data)) {
      Swal.fire({
        ...alertList.errorMessage("이미 등록된 견종입니다"),
        width: "350px",
      });
      setValue("keyword", "");
    } else {
      const newdogtypes = { id: dogtype, imgUrl: "", name: data };
      setMajordogtypes([...majordogtypes, newdogtypes]);
      setValue("keyword", "");
      console.log(majordogtypes);
    }
  };
  const onDelete = (id: number) => {
    const newdogtypes = majordogtypes.filter(dogtype => {
      return dogtype.id !== id;
    });
    setMajordogtypes(newdogtypes);
  };
  const onValid = async () => {
    const answer = await Swal.fire({
      ...alertList.doubleCheckMessage("주력 견종을 저장 하시겠습니까?"),
      width: "350px",
    });
    if (answer.isConfirmed) {
      try {
        const dogTypeId = majordogtypes.map(majordogtype => majordogtype.id);
        const url = MajordogUrl();
        const response = await patch<MajordogResultResponse>(
          url,
          {
            dogTypeId,
          },
          { headers: { "Content-Type": "application/json" } }
        );
        Swal.fire({
          ...alertList.successMessage("주력 견종이 저장 되었습니다"),
          width: "350px",
        });
        if (response.data.status === "FAIL") {
          throw "올바르지 못한 접근 입니다.";
        }
      } catch (e) {}
    }
  };
  // 주력견종이 로그인이 되지 않았다고 하며 가져와지지 않고, post 도 되지않고 있음
  const getMajordog = async () => {
    try {
      const url = MajordogUrl();
      const response = await get<MajordogResultResponse>(url);
      if (response.data.status === "FAIL") {
        throw "올바르지 못한 접근 입니다.";
      }
      setMajordogtypes(response.data.data);
    } catch (e) {}
  };
  useEffect(() => {
    getMajordog();
  }, []);
  // 주력견종 3개 밖에 불가능 하다고 텍스트 써 놓기
  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <Infos>
          <Title>
            주력견종<span>※주력견종은 최대 3개 까지 등록 가능합니다.</span>
          </Title>
          <InsideForm>
            <AutoInput
              register={register("keyword")}
              type="text"
              setValue={setValue}
              watch={watch}
              setDogtype={setDogtype}
            />
            <SearchButton onClick={() => onSearch(watch("keyword"))}>
              검색
            </SearchButton>
          </InsideForm>
          <Tags>
            {majordogtypes.map(majordogtype => (
              <Tag key={majordogtype.id}>
                <span>{majordogtype.name}</span>
                <DeleteBtn onClick={() => onDelete(majordogtype.id)}>
                  X
                </DeleteBtn>
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
