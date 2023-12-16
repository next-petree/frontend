import BreederForm from "./BreederForm";
import BreederBox from "./BreederBox";
import {
  BoxContainer,
  MainBox,
  No_return,
  Title,
  Wrapper,
  BoxWrapper,
} from "../StylesCollect/CollectMainStyled";
import Pagenation from "../pagenation";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BreedersCollecturl } from "../../../utils/collect_url";
import { IBreedersAPI } from "../../../types/breederscollect_type";
import { get } from "../../../api/api";

// 상태 관리 사용전 임시 interface/////////////////
export interface IParams {
  forms: IForms;
  setForms: React.Dispatch<React.SetStateAction<IForms>>;
  setOnSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IForms {
  keyword: string;
  auth: boolean;
}
//////////////////////////////////////////////////

export default function BC_Main() {
  const param = useParams();
  const [onSearch, setOnSearch] = useState(false);
  const [page, setPage] = useState(Number(param.pageId));
  const [loading, setLoading] = useState(false);
  const [isBoxClicked, setIsBoxClicked] = useState(false);
  ////////////////////////////////////////////////
  const [forms, setForms] = useState<IForms>({ keyword: "", auth: false });
  const [breeders, setBreeders] = useState<IBreedersAPI>();
  ////////////////////////////////////////////////
  const getBreeders = async () => {
    try {
      setLoading(true);
      if (onSearch) {
        setPage(1);
      }
      console.log(page, forms);
      const url = BreedersCollecturl({ page, forms });
      const response = await get<IBreedersAPI>(url);

      if (response.data.status === "FAIL") {
        throw "올바르지 못한 접근 입니다.";
      }
      setBreeders(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setOnSearch(false);
    }
  };
  useEffect(() => {
    getBreeders();
  }, [forms, page]);

  const handleBoxClick = (breederId: number) => {};

  return (
    <Wrapper>
      <MainBox>
        <Title>브리더 모아보기</Title>
        <BreederForm
          forms={forms}
          setForms={setForms}
          setOnSearch={setOnSearch}
        />
        {loading ? (
          <Title>잠시만 기다려 주십시오...</Title>
        ) : (
          <>
            {breeders?.data.totalElements != 0 ? (
              <BoxContainer>
                {breeders?.data.content.map((breeder, i) => (
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                      textDecoration: "none",
                    }}
                    to={`/breeder/${breeder.id}`}
                    key={breeder.id}
                  >
                    <BreederBox
                      id={breeder.id}
                      nickname={breeder.nickname}
                      distance={breeder.distance}
                      types={breeder.types}
                      profileImagUrl={breeder.profileImagUrl}
                      verified={breeder.verified}
                    />
                  </Link>
                ))}
              </BoxContainer>
            ) : (
              <No_return>
                <div>검색조건에 맞는 브리더가 없습니다.</div>
              </No_return>
            )}
          </>
        )}
      </MainBox>
      <Pagenation
        page={page}
        totalPage={Number(breeders?.data.totalPages)}
        setPage={setPage}
        name={"breeders"}
      />
    </Wrapper>
  );
}
