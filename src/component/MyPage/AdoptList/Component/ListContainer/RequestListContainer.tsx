import { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSearchResultSlice } from "../../../../../redux/SearchResult/SearchResultSlice";
import { selectSuccessResultSlice } from "../../../../../redux/SuccessResult/SuccessResultSlice";
import { styled } from "styled-components";
import { get } from "../../../../../api/api";
import { TitleWrap, Title, SubTitle, PageNationWrap } from "./RequestListStyle";
import BreederTableComp from "../TableComponent/BreederTable/BreederTableComp";
import AdopterTableComp from "../TableComponent/AdopterTable/AdopterTableComp";
import SearchComp from "./SearchComp/SearchComp";

export const Container = styled.div`
  background-color: white;
  width: 49vw;
  height: fit-content;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  padding: 4vw 3vw 2.5vw;
  z-index: 100;
`;
type BreederColumn = {
  Header: string;
  accessor: keyof BreederdataType;
};
type BreederdataType = {
  name: string;
  breed: string;
  bday: string;
  state: string;
};
type AdopterColumn = {
  Header: string;
  accessor: keyof AdopterdataType;
};
type AdopterdataType = {
  breeder: string;
  bday: string;
  breed: string;
  state: string;
  breakdown: () => void;
};

type MatchingDataType = {
  adopterNickname: string;
  breederNickname: string;
  dogName: string;
  dogTypeName: string;
  isProcessed: boolean;
  matchingId: number;
  submitDate: string;
};

type ApiResponse = {
  data: {
    content: MatchingDataType[];
    totalPages: number;
  };
};

const RequestListContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [matchings, setMatchings] = useState<MatchingDataType[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const { select, inputValue } = useSelector(selectSearchResultSlice);
  const apiCallCount = useSelector(selectSuccessResultSlice);

  const fetchMatchingList = async (page: number) => {
    let url = `/me/matchings?page=${page - 1}`;

    if (select !== "전체") {
      const searchType = select === "견종" ? "type" : "name";
      url += `&searchType=${searchType}&keyword=${inputValue}`;
    }

    try {
      const response = await get<ApiResponse>(url);
      setTotalPages(response.data.data.totalPages);
      setMatchings(response.data.data.content);
    } catch (error) {
      console.error("매칭 리스트 조회 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchMatchingList(currentPage);
  }, [currentPage, select, inputValue, apiCallCount]);

  const BreederheaderData: BreederColumn[] = [
    { accessor: "name", Header: "분양희망자" },
    { accessor: "breed", Header: "강아지(견종명)" },
    { accessor: "bday", Header: "출생일" },
    { accessor: "state", Header: "분양상태" },
  ];
  const BreederHeaders = useMemo(() => BreederheaderData, []);

  const AdopterheaderData: AdopterColumn[] = [
    { accessor: "breeder", Header: "브리더" },
    { accessor: "breed", Header: "강아지(견종명)" },
    { accessor: "bday", Header: "출생일" },
    { accessor: "state", Header: "분양상태" },
    { accessor: "breakdown", Header: "신청내역" },
  ];
  const AdopterHeaders = useMemo(() => AdopterheaderData, []);

  const BreederItems = useMemo(() => {
    return matchings.map(matching => ({
      id: matching.matchingId,
      name: matching.adopterNickname,
      breed: matching.dogTypeName,
      bday: matching.submitDate,
      state: matching.isProcessed ? "분양승인" : "분양거절",
    }));
  }, [matchings]);

  const AdopterItems = useMemo(() => {
    return matchings.map(matching => ({
      id: matching.matchingId,
      breeder: matching.breederNickname,
      breed: matching.dogTypeName,
      bday: matching.submitDate,
      state: matching.isProcessed ? "분양승인" : "분양거절",
      breakdown: () => {
        console.log(
          `브리더: ${matching.breederNickname}, 강아지(견종명): ${matching.dogTypeName}, 출생일: ${matching.submitDate}`,
        );
      },
    }));
  }, [matchings]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(
      <button
        key="prev"
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        style={{
          margin: "0 5px",
          padding: "8px 13px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: currentPage === 1 ? "#e0e0e0" : "#f0f0f0",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
      >
        {"<"}
      </button>,
    );

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={currentPage === i}
          style={{
            margin: "0 5px",
            padding: "8px 13px",
            border: "none",
            backgroundColor: currentPage === i ? "#4ec1bf" : "#f0f0f0",
            color: currentPage === i ? "white" : "black",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {i}
        </button>,
      );
    }

    pageNumbers.push(
      <button
        key="next"
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        style={{
          margin: "0 5px",
          padding: "8px 13px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: currentPage === totalPages ? "#e0e0e0" : "#f0f0f0",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
      >
        {">"}
      </button>,
    );

    return pageNumbers;
  };

  return (
    <Container>
      {location.pathname === "/mypage/adoptlist/breeder" ? (
        <>
          <TitleWrap>
            <Title>분양신청내역</Title>
            <SubTitle>분양 승인 시, 분양희망자의 연락처가 공개됩니다.</SubTitle>
          </TitleWrap>
          <SearchComp />
          <BreederTableComp
            columns={BreederHeaders}
            data={BreederItems}
          ></BreederTableComp>
          <PageNationWrap>
            {totalPages > 0 && renderPageNumbers()}
          </PageNationWrap>
        </>
      ) : location.pathname === "/mypage/adoptlist/adopter" ? (
        <>
          <TitleWrap>
            <Title>분양신청내역</Title>
            <SubTitle>
              분양 승인시, 신청내역 &gt; 상세보기를 클릭하면
              <span>브리더 정보</span>를 확인할 수 있습니다.
            </SubTitle>
          </TitleWrap>
          <SearchComp />
          <AdopterTableComp columns={AdopterHeaders} data={AdopterItems} />
          <PageNationWrap>
            {totalPages > 0 && renderPageNumbers()}
          </PageNationWrap>
        </>
      ) : null}
    </Container>
  );
};

export default RequestListContainer;
