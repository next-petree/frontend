import { styled } from "styled-components";
import ProfileForm from "./ProfileContentForms1/ProfileForm";
import MajorDogForm from "./ProfileContentForms1/MajorDogForm";
import LivingEnvironmentForm from "./ProfileContentForms1/LivingEnvironmentForm";
import DecodeToken from "../../../utils/DecodeJWT/DecodeJWT";
import { useEffect, useState } from "react";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
  @media (max-width:1100px) {
    width: 70vw;
  }
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
      {user?.role === "BREEDER" ? (
        <MajorDogForm />
      ) : user?.role === "ADOPTER" ? (
        <LivingEnvironmentForm />
      ) : null}
    </Wrapper>
  );
};
export default ProfileContent;
