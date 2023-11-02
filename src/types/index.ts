// WhiteBox types
export interface IWBProps {
  width: number;
  height: number;
  top: number;
  left: number;
  children?: React.ReactNode;
}

export interface IDCProps {
  src: string;
  name: string;
  species: string;
  DOB: string;
  status?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ICLProps {
  children: React.ReactNode;
  height: number;
}

export interface IDog {
  birthDate: string;
  breederNickName: string;
  gender: string;
  id: number;
  imgUrl: string;
  isBreederVerified: boolean;
  name: string;
  status: string;
  type: string;
}

export interface IDMProps {
  dogId: number | undefined;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

declare global {
  interface Window {
    Kakao: any;
  }
}
