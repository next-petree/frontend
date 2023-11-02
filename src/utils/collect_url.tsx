import { IForms } from "../component/collectCOMP/breedercollectCOMP/BC_main";
import { IDogyFilterParams } from "../component/collectCOMP/dogycollectCOMP/DC_main";

interface IBreedersCollecturl {
  page: number;
  forms: IForms;
}

interface IDogsCollecturl {
  page: number;
  category: IDogyFilterParams;
}

export const BreedersCollecturl = ({ page, forms }: IBreedersCollecturl) => {
  return `/breeders?page=${page - 1}${forms.auth ? "&verification=yes" : ""}${
    forms.keyword === "" ? "" : `&keyword=${forms.keyword}`
  }`;
};

export const DogsTypeurl = () => {
  return `/dog-type`;
};

export const DogsTypeSearchurl = (keyword: string) => {
  return `/dog-type/search?keyword=${keyword}`;
};

//dogs?page=0&dogTypeId=1&verification=yes&isAvailable=true&gender=MALE&size=SMALL
export const DogsCollecturl = ({ page, category }: IDogsCollecturl) => {
  return `/dogs?page=${page - 1}${
    category.dogtype != 0 ? `&dogTypeId=${category.dogtype}` : ""
  }
  ${category.verification ? `&verification=yes` : ""}
  ${category.isAvailable ? `&isAvailable=true` : ""}
  ${category.gender != "" ? `&gender=${category.gender}` : ""}
  ${category.size != "" ? `&size=${category.size}` : ""}`;
};
