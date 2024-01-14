import { useState } from "react";

import Pagenation from "../../CollectCOMP1/Pagenation1";
import FilterBox from "../../Common/FilterBox/FilterBox";
import Button from "../../Common/Button/Button";
import { IMG4 } from "../../../assets/images";
import { useGetReviewQuery } from "../../../redux/api/ReviewApiSlice1";

import * as S from "./styles";

const DATA = [
    {
        src: IMG4,
        name: "럭키",
        title: "럭키를 분양받아 너무 기쁩니다!",
        species: "포메라니안",
        sex: "수컷",
    },
    {
        src: IMG4,
        name: "럭키",
        title: "럭키를 분양받아 너무 기쁩니다!",
        species: "포메라니안",
        sex: "수컷",
    },
    {
        src: IMG4,
        name: "럭키",
        title: "럭키를 분양받아 너무 기쁩니다!",
        species: "포메라니안",
        sex: "수컷",
    },
    {
        src: IMG4,
        name: "럭키",
        title: "럭키를 분양받아 너무 기쁩니다!",
        species: "포메라니안",
        sex: "수컷",
    },
];

const ContentBox = () => {
    const [inputText, setInputText] = useState("");
    const [category, setCategory] = useState("");

    // const { data: reviews, isLoading, isError } = useGetReviewQuery();

    return (
        <S.Wrapper>
            <S.Title>분양후기 관리</S.Title>
            <S.SearchContainer>
                <FilterBox
                    content={["전체", "견종", "제목", "강아지 이름"]}
                    category={category}
                    onClick={setCategory}
                />
                <S.SearchBoxContainer>
                    <S.Input
                        placeholder="검색어를 입력해 주세요"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <Button weight={400} size={16} width={120} height={52.5}>
                        검색
                    </Button>
                </S.SearchBoxContainer>
            </S.SearchContainer>
            <S.ReviewContainer>
                {DATA.map((d, index) => (
                    <S.ReviewItem key={index}>
                        <S.ReviewDogImage src={d.src} />
                        <S.ReviewDescContainer>
                            <S.ReviewTitle>{d.title}</S.ReviewTitle>
                            <S.ReviewDesc>
                                <S.ReviewDescItem>
                                    이름: {d.name}
                                </S.ReviewDescItem>
                                <S.ReviewDescItem>
                                    견종: {d.species}
                                </S.ReviewDescItem>
                                <S.ReviewDescItem>
                                    성별: {d.sex}
                                </S.ReviewDescItem>
                            </S.ReviewDesc>
                        </S.ReviewDescContainer>
                    </S.ReviewItem>
                ))}
            </S.ReviewContainer>
            <S.PaginationContainer>
                <Pagenation
                    page={1}
                    totalPage={10}
                    setPage={() => {
                        console.log("set page");
                    }}
                    name="_"
                />
            </S.PaginationContainer>
        </S.Wrapper>
    );
};

export default ContentBox;
