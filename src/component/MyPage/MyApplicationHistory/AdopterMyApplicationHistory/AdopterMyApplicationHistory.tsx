import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./AdopterMyApplicationHistoryStyle";

interface Application {
  id: number;
  breederName: string;
  name: string;
  date: string;
  petType: string;
  adoptionStatus: string;
}

const DummyData = {
  MyApplicationData: [
    {
      id: 1,
      breederName: "수현",
      name: "초코",
      date: "2023-09-01",
      petType: "말티즈",
      adoptionStatus: "분양승인",
    },
    {
      id: 2,
      breederName: "수현",
      name: "벨라",
      date: "2023-09-05",
      petType: "골든 리트리버",
      adoptionStatus: "미승인",
    },
    {
      id: 3,
      breederName: "수현",
      name: "토비",
      date: "2023-09-07",
      petType: "불독",
      adoptionStatus: "분양승인",
    },
    {
      id: 4,
      breederName: "수현",
      name: "맥스",
      date: "2023-09-10",
      petType: "래브라도 리트리버",
      adoptionStatus: "분양승인",
    },
    {
      id: 5,
      breederName: "수현",
      name: "루나",
      date: "2023-09-12",
      petType: "시베리안 허스키",
      adoptionStatus: "미승인",
    },
    {
      id: 6,
      breederName: "수현",
      name: "오스카",
      date: "2023-09-15",
      petType: "푸들",
      adoptionStatus: "분양승인",
    },
    {
      id: 7,
      breederName: "수현",
      name: "쿠키",
      date: "2023-09-18",
      petType: "요크셔 테리어",
      adoptionStatus: "분양승인",
    },
    {
      id: 8,
      breederName: "수현",
      name: "찰리",
      date: "2023-09-20",
      petType: "보스턴 테리어",
      adoptionStatus: "미승인",
    },
    {
      id: 9,
      breederName: "수현",
      name: "밍키",
      date: "2023-09-23",
      petType: "스피츠",
      adoptionStatus: "대기중",
    },
    {
      id: 10,
      breederName: "수현",
      name: "코코",
      date: "2023-09-26",
      petType: "친칠라",
      adoptionStatus: "분양승인",
    },
    {
      id: 11,
      breederName: "수현",
      name: "모모",
      date: "2023-09-29",
      petType: "샴",
      adoptionStatus: "미승인",
    },
    {
      id: 12,
      breederName: "수현",
      name: "미미",
      date: "2023-10-01",
      petType: "페르시안 카트",
      adoptionStatus: "분양승인",
    },
    {
      id: 13,
      breederName: "수현",
      name: "리오",
      date: "2023-10-04",
      petType: "사모예드",
      adoptionStatus: "분양승인",
    },
    {
      id: 14,
      breederName: "수현",
      name: "릴리",
      date: "2023-10-07",
      petType: "비숑 프리제",
      adoptionStatus: "미승인",
    },
    {
      id: 15,
      breederName: "수현",
      name: "마이로",
      date: "2023-10-10",
      petType: "시츄",
      adoptionStatus: "분양승인",
    },
    {
      id: 16,
      breederName: "수현",
      name: "사샤",
      date: "2023-10-13",
      petType: "도베르만",
      adoptionStatus: "분양승인",
    },
    {
      id: 17,
      breederName: "수현",
      name: "브루노",
      date: "2023-10-16",
      petType: "로트와일러",
      adoptionStatus: "미승인",
    },
    {
      id: 18,
      breederName: "수현",
      name: "스노우",
      date: "2023-10-19",
      petType: "말티즈",
      adoptionStatus: "분양승인",
    },
    {
      id: 19,
      breederName: "수현",
      name: "루비",
      date: "2023-10-22",
      petType: "달마시안",
      adoptionStatus: "분양승인",
    },
  ],
};

const AdopterMyApplicationHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const applicationPerPage = 3;
  const [visiblePets, setVisiblePets] = useState<Application[]>([]);

  useEffect(() => {
    const endIndex = currentPage * applicationPerPage;
    const startIndex = endIndex - applicationPerPage;
    setVisiblePets(DummyData.MyApplicationData.slice(startIndex, endIndex));
  }, [currentPage]);

  const totalPets = DummyData.MyApplicationData.length;
  const totalPages = Math.ceil(totalPets / applicationPerPage);

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  return (
    <S.Container>
      <S.InnerContainer>
        <S.MyReviewManagementLabel>분양후기관리</S.MyReviewManagementLabel>
        <S.SubLabel>
          분양 승인시, 신청내역 &gt; 상세보기를 클릭하면 브리더 정보를 확인할 수
          있습니다.
        </S.SubLabel>
        <S.Header>
          <S.HeaderContent>
            <S.MyReviewManagementSelect>
              <option defaultValue="All">전체</option>
              <option value="petType">견종</option>
              <option value="PetName">강아지이름</option>
            </S.MyReviewManagementSelect>
            <S.MyReviewMangementInput />
            <S.MyReviewManagementSearchButton>
              검색
            </S.MyReviewManagementSearchButton>
          </S.HeaderContent>
        </S.Header>
        <S.Main>
          <S.TitleArea>
            <S.TitleNumber>No</S.TitleNumber>
            <S.TitleBreederName>브리더</S.TitleBreederName>
            <S.TitleDate>제출 날짜</S.TitleDate>
            <S.TitlePetNameAndType>강아지 이름 (견종명)</S.TitlePetNameAndType>
            <S.TitleList>신청내역</S.TitleList>
            <S.TitleAdoptionStatus>분양상태</S.TitleAdoptionStatus>
          </S.TitleArea>
          {visiblePets.map((application, index) => (
            <S.Content key={application.id}>
              <S.ReviewTextArea>
                <S.Number>
                  {index + 1 + (currentPage - 1) * applicationPerPage}
                </S.Number>
                <S.BreederName>{application.breederName}</S.BreederName>
                <S.Date>{application.date}</S.Date>
                <S.PetNameAndType>
                  {application.name} ({application.petType})
                </S.PetNameAndType>
                <S.DetailButton>상세보기</S.DetailButton>
                <S.AdoptionStatus>
                  {application.adoptionStatus}
                </S.AdoptionStatus>
              </S.ReviewTextArea>
            </S.Content>
          ))}
        </S.Main>
        <S.Footer>
          <S.CenterContainer>
            <S.PageNation>
              <S.ArrowButton onClick={() => changePage(currentPage - 1)}>
                {"<"}
              </S.ArrowButton>
              {Array.from({ length: totalPages }, (_, index) => (
                <S.PageButton
                  key={index + 1}
                  onClick={() => changePage(index + 1)}
                  className={index + 1 === currentPage ? "active" : ""}
                >
                  {index + 1}
                </S.PageButton>
              ))}
              <S.ArrowButton onClick={() => changePage(currentPage + 1)}>
                {">"}
              </S.ArrowButton>
            </S.PageNation>
          </S.CenterContainer>
        </S.Footer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default AdopterMyApplicationHistory;
