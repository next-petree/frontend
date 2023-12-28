import DecodeToken from "../../../../utils/DecodeJWT/DecodeJWT";
import {
  Button,
  Container,
  Form,
  Image,
  ImageContainer,
  ImageDeleteBtn,
  ImageInput,
  ImageLabel,
  ImageText,
  Images,
  Infos,
  Store,
  Title,
} from "./Styles1";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import alertList from "../../../../utils/Swal1";
import Swal from "sweetalert2";
import { LivingEnvironmentsResultResponse } from "../../../../types/MypageType1";
import { LivingEnvironmentUrl } from "../../../../utils/MypageUrl1";
import { get } from "../../../../api/api";
import React from "react";

export interface ILivingEnvironment {
  yard: FileList | null;
  bathRoom: FileList | null;
  livingRoom: FileList | null;
}

const LivingEnvironmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ILivingEnvironment>();
  const getUser = DecodeToken();
  const onValid = async (data: any) => {
    const answer = await Swal.fire({
      ...alertList.doubleCheckMessage("주거 환경을 저장 하시겠습니까?"),
      width: "350px",
    });
    if (answer.isConfirmed) {
      const yardform = new FormData();
      const bathroomform = new FormData();
      const livingroomform = new FormData();
      yardform.append("files", data.yard[0]);
      bathroomform.append("files", data.bathRoom[0]);
      livingroomform.append("files", data.livingRoom[0]);
      
    }
  };
  // 이미지 url만 보내면 업로드가 되는 건지
  const [imagesPre, setImagesPre] = useState({
    yard: "",
    bathRoom: "",
    livingRoom: "",
  });
  const images = {
    yard: watch("yard"),
    bathRoom: watch("bathRoom"),
    livingRoom: watch("livingRoom"),
  };
  useEffect(() => {
    if (images.yard && images.yard.length > 0) {
      const file1 = images.yard[0];
      setImagesPre({ ...imagesPre, yard: URL.createObjectURL(file1) });
    }
  }, [images.yard]);
  useEffect(() => {
    if (images.bathRoom && images.bathRoom.length > 0) {
      const file2 = images.bathRoom[0];
      setImagesPre({ ...imagesPre, bathRoom: URL.createObjectURL(file2) });
    }
  }, [images.bathRoom]);
  useEffect(() => {
    if (images.livingRoom && images.livingRoom.length > 0) {
      const file3 = images.livingRoom[0];
      setImagesPre({ ...imagesPre, livingRoom: URL.createObjectURL(file3) });
    }
  }, [images.livingRoom]);

  const onDelete = (data: string) => {
    if (data === "yard") {
      setImagesPre({ ...imagesPre, yard: "" });
      setValue(data, null);
    } else if (data === "bathRoom") {
      setImagesPre({ ...imagesPre, bathRoom: "" });
      setValue(data, null);
    } else if (data === "livingRoom") {
      setImagesPre({ ...imagesPre, livingRoom: "" });
      setValue(data, null);
    }
  };
  //spaceType: "LIVING_ROOM" | "BATH_ROOM" | "YARD";
  const getLivingEnvironments = async () => {
    try {
      const url = LivingEnvironmentUrl();
      const response = await get<LivingEnvironmentsResultResponse[]>(url);
      const livingroom = response.data.find(i => i.spaceType === "LIVING_ROOM");
      const bathroom = response.data.find(i => i.spaceType === "BATH_ROOM");
      const yard = response.data.find(i => i.spaceType === "YARD");
      if (livingroom?.imgUrl) {
        setImagesPre({ ...imagesPre, livingRoom: livingroom?.imgUrl });
      }
      if (bathroom?.imgUrl) {
        setImagesPre({ ...imagesPre, bathRoom: bathroom?.imgUrl });
      }
      if (yard?.imgUrl) {
        setImagesPre({ ...imagesPre, yard: yard?.imgUrl });
      }
    } catch (e) {}
  };
  useEffect(() => {
    getLivingEnvironments();
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <Infos>
          <Title>주거환경</Title>
          <Images>
            <ImageContainer>
              {imagesPre.yard !== "" ? (
                <>
                  <Image src={imagesPre.yard} alt="" />
                  <ImageDeleteBtn onClick={() => onDelete("yard")}>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="36" height="36" rx="18" fill="black" />
                      <rect
                        x="23.6567"
                        y="10.2227"
                        width="3"
                        height="19"
                        rx="1.5"
                        transform="rotate(45 23.6567 10.2227)"
                        fill="white"
                      />
                      <rect
                        x="25.7783"
                        y="23.6602"
                        width="3"
                        height="19"
                        rx="1.5"
                        transform="rotate(135 25.7783 23.6602)"
                        fill="white"
                      />
                    </svg>
                  </ImageDeleteBtn>
                </>
              ) : (
                <ImageLabel htmlFor="yard">
                  <svg
                    width="63"
                    height="47"
                    viewBox="0 0 63 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="5.13965"
                      width="2.72093"
                      height="13"
                      rx="1.36047"
                      fill="#AEAEAE"
                    />
                    <rect
                      x="13"
                      y="5.14062"
                      width="2.72093"
                      height="13"
                      rx="1.36047"
                      transform="rotate(90 13 5.14062)"
                      fill="#AEAEAE"
                    />
                    <g clipPath="url(#clip0_1458_616)">
                      <path
                        d="M62.8708 8.44556L59.6409 38.7826C59.5117 41.0579 58.0905 41.3107 55.7649 40.9315V38.4034L56.9277 38.6562L60.1577 8.19275L25.6615 4.65342L25.2739 8.95117L22.4316 9.07758L22.9484 4.40061C23.0776 2.88376 24.4987 1.87252 25.9199 1.99893L60.4161 5.53825C61.9664 5.66466 63.1292 7.05511 62.8708 8.44556ZM53.1809 11.7321L54.6021 42.7012C54.7313 44.218 53.5685 45.4821 52.0181 45.4821L17.2636 46.9989C15.7132 47.1253 14.4212 45.9877 14.4212 44.4708L13 13.5017C12.8708 11.9849 14.0336 10.7208 15.584 10.7208L50.3385 9.20398C51.7597 9.07758 53.0517 10.2152 53.1809 11.7321ZM17.1344 43.9652L51.8889 42.4484L50.4677 11.8585L15.7132 13.3753L17.1344 43.9652ZM50.0801 33.3472C50.0801 32.4624 49.6925 31.4512 49.0465 30.8192L46.5918 28.2911C45.6874 27.5326 44.3954 27.5326 43.6202 28.4175L39.2274 33.4736L29.6667 21.9708C28.8915 20.9596 27.3411 20.9596 26.4367 21.9708L18.9432 31.5776C18.4264 32.336 18.0388 33.2208 18.168 34.2321L18.5556 42.8276L50.4677 41.1843L50.0801 33.3472ZM44.5246 22.7293C46.5918 22.6029 48.1422 20.9596 48.1422 18.9371C48.013 16.9147 46.3334 15.3978 44.2662 15.3978C42.199 15.5242 40.6486 17.1675 40.6486 19.1899C40.6486 21.3388 42.4574 22.8557 44.5246 22.7293Z"
                        fill="#AEAEAE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1458_616">
                        <rect
                          width="50"
                          height="45"
                          fill="white"
                          transform="translate(13 2)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <ImageInput
                    id="yard"
                    type="file"
                    accept="image/*"
                    {...register("yard")}
                  />
                </ImageLabel>
              )}
              <ImageText>마당</ImageText>
            </ImageContainer>
            <ImageContainer>
              {imagesPre.bathRoom !== "" ? (
                <>
                  <Image src={imagesPre.bathRoom} alt="" />
                  <ImageDeleteBtn onClick={() => onDelete("bathRoom")}>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="36" height="36" rx="18" fill="black" />
                      <rect
                        x="23.6567"
                        y="10.2227"
                        width="3"
                        height="19"
                        rx="1.5"
                        transform="rotate(45 23.6567 10.2227)"
                        fill="white"
                      />
                      <rect
                        x="25.7783"
                        y="23.6602"
                        width="3"
                        height="19"
                        rx="1.5"
                        transform="rotate(135 25.7783 23.6602)"
                        fill="white"
                      />
                    </svg>
                  </ImageDeleteBtn>
                </>
              ) : (
                <ImageLabel htmlFor="bathRoom">
                  <svg
                    width="63"
                    height="47"
                    viewBox="0 0 63 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="5.13965"
                      width="2.72093"
                      height="13"
                      rx="1.36047"
                      fill="#AEAEAE"
                    />
                    <rect
                      x="13"
                      y="5.14062"
                      width="2.72093"
                      height="13"
                      rx="1.36047"
                      transform="rotate(90 13 5.14062)"
                      fill="#AEAEAE"
                    />
                    <g clipPath="url(#clip0_1458_616)">
                      <path
                        d="M62.8708 8.44556L59.6409 38.7826C59.5117 41.0579 58.0905 41.3107 55.7649 40.9315V38.4034L56.9277 38.6562L60.1577 8.19275L25.6615 4.65342L25.2739 8.95117L22.4316 9.07758L22.9484 4.40061C23.0776 2.88376 24.4987 1.87252 25.9199 1.99893L60.4161 5.53825C61.9664 5.66466 63.1292 7.05511 62.8708 8.44556ZM53.1809 11.7321L54.6021 42.7012C54.7313 44.218 53.5685 45.4821 52.0181 45.4821L17.2636 46.9989C15.7132 47.1253 14.4212 45.9877 14.4212 44.4708L13 13.5017C12.8708 11.9849 14.0336 10.7208 15.584 10.7208L50.3385 9.20398C51.7597 9.07758 53.0517 10.2152 53.1809 11.7321ZM17.1344 43.9652L51.8889 42.4484L50.4677 11.8585L15.7132 13.3753L17.1344 43.9652ZM50.0801 33.3472C50.0801 32.4624 49.6925 31.4512 49.0465 30.8192L46.5918 28.2911C45.6874 27.5326 44.3954 27.5326 43.6202 28.4175L39.2274 33.4736L29.6667 21.9708C28.8915 20.9596 27.3411 20.9596 26.4367 21.9708L18.9432 31.5776C18.4264 32.336 18.0388 33.2208 18.168 34.2321L18.5556 42.8276L50.4677 41.1843L50.0801 33.3472ZM44.5246 22.7293C46.5918 22.6029 48.1422 20.9596 48.1422 18.9371C48.013 16.9147 46.3334 15.3978 44.2662 15.3978C42.199 15.5242 40.6486 17.1675 40.6486 19.1899C40.6486 21.3388 42.4574 22.8557 44.5246 22.7293Z"
                        fill="#AEAEAE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1458_616">
                        <rect
                          width="50"
                          height="45"
                          fill="white"
                          transform="translate(13 2)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <ImageInput
                    id="bathRoom"
                    type="file"
                    accept="image/*"
                    {...register("bathRoom")}
                  />
                </ImageLabel>
              )}
              <ImageText>화장실</ImageText>
            </ImageContainer>
            <ImageContainer>
              {imagesPre.livingRoom !== "" ? (
                <>
                  <Image src={imagesPre.livingRoom} alt="" />
                  <ImageDeleteBtn onClick={() => onDelete("livingRoom")}>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="36" height="36" rx="18" fill="black" />
                      <rect
                        x="23.6567"
                        y="10.2227"
                        width="3"
                        height="19"
                        rx="1.5"
                        transform="rotate(45 23.6567 10.2227)"
                        fill="white"
                      />
                      <rect
                        x="25.7783"
                        y="23.6602"
                        width="3"
                        height="19"
                        rx="1.5"
                        transform="rotate(135 25.7783 23.6602)"
                        fill="white"
                      />
                    </svg>
                  </ImageDeleteBtn>
                </>
              ) : (
                <ImageLabel htmlFor="livingRoom">
                  <svg
                    width="63"
                    height="47"
                    viewBox="0 0 63 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="5.13965"
                      width="2.72093"
                      height="13"
                      rx="1.36047"
                      fill="#AEAEAE"
                    />
                    <rect
                      x="13"
                      y="5.14062"
                      width="2.72093"
                      height="13"
                      rx="1.36047"
                      transform="rotate(90 13 5.14062)"
                      fill="#AEAEAE"
                    />
                    <g clipPath="url(#clip0_1458_616)">
                      <path
                        d="M62.8708 8.44556L59.6409 38.7826C59.5117 41.0579 58.0905 41.3107 55.7649 40.9315V38.4034L56.9277 38.6562L60.1577 8.19275L25.6615 4.65342L25.2739 8.95117L22.4316 9.07758L22.9484 4.40061C23.0776 2.88376 24.4987 1.87252 25.9199 1.99893L60.4161 5.53825C61.9664 5.66466 63.1292 7.05511 62.8708 8.44556ZM53.1809 11.7321L54.6021 42.7012C54.7313 44.218 53.5685 45.4821 52.0181 45.4821L17.2636 46.9989C15.7132 47.1253 14.4212 45.9877 14.4212 44.4708L13 13.5017C12.8708 11.9849 14.0336 10.7208 15.584 10.7208L50.3385 9.20398C51.7597 9.07758 53.0517 10.2152 53.1809 11.7321ZM17.1344 43.9652L51.8889 42.4484L50.4677 11.8585L15.7132 13.3753L17.1344 43.9652ZM50.0801 33.3472C50.0801 32.4624 49.6925 31.4512 49.0465 30.8192L46.5918 28.2911C45.6874 27.5326 44.3954 27.5326 43.6202 28.4175L39.2274 33.4736L29.6667 21.9708C28.8915 20.9596 27.3411 20.9596 26.4367 21.9708L18.9432 31.5776C18.4264 32.336 18.0388 33.2208 18.168 34.2321L18.5556 42.8276L50.4677 41.1843L50.0801 33.3472ZM44.5246 22.7293C46.5918 22.6029 48.1422 20.9596 48.1422 18.9371C48.013 16.9147 46.3334 15.3978 44.2662 15.3978C42.199 15.5242 40.6486 17.1675 40.6486 19.1899C40.6486 21.3388 42.4574 22.8557 44.5246 22.7293Z"
                        fill="#AEAEAE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1458_616">
                        <rect
                          width="50"
                          height="45"
                          fill="white"
                          transform="translate(13 2)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <ImageInput
                    id="livingRoom"
                    type="file"
                    accept="image/*"
                    {...register("livingRoom")}
                  />
                </ImageLabel>
              )}
              <ImageText>거실</ImageText>
            </ImageContainer>
          </Images>
        </Infos>
        <Store>
          <Button $isLong={true}>저장</Button>
        </Store>
      </Form>
    </Container>
  );
};

export default LivingEnvironmentForm;
