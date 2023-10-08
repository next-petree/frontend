import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./AddOrEditMyReviewStyle";

interface Props {
  editMode?: boolean;
}

const AddOrEditMyReview: React.FC<Props> = ({ editMode = false }) => {
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
            <S.AddMyReviewLabel>분양후기 관리</S.AddMyReviewLabel>
            <Link to="/adopter/review-management">
              <S.GoBackButton>
                <S.Arrow>&lt;</S.Arrow>
                이전 페이지로
              </S.GoBackButton>
            </Link>
          </S.Header>
          <S.SubTitle>분양 후기 글쓰기</S.SubTitle>
          <S.MiddleContent>
            <S.LeftContent>
              <S.Title>
                <S.TitleLabel>제목</S.TitleLabel>
                <S.TitleInput />
              </S.Title>

              <S.DogGender>
                <S.DogGenderLabel>성별</S.DogGenderLabel>
                <S.DogGenderInput>
                  <option value="male">수컷</option>
                  <option value="female">암컷</option>
                </S.DogGenderInput>
              </S.DogGender>
            </S.LeftContent>

            <S.RightContent>
              <S.DogType>
                <S.DogTypeLabel>견종</S.DogTypeLabel>
                <S.DogTypeInput />
              </S.DogType>
              <S.DogName>
                <S.DogNameLabel>강아지 이름</S.DogNameLabel>
                <S.DogNameInput />
              </S.DogName>
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
        {editMode ? (
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

export default AddOrEditMyReview;
