export interface IDogTypeAPI {
    status: "SUCCESS" | "FAIL";
    data:IDogType[];
  }
  
export  interface IDogType {
    id: number;
    imgUrl: string;
    name: string;
  }