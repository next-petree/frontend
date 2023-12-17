import { styled } from "styled-components";
import ProfileForm from "./ProfileContent_Forms/ProfileForm";
import MajorDogForm from "./ProfileContent_Forms/MajorDogForm";
import LivingEnvironmentForm from "./ProfileContent_Forms/LivingEnvironmentForm";
import DecodeToken from "../../../utils/DecodeJWT/DecodeJWT";
import { useEffect, useState } from "react";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
`;
interface Iuser {
  email: string;
  exp: number;
  iat: number;
  role: "BREEDER" | "ADOPTER";
  sub: string;
  verification: boolean;
}
const ProfileContent = () => {
  const [user, setuser] = useState<Iuser>();
  useEffect(() => {
    const userinfo = DecodeToken();
    setuser(userinfo);
  }, []);
  return (
    <Wrapper>
      <ProfileForm />
      {user?.role === "BREEDER" ? <MajorDogForm /> : <LivingEnvironmentForm/>}
    </Wrapper>
  );
};
export default ProfileContent;