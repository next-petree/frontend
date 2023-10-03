import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./MyPetManagementStyle";

interface Pet {
  id: number;
  name: string;
  petType: string;
  gender: string;
  birthday: string;
}

const DummyData = {
  MyPetData: [
    {
      id: 1,
      name: "럭키",
      petType: "시바견",
      gender: "수컷",
      birthday: "2023.05.23",
    },
    {
      id: 2,
      name: "벨라",
      petType: "골든 리트리버",
      gender: "암컷",
      birthday: "2022.08.15",
    },
    {
      id: 3,
      name: "토비",
      petType: "불독",
      gender: "암컷",
      birthday: "2021.11.02",
    },
    {
      id: 4,
      name: "맥스",
      petType: "래브라도 리트리버",
      gender: "수컷",
      birthday: "2020.03.17",
    },
    {
      id: 5,
      name: "루나",
      petType: "시베리안 허스키",
      gender: "암컷",
      birthday: "2019.09.09",
    },
    {
      id: 6,
      name: "오스카",
      petType: "푸들",
      gender: "수컷",
      birthday: "2018.07.25",
    },
    {
      id: 7,
      name: "쿠키",
      petType: "요크셔 테리어",
      gender: "암컷",
      birthday: "2017.12.10",
    },
    {
      id: 8,
      name: "찰리",
      petType: "보스턴 테리어",
      gender: "수컷",
      birthday: "2016.05.30",
    },
    {
      id: 9,
      name: "밍키",
      petType: "스피츠",
      gender: "수컷",
      birthday: "2019.05.30",
    },
    {
      id: 10,
      name: "코코",
      petType: "친칠라",
      gender: "수컷",
      birthday: "2018.04.23",
    },
    {
      id: 11,
      name: "모모",
      petType: "샴",
      gender: "암컷",
      birthday: "2017.10.11",
    },
    {
      id: 12,
      name: "미미",
      petType: "페르시안 카트",
      gender: "암컷",
      birthday: "2016.09.02",
    },
    {
      id: 13,
      name: "리오",
      petType: "사모예드",
      gender: "수컷",
      birthday: "2021.01.12",
    },
    {
      id: 14,
      name: "릴리",
      petType: "비숑 프리제",
      gender: "암컷",
      birthday: "2020.05.14",
    },
    {
      id: 15,
      name: "마이로",
      petType: "시츄",
      gender: "수컷",
      birthday: "2022.02.22",
    },
    {
      id: 16,
      name: "사샤",
      petType: "도베르만",
      gender: "암컷",
      birthday: "2019.11.27",
    },
    {
      id: 17,
      name: "브루노",
      petType: "로트와일러",
      gender: "수컷",
      birthday: "2020.07.01",
    },
    {
      id: 18,
      name: "스노우",
      petType: "말티즈",
      gender: "암컷",
      birthday: "2021.03.21",
    },
    {
      id: 19,
      name: "루비",
      petType: "달마시안",
      gender: "수컷",
      birthday: "2018.06.18",
    },
  ],
};

const MyPetManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 8;
  const [visiblePets, setVisiblePets] = useState<Pet[]>([]);

  useEffect(() => {
    const endIndex = currentPage * petsPerPage;
    const startIndex = endIndex - petsPerPage;
    setVisiblePets(DummyData.MyPetData.slice(startIndex, endIndex));
  }, [currentPage]);

  const totalPets = DummyData.MyPetData.length;
  const totalPages = Math.ceil(totalPets / petsPerPage);

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  return (
    <S.Container>
      <S.InnerContainer>
        <S.Header>
          <S.MyPetManagementLabel>보유견종관리</S.MyPetManagementLabel>
          <S.HeaderContent>
            <S.MyPetManagementSelect>
              <option value="default" selected>
                강아지를 선택해주세요
              </option>
              <option value="All">전체</option>
              <option value="PetName">강아지이름</option>
              <option value="petType">견종</option>
            </S.MyPetManagementSelect>
            <S.MyPetMangementInput />
            <S.MyPetManagementSearchButton>검색</S.MyPetManagementSearchButton>
          </S.HeaderContent>
        </S.Header>
        <S.Main>
          {visiblePets.map(pet => (
            <S.Content key={pet.id}>
              <S.PetImage />
              <S.PetName>{pet.name}</S.PetName>
              <S.PetType>견종 : {pet.petType}</S.PetType>
              <S.PetGender>성별 : {pet.gender}</S.PetGender>
              <S.PetBirthday>출생일 : {pet.birthday}</S.PetBirthday>
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
                  isCurrent={index + 1 === currentPage}
                >
                  {index + 1}
                </S.PageButton>
              ))}
              <S.ArrowButton onClick={() => changePage(currentPage + 1)}>
                {">"}
              </S.ArrowButton>
            </S.PageNation>
          </S.CenterContainer>

          <Link to="/breeder/breed-management/add">
            <S.PetAddButton>추가</S.PetAddButton>
          </Link>
        </S.Footer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default MyPetManagement;
