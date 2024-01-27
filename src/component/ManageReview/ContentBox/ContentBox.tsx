import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Pagenation from "../../CollectCOMP1/Pagenation1";
import FilterBox from "../../Common/FilterBox/FilterBox";
import Button from "../../Common/Button/Button";
import { get } from "../../../api/api";

import * as S from "./styles";

interface IReview {
    content: string;
    dogId: number;
    dogTypeName: string;
    gender: string;
    id: number;
    imgUrl: string;
    name: string;
    title: string;
    writeDate: string;
}

const ContentBox = () => {
    // 첫 페이지로 오실려면 "mypage/review/1" 이런 식으로 url을 연결 하셔야 합니다.
    // 되도록이면 첫 페이지가 "mypage/review/0" 이 아닌 "mypage/review/1" 이 되도록 하셔야 제가 만든 Pagenation 컴포넌트를 쓰시기 편하실 겁니다.
    const param = useParams();
    const [page, setPage] = useState(Number(param.pageId));
    const [reviews, setReviews] = useState<IReview[]>();
    const [searchResult, setSearchResult] = useState<IReview[]>();
    const [inputText, setInputText] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await get<any>(
                `${process.env.REACT_APP_API_URL}/adopter/reviews`
            );

            return res.data.data.content;
        };

        fetchData()
            .then((res) => {
                setReviews(res);
            })
            .catch((err) => console.log(err));
    }, []);
    const searchItems = (searchValue: string) => {
        setInputText(searchValue);
        if (searchValue !== "") {
            switch (category) {
                case "전체":
                    const filteredReview = reviews?.filter((item) => {
                        return Object.values(item)
                            .join("")
                            .includes(searchValue);
                    });
                    setSearchResult(filteredReview);
                    break;

                case "견종":
                    const filteredByType = reviews?.filter((review) => {
                        return review.dogTypeName.includes(searchValue);
                    });
                    setSearchResult(filteredByType);

                    break;

                case "제목":
                    const filteredByTitle = reviews?.filter((review) => {
                        return review.title.includes(searchValue);
                    });
                    setSearchResult(filteredByTitle);
                    break;

                case "강아지 이름":
                    const filteredByName = reviews?.filter((review) => {
                        return review.name.includes(searchValue);
                    });
                    setSearchResult(filteredByName);
                    break;

                default:
                    break;
            }
        }
    };

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
                        onChange={(e) => searchItems(e.target.value)}
                    />
                    <Button weight={400} size={16} width={120} height={52.5}>
                        검색
                    </Button>
                </S.SearchBoxContainer>
            </S.SearchContainer>
            {inputText?.length > 0 ? (
                <S.ReviewContainer>
                    {searchResult?.map((d, index) => (
                        <S.ReviewItem key={index}>
                            <Link to={`edit/${d.id}`}>
                                <S.ReviewDogImage src={d.imgUrl} />
                            </Link>
                            <S.ReviewDescContainer>
                                <S.ReviewTitle>{d.title}</S.ReviewTitle>
                                <S.ReviewDesc>
                                    <S.ReviewDescItem>
                                        이름: {d.name}
                                    </S.ReviewDescItem>
                                    <S.ReviewDescItem>
                                        견종: {d.dogTypeName}
                                    </S.ReviewDescItem>
                                    <S.ReviewDescItem>
                                        성별: {d.gender}
                                    </S.ReviewDescItem>
                                </S.ReviewDesc>
                            </S.ReviewDescContainer>
                        </S.ReviewItem>
                    ))}
                </S.ReviewContainer>
            ) : (
                <S.ReviewContainer>
                    {reviews?.map((d, index) => (
                        <S.ReviewItem key={index}>
                            <Link to={`edit/${d.id}`}>
                                <S.ReviewDogImage src={d.imgUrl} />
                            </Link>
                            <S.ReviewDescContainer>
                                <S.ReviewTitle>{d.title}</S.ReviewTitle>
                                <S.ReviewDesc>
                                    <S.ReviewDescItem>
                                        이름: {d.name}
                                    </S.ReviewDescItem>
                                    <S.ReviewDescItem>
                                        견종: {d.dogTypeName}
                                    </S.ReviewDescItem>
                                    <S.ReviewDescItem>
                                        성별: {d.gender}
                                    </S.ReviewDescItem>
                                </S.ReviewDesc>
                            </S.ReviewDescContainer>
                        </S.ReviewItem>
                    ))}
                </S.ReviewContainer>
            )}
            {/* 일단은 totalPage를 10으로 설정 해두었습니다. */}
            
            <S.PaginationContainer>
                <Pagenation
                    page={page}
                    totalPage={10}
                    setPage={setPage}
                    name={"mypage/review"}
                />
            </S.PaginationContainer>
        </S.Wrapper>
    );
};

export default ContentBox;
