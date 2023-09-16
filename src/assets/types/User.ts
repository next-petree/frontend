import { E_Dog_Status } from '~/pages/dogs/constatns';

export interface User {
  id: number;
  nickname: string;
  address1: string;
  verified: boolean;
  profileImgUrl: string | null;
  selfIntroduction: string;
}

export interface IUserDetail extends User {
  envResponseDtos: IEnvironment[];
}

interface IEnvironment {
  id: number;
  imgUrl: string;
  spaceType: Space;
}

export type Space = 'LIVING_ROOM' | 'BATH_ROOM' | 'YARD';

export interface IBreederDetail extends User {
  mainBreedDtoResponseList: MajorBreed[];
  simpleDogDtos: IBreederDog[];
}

interface MajorBreed {
  id: number;
  imgUrl: string;
  name: string;
}

interface IBreederDog {
  id: number;
  birthDate: string;
  gender: string;
  management: string;
  name: string;
  imgUrl: string | null;
  type: string;
  status: E_Dog_Status;
}

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
  dogImgUrl: string[]
}