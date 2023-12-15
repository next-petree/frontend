import {
  BoxContainer,
  MainBox,
  No_return,
  Title,
  Wrapper,
} from "../styles_collect/collect_main_styled";
import Pagenation from "../pagenation";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BreedersCollecturl } from "../../../utils/collect_url";
import { IBreedersAPI } from "../../../types/breederscollect_type";
import { get } from "../../../api/api";
import BreederForm from "./breeder_form/breeder_form";
import BreederBox from "./breeder_Box";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectOnBreederSearchSlice,
  setOnBreederSearch,
} from "../../../../redux/collect/onBreederSearchSlice";
import { selectBreeder_search } from "../../../../redux/collect/breeder_searchSlice";

export default function BreederCollect_Main() {
  const param = useParams();
  const dispath = useAppDispatch();

  const [page, setPage] = useState(Number(param.pageId));
  const [loading, setLoading] = useState(false);
  const [breeders, setBreeders] = useState<IBreedersAPI>();

  const searchs = useAppSelector(selectBreeder_search);
  const onSearch = useAppSelector(selectOnBreederSearchSlice);

  const getBreeders = async () => {
    try {
      setLoading(true);
      if (onSearch.onBreederSearch) {
        console.log("on here");
        setPage(1);
      }
      console.log(page, searchs);
      const url = BreedersCollecturl({ page, searchs });
      const response = await get<IBreedersAPI>(url);

      if (response.data.status === "FAIL") {
        throw "올바르지 못한 접근 입니다.";
      }
      setBreeders(response.data);
    } catch (e) {
    } finally {
      setLoading(false);
      dispath(setOnBreederSearch(false));
    }
  };
  useEffect(() => {
    getBreeders();
  }, [searchs, page]);

  return (
    <Wrapper>
      <MainBox>
        <Title>브리더 모아보기</Title>
        <BreederForm />
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
