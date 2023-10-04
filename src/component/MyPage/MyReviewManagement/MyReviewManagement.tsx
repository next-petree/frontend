import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./MyReviewManagementStyle";

interface Pet {
  id: number;
  title: string;
  name: string;
  petType: string;
  gender: string;
}

const DummyData = {
  MyPetData: [
    {
      id: 1,
      title: "럭키와의 아름다운 추억",
      name: "럭키",
      petType: "시바견",
      gender: "수컷",
    },
    {
      id: 2,
      title: "벨라와 함께한 여름 휴가",
      name: "벨라",
      petType: "골든 리트리버",
      gender: "암컷",
    },
    {
      id: 3,
      title: "토비와의 첫 산책",
      name: "토비",
      petType: "불독",
      gender: "암컷",
    },
    {
      id: 4,
      title: "맥스와의 겨울 여행",
      name: "맥스",
      petType: "래브라도 리트리버",
      gender: "수컷",
    },
    {
      id: 5,
      title: "루나와 함께 본 눈의 경치",
      name: "루나",
      petType: "시베리안 허스키",
      gender: "암컷",
    },
    {
      id: 6,
      title: "오스카의 생일 파티",
      name: "오스카",
      petType: "푸들",
      gender: "수컷",
    },
    {
      id: 7,
      title: "쿠키와의 일상",
      name: "쿠키",
      petType: "요크셔 테리어",
      gender: "암컷",
    },
    {
      id: 8,
      title: "찰리의 모험",
      name: "찰리",
      petType: "보스턴 테리어",
      gender: "수컷",
    },
    {
      id: 9,
      title: "밍키와의 특별한 날",
      name: "밍키",
      petType: "스피츠",
      gender: "수컷",
    },
    {
      id: 10,
      title: "코코와 함께한 여행",
      name: "코코",
      petType: "친칠라",
      gender: "수컷",
    },
    {
      id: 11,
      title: "모모의 아름다운 순간들",
      name: "모모",
      petType: "샴",
      gender: "암컷",
    },
    {
      id: 12,
      title: "미미와의 행복한 시간",
      name: "미미",
      petType: "페르시안 카트",
      gender: "암컷",
    },
    {
      id: 13,
      title: "리오와의 즐거운 하루",
      name: "리오",
      petType: "사모예드",
      gender: "수컷",
    },
    {
      id: 14,
      title: "릴리와 함께한 휴가",
      name: "릴리",
      petType: "비숑 프리제",
      gender: "암컷",
    },
    {
      id: 15,
      title: "마이로의 첫 경험",
      name: "마이로",
      petType: "시츄",
      gender: "수컷",
    },
    {
      id: 16,
      title: "사샤와의 추억 여행",
      name: "사샤",
      petType: "도베르만",
      gender: "암컷",
    },
    {
      id: 17,
      title: "브루노의 도전",
      name: "브루노",
      petType: "로트와일러",
      gender: "수컷",
    },
    {
      id: 18,
      title: "스노우와의 눈꽃 놀이",
      name: "스노우",
      petType: "말티즈",
      gender: "암컷",
    },
    {
      id: 19,
      title: "루비와의 소중한 순간",
      name: "루비",
      petType: "달마시안",
      gender: "수컷",
    },
  ],
};

const MyReviewManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;
  const [visiblePets, setVisiblePets] = useState<Pet[]>([]);

  useEffect(() => {
    const endIndex = currentPage * reviewsPerPage;
    const startIndex = endIndex - reviewsPerPage;
    setVisiblePets(DummyData.MyPetData.slice(startIndex, endIndex));
  }, [currentPage]);

  const totalPets = DummyData.MyPetData.length;
  const totalPages = Math.ceil(totalPets / reviewsPerPage);

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  return (
    <S.Container>
      <S.InnerContainer>
        <S.Header>
          <S.MyReviewManagementLabel>분양후기관리</S.MyReviewManagementLabel>
          <S.HeaderContent>
            <S.MyReviewManagementSelect>
              <option defaultValue="All">전체</option>
              <option value="petType">견종</option>
              <option value="Title">제목</option>
              <option value="PetName">강아지이름</option>
            </S.MyReviewManagementSelect>
            <S.MyReviewMangementInput />
            <S.MyReviewManagementSearchButton>
              검색
            </S.MyReviewManagementSearchButton>
          </S.HeaderContent>
        </S.Header>
        <S.Main>
          {visiblePets.map(pet => (
            <S.Content key={pet.id}>
              <S.PetImage />
              <S.ReviewTextArea>
                <S.ReviewTitle>{pet.title}</S.ReviewTitle>
                <S.PetName>{pet.name}</S.PetName>
                <S.PetType>견종 : {pet.petType}</S.PetType>
                <S.PetGender>성별 : {pet.gender}</S.PetGender>
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

          <Link to="/adopter/review-management/add">
            <S.PetAddButton>추가</S.PetAddButton>
          </Link>
        </S.Footer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default MyReviewManagement;
