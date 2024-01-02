export interface IDogsAPI {
  status: "SUCCESS" | "FAIL";
  data: DogsData;
}

export interface DogsData {
  content: DogsContent[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  sort: Sort;
  first: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  empty: boolean;
}

export interface DogsContent {
  id: number;
  name: string;
  type: string;
  gender: string;
  status: string; // 이후에 수현님께 여쭈어봐서 수정!
  birthDate: string;
  imgUrl: string;
  breederNickName: string;
  isBreederVerified: boolean;
}

interface Pageable {}

interface Sort {}


export interface IDogyFilterParams {
  dogtype: number;
  verification: boolean;
  isAvailable: boolean;
  gender: string;
  size: string;
}