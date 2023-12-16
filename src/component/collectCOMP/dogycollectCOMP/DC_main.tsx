import { useEffect, useState } from "react";
import DogyBox from "./dogy_Box";
import Pagenation from "../pagenation";
import SearchFilter from "./dogy_searchfilter";
import DetailModal from "../../DetailModal/DetailModal";
import {
  BoxContainer,
  MainBox,
  No_return,
  SearchBtn,
  Title,
  Wrapper,
  BoxWrapper,
} from "../styles_collect/collect_main_styled";
import { useParams } from "react-router-dom";
import { DogsCollecturl, DogsTypeSearchurl } from "../../../utils/collect_url";
import { IDogsAPI } from "../../../types/dogscollect_types";
import { get } from "../../../api/api";

////////////////////////////////
export interface IDogyFilterParams {
  dogtype: number;
  verification: boolean;
  isAvailable: boolean;
  gender: string;
  size: string;
}
///////////////////////////////////

export default function DC_main() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));
  const [loading, setLoading] = useState(false);
  //////////////////////////////////////////////////////
  const [onSearch, setOnSearch] = useState(false);
  const [onUseFilter, setOnUseFilter] = useState(false);
  const [category, setCategory] = useState({
    dogtype: 0,
    verification: false,
    isAvailable: false,
    gender: "",
    size: "",
  });
  const [dogs, setdogs] = useState<IDogsAPI>();
  const [dogBoxClicked, setDogBoxClicked] = useState(false);
  const [selectedId, setSelectedId] = useState<number>();
  ///////////////////////////////////////////////////////////

  const getDogs = async () => {
    try {
      setLoading(true);
      if (onUseFilter) {
        setPage(1);
      }
      const url = DogsCollecturl({ page, category });
      const response = await get<IDogsAPI>(url);
      if (response.data.status === "FAIL") {
        throw "올바르지 못한 접근 입니다.";
      }
      setdogs(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setOnUseFilter(false);
    }
  };

  const handleDetailClick = (id: number) => {
    setDogBoxClicked(true);
    setSelectedId(id);
  };

  useEffect(() => {
    getDogs();
  }, [category, page]);
  return (
    <Wrapper>
      <MainBox>
        <Title>강아지 모아보기</Title>
        <SearchBtn onClick={() => setOnSearch(!onSearch)}>검색 필터</SearchBtn>
        {loading ? (
          <Title>잠시만 기다려 주십시오...</Title>
        ) : (
          <>
            {dogs?.data.totalElements != 0 ? (
              <BoxContainer>
                {dogs?.data.content.map((box) => (
                  <BoxWrapper
                    key={box.id}
                    onClick={() => handleDetailClick(box.id)}
                  >
                    <DogyBox
                      key={box.id}
                      id={box.id}
                      name={box.name}
                      type={box.type}
                      gender={box.gender}
                      status={box.status}
                      birthDate={box.birthDate}
                      imgUrl={box.imgUrl}
                      breederNickName={box.breederNickName}
                      isBreederVerified={box.isBreederVerified}
                    />
                  </BoxWrapper>
                ))}
              </BoxContainer>
            ) : (
              <No_return>
                <div>검색조건에 맞는 강아지가 없습니다.</div>
              </No_return>
            )}
          </>
        )}
      </MainBox>
      <Pagenation
        page={page}
        totalPage={Number(dogs?.data.totalPages)}
        setPage={setPage}
        name={"dogys"}
      />
      {onSearch ? (
        <SearchFilter
          setOnSearch={setOnSearch}
          category={category}
          setCategory={setCategory}
          setOnUseFilter={setOnUseFilter}
        />
      ) : null}
      {dogBoxClicked && (
        <DetailModal
          customTop="21%"
          customLeft="26%"
          dogId={selectedId}
          onClick={() => setDogBoxClicked(false)}
        />
      )}
    </Wrapper>
  );
}
