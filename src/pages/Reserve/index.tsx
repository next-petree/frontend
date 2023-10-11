import styled from "styled-components";

const TextButton = styled.span`
  cursor: pointer;
`;
export interface IBreederDogDetail {
  id: number;
  name: string;
  type: string;
  gender: string;
  birthDate: string;
  management: string;
  breederId: number;
  breederNickName: string;
  isBreederVerified: boolean;
  imagesUrl: string[];
}
export enum Step {
  Loading,
  Profile,
  Apply,
  Completed,
}

export enum Level {
  None,
  Silver,
  Gold,
}

export default function ReserveLogin() {}
