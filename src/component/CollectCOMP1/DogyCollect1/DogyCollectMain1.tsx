import { useEffect, useState } from "react";
import DogyBox from "./DogyBox1";
import Pagenation from "../Pagenation1";
import SearchFilter from "./DogySearchFilter1/DogySearchFilter1";
import DetailModal from "../../DetailModal/DetailModal";
import {
  BoxContainer,
  MainBox,
  No_return,
  SearchBtn,
  Title,
  Wrapper,
  BoxWrapper,
} from "../StylesCollect1/CollectMainStyled1";
import { useParams } from "react-router-dom";
import { DogsCollecturl, DogsTypeSearchurl } from "../../../utils/CollectUrl1";
import { IDogsAPI } from "../../../types/DogsCollectTypes1";
import { get } from "../../../api/api";
import { selectDog_searchfilter } from "../../../redux/Collect1/DogSearchfilterSlice1";
import {
  selectOnDogSearchSlice,
  setOnDogSearch,
} from "../../../redux/Collect1/OnDogSearchSlice1";
import {
  selectOnUseDogfilterSlice,
  setOnUseDogfilter,
} from "../../../redux/Collect1/OnUseDogfilterSlice1";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

export default function DogyCollect_main() {
  const param = useParams();
  const dispath = useAppDispatch();

  const [page, setPage] = useState(Number(param.pageId));
  const [loading, setLoading] = useState(false);
  const [dogs, setdogs] = useState<IDogsAPI>();
  /////////////////////////용현님 코드////////////////////////
  const [dogBoxClicked, setDogBoxClicked] = useState(false);
  const [selectedId, setSelectedId] = useState<number>();
  ///////////////////////////////////////////////////////////
  const category = useAppSelector(selectDog_searchfilter);
  const onSearch = useAppSelector(selectOnDogSearchSlice);
  const onUseFilter = useAppSelector(selectOnUseDogfilterSlice);

  const getDogs = async () => {
    try {
      setLoading(true);
      if (onUseFilter.onUseDogfilter) {
        setPage(1);
      }
      console.log(page);
      const url = DogsCollecturl({ page, category });
      const response = await get<IDogsAPI>(url);
      if (response.data.status === "FAIL") {
        throw "올바르지 못한 접근 입니다.";
      }
      setdogs(response.data);
    } catch (e) {
    } finally {
      setLoading(false);
      dispath(setOnUseDogfilter(false));
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
    <>
    {!loading && <Wrapper>
      <MainBox>
        <Title>강아지 모아보기</Title>
        <SearchBtn onClick={() => dispath(setOnDogSearch(true))}>
          검색 필터
        </SearchBtn>
            {dogs?.data.totalElements != 0 ? (
              <BoxContainer>
                {dogs?.data.content.map(box => (
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
      </MainBox>
      <Pagenation
        page={page}
        totalPage={Number(dogs?.data.totalPages)}
        setPage={setPage}
        name={"dogys"}
      />
      {onSearch.onDogSearch ? <SearchFilter /> : null}
      {dogBoxClicked && (
        <DetailModal
          customTop="21%"
          customLeft="26%"
          dogId={selectedId}
          onClick={() => setDogBoxClicked(false)}
        />
      )}
    </Wrapper>}
    </>
  );
}
