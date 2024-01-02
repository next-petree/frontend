export interface IBreedersAPI {
  status: "SUCCESS" | "FAIL";
  data: BreedersData;
}

export interface BreedersData {
  content: BreedersContent[];
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

export interface BreedersContent {
  id: number;
  email: string;
  nickname: string;
  phoneNumber: string;
  address1: string | null;
  verified: boolean;
  distance: number | null;
  types: string[];
  profileImagUrl: string | null;
}

interface Pageable {}

interface Sort {}


export interface IBreederSearch {
  keyword: string;
  auth: boolean;
}
  