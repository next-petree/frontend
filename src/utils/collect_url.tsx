import { IBreederSearch } from "../types/breederscollect_type";
import { IDogyFilterParams } from "../types/dogscollect_types";


interface IBreedersCollecturl {
  page: number;
  searchs: IBreederSearch;
}

interface IDogsCollecturl {
  page: number;
  category: IDogyFilterParams;
}

export const BreedersCollecturl = ({ page, searchs }: IBreedersCollecturl) => {
  return `breeders?page=${page - 1}${searchs.auth ? "&verification=yes" : ""}${
    searchs.keyword === "" ? "" : `&keyword=${searchs.keyword}`
  }`;
};

export const DogsTypeurl = () => {
  return `dog-type`;
};

export const DogsTypeSearchurl = (keyword: string) => {
  return `dog-type/search?keyword=${keyword}`;
};

//dogs?page=0&dogTypeId=1&verification=yes&isAvailable=true&gender=MALE&size=SMALL
export const DogsCollecturl = ({ page, category }: IDogsCollecturl) => {
  return `dogs?page=${page - 1}${
    category.dogtype != 0 ? `&dogTypeId=${category.dogtype}` : ""
  }
  ${category.verification ? `&verification=yes` : ""}
  ${category.isAvailable ? `&isAvailable=true` : ""}
  ${category.gender != "" ? `&gender=${category.gender}` : ""}
  ${category.size != "" ? `&size=${category.size}` : ""}`;
};
