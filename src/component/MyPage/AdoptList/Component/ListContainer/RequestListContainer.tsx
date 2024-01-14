import { useState, useMemo, useEffect } from "react";
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
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [matchings, setMatchings] = useState<MatchingDataType[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMatchingList = async (page: number) => {
    try {
      const response = await get<ApiResponse>("/me/matchings");
      console.log("API 응답 데이터:", response.data.data.totalPages);
      setTotalPages(response.data.data.totalPages);
      setMatchings(response.data.data.content);
    } catch (error) {
      console.error("매칭 리스트 조회 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchMatchingList(currentPage);
  }, [currentPage]);

  // 브리더 가데이터!!!!!!!!!!!!!!!!!!
  const BreederheaderData: BreederColumn[] = [
    { accessor: "name", Header: "분양희망자" },
    { accessor: "breed", Header: "강아지(견종명)" },
    { accessor: "bday", Header: "출생일" },
    { accessor: "state", Header: "분양상태" },
  ];
  const BreederHeaders = useMemo(() => BreederheaderData, []);

  // 입양자 가데이터!!!!!!!!!!!!!!!!!
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
      name: matching.adopterNickname,
      breed: matching.dogTypeName,
      bday: matching.submitDate,
      state: matching.isProcessed ? "분양승인" : "분양거절",
    }));
  }, [matchings]);

  const getTableData = (
    breeder: string,
    breed: string,
    bday: string,
    state: string,
  ) => {
    return {
      breeder,
      breed,
      bday,
      state,
      breakdown: () => {
        console.log(
          `브리더: ${breeder}, 강아지(견종명): ${breed}, 출생일: ${bday}`,
        );
      },
    };
  };

  const AdopterItems = useMemo(
    () => [
      getTableData("페이커", "티원(르블랑)", "2013-01-22", "분양승인"),
      getTableData("케이틀린", "말파이트(돌덩이)", "2013-05-29", "분양거절"),
      getTableData("룰루", "아리(구미호)", "2013-05-29", "미승인"),
    ],
    [],
  );

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
          padding: "5px 10px",
          border: "1px solid #ddd",
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
            padding: "5px 10px",
            border: "1px solid #ddd",
            backgroundColor: currentPage === i ? "#e0e0e0" : "#4ec1bf",
            color: currentPage === i ? "black" : "white",
            borderRadius: "8px",
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
          padding: "5px 10px",
          border: "1px solid #fff",
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
        </>
      ) : null}
    </Container>
  );
};

export default RequestListContainer;
