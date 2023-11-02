// ************ Components ************
export interface IWBProps {
  width: number;
  height: number;
  top: number;
  left: number;
  children?: React.ReactNode;
} // white box

export interface IDCProps {
  src: string;
  name: string;
  species: string;
  DOB: string;
  status?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
} // dog card

export interface IPBProp {
  children: React.ReactNode;
} // primary button

export interface IDMProps {
  dogId: number | undefined;
  onClick: React.MouseEventHandler<HTMLDivElement>;
} // detail modal

export interface ICAProps {
  isQualifiedBreeder?: boolean;
  isQualifiedCustomer?: boolean;
  imgSrc?: string;
} // custom avatar

// ************ Pages ************
export interface IBLProps {
  children: React.ReactNode;
  height: number;
} // breeder layout

export interface IDogProps {
  birthDate: string;
  breederNickName: string;
  gender: string;
  id: number;
  imgUrl: string;
  isBreederVerified: boolean;
  name: string;
  status: string;
  type: string;
} // breeder detail
