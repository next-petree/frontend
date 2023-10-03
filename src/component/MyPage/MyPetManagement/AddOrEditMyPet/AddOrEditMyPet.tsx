import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./AddOrEditMyPetStyle";

interface Props {
  EditMode?: boolean;
}

const AddOrEditMyPet: React.FC<Props> = ({ EditMode = false }) => {
  const [years, setYears] = useState<number[]>([]);
  const [months, setMonths] = useState(
    Array.from({ length: 12 }, (_, i) => i + 1),
  );
  const [days, setDays] = useState(Array.from({ length: 31 }, (_, i) => i + 1));

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const startYear = 2005;
    const yearRange = Array.from(
      { length: currentYear - startYear + 1 },
      (_, i) => startYear + i,
    );
    setYears(yearRange);
  }, []);

  return (
    <>
      <S.Container>
        <S.InnerContainer>
          <S.Header>
            <S.AddMyPetLabel>보유견종 글쓰기</S.AddMyPetLabel>
            <Link to="/breeder/breed-management">
              <S.GoBackButton>
                <S.Arrow>&lt;</S.Arrow>
                이전 페이지로
              </S.GoBackButton>
            </Link>
          </S.Header>

          <S.MiddleContent>
            <S.LeftContent>
              <S.DogName>
                <S.DogNameLabel>강아지 이름</S.DogNameLabel>
                <S.DogNameInput />
              </S.DogName>
              <S.DogType>
                <S.DogTypeLabel>견종</S.DogTypeLabel>
                <S.DogTypeInput />
              </S.DogType>
            </S.LeftContent>

            <S.RightContent>
              <S.DogBirthDay>
                <S.DogBirthDayLabel>출생일</S.DogBirthDayLabel>
                <S.BirthDayInputArea>
                  <S.DogBirthYearInput as="select">
                    {years.map(year => (
                      <option key={year} value={Number(year)}>
                        {year}년
                      </option>
                    ))}
                  </S.DogBirthYearInput>
                  <S.DogBirthMonthInput as="select">
                    {months.map(month => (
                      <option key={month} value={month}>
                        {month}월
                      </option>
                    ))}
                  </S.DogBirthMonthInput>
                  <S.DogBirthDayInput as="select">
                    {days.map(day => (
                      <option key={day} value={day}>
                        {day}일
                      </option>
                    ))}
                  </S.DogBirthDayInput>
                </S.BirthDayInputArea>
              </S.DogBirthDay>

              <S.DogGender>
                <S.DogGenderLabel>성별</S.DogGenderLabel>
                <S.DogGenderInput>
                  <option value="male">수컷</option>
                  <option value="female">암컷</option>
                </S.DogGenderInput>
              </S.DogGender>

              <S.AdoptionStatus>
                <S.AdoptionStatusLabel>분양상태</S.AdoptionStatusLabel>
                {EditMode ? (
                  <S.AdoptionStatusInput as="select">
                    <option value="available">분양가능</option>
                    <option value="inProgress">분양진행중</option>
                    <option value="completed">분양완료</option>
                  </S.AdoptionStatusInput>
                ) : (
                  <S.AdoptionStatusInput value="분양가능" readOnly />
                )}
              </S.AdoptionStatus>
            </S.RightContent>
          </S.MiddleContent>

          <S.AdditionalInformation>
            <S.AdditionalInformationLabel>
              기타사항
            </S.AdditionalInformationLabel>
            <S.AdditionalInformationTextArea placeholder="견종의 특이사항에 대해 작성해주세요." />
          </S.AdditionalInformation>

          <S.ImageUpload>
            <S.ImageUploadLabel>이미지 업로드(0/4)</S.ImageUploadLabel>
            <S.ImageContent>
              <S.ImageBox />
              <S.ImageUploadButton>업로드</S.ImageUploadButton>
            </S.ImageContent>
          </S.ImageUpload>
        </S.InnerContainer>
      </S.Container>

      <S.ButtonContainer>
        {EditMode ? (
          <>
            <S.EditButton>수정</S.EditButton>
            <S.DeleteButton>삭제</S.DeleteButton>
          </>
        ) : (
          <S.SaveButton>저장</S.SaveButton>
        )}
      </S.ButtonContainer>
    </>
  );
};

export default AddOrEditMyPet;
