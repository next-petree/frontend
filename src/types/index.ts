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

export interface IDMProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
