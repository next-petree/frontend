import { useForm } from "react-hook-form";
import {
  Button,
  Container,
  Errmsg,
  Form2,
  Input,
  Label,
  Pw,
  Pws,
  Store,
  Title,
} from "./styles";
import { useEffect } from "react";
import Swal from "sweetalert2";
import alertList from "../../../../utils/swal";

const ChangePwForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setError,
    clearErrors
  } = useForm();
  const onValid = async (data:any) => {
    const answer = await Swal.fire({
      ...alertList.doubleCheckMessage("회원정보를 저장하시겠습니까?"),
      width: "350px",
    });
    if (answer.isConfirmed) {
      console.log(data);
    }
  };
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (watch("ConfirmPw") && watch("ConfirmPw").length > 0 ) {
        if(watch("ConfirmPw") !== watch("NextPw")) {
          setError("ConfirmPw", { type: 'custom', message: '변경할 비밀번호와 다릅니다' })
        }
        else {
          clearErrors("ConfirmPw");
        }
      };
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [watch("ConfirmPw"), watch("NextPw")]);
  return (
    <Container>
      <Title>비밀번호 변경</Title>
      <Form2 onSubmit={handleSubmit(onValid)}>
        <Pws>
          <Pw>
            <Label>현재 비밀번호 입력</Label>
            <Input
              $islen="mid"
              type="text"
              {...register("PastPw", {
                required: "현재 비밀번호를 입력해주세요",
              })}
            />
            
          </Pw>
          {errors.PastPw ? (
              <Errmsg $needMargin={true}>{`${errors.PastPw.message}`}</Errmsg>
            ) : null}
          <span>비밀번호는 영문,숫자 입력으로 4~16자 이내</span>
          <Pw>
            <Label>변경할 비밀번호 입력</Label>
            <Input
              $islen="mid"
              type="text"
              {...register("NextPw", {
                required: "변경할 비밀번호를 입력해주세요",
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,16}$/,
                  message: "비밀번호가 형식에 맞지 않습니다",
                },
              })}
            />
          </Pw>
          {errors.NextPw ? (
              <Errmsg $needMargin={true}>{`${errors.NextPw.message}`}</Errmsg>
            ) : null}
          <Pw>
            <Label>변경할 비밀번호 확인</Label>
            <Input $islen="mid" type="text" {...register("ConfirmPw")} />
          </Pw>
          {errors.ConfirmPw ? (
              <Errmsg $needMargin={true}>{`${errors.ConfirmPw.message}`}</Errmsg>
            ) : null}
        </Pws>
        <Store>
          <Button $isLong={true}>저장</Button>
        </Store>
      </Form2>
    </Container>
  );
};

export default ChangePwForm;
