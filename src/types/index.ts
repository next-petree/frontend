// WhiteBox types
export interface IWBProps {
  width: number;
  height: number;
  top: number;
  left: number;
  children?: React.ReactNode;
}

// Custom Layout
export interface ICLProps {
  children: React.ReactNode;
  height: number;
}
