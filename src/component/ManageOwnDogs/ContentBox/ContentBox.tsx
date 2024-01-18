import { useState, useEffect } from "react";
import { get } from "../../../api/api";

import Pagenation from "../../CollectCOMP1/Pagenation1";
import FilterBox from "../../Common/FilterBox/FilterBox";
import Button from "../../Common/Button/Button";

import * as S from "./styles";
import { Link } from "react-router-dom";

export interface IContent {
    birthDate: string;
    breederNickName: string;
    gender: string;
    id: number;
    imgUrl: string;
    isBreederVerified: boolean;
    name: string;
    status: string;
    type: string;
}

export interface IData {
    data: {
        content: IContent[];
        totalPages: number;
    };
    status: string;
}

const ContentBox = () => {
    const [dogs, setDogs] = useState<IContent[]>();
    const [page, setPage] = useState(0);
    const [category, setCategory] = useState("");
    const [result, setResult] = useState<IContent[]>();
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await get<IData>(
                `${process.env.REACT_APP_API_URL}/breeder/dogs`
            );
            console.log(res.data.data);

            return res.data.data;
        };

        fetchData()
            .then((res) => {
                setPage(res.totalPages);
                setDogs(res.content);
            })
            .catch((err) => console.log(err));
    }, []);

    const searchItems = (searchValue: string) => {
        setInputText(searchValue);
        if (searchValue !== "") {
            const filteredData = dogs?.filter((item) => {
                return Object.values(item).join("").includes(searchValue);
            });
            setResult(filteredData);
        } else {
            setResult(dogs);
        }
    };

    return (
        <S.Wrapper>
            <S.Title>보유견종 관리</S.Title>
            <S.SearchContainer>
                <FilterBox
                    content={["전체", "강아지 이름", "견종"]}
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
            <S.ListContainer>
                {inputText.length > 0
                    ? result?.map((d) => (
                          <S.DogItem key={d.id}>
                              <Link to={`/mypage/owndogs/edit/${d.id}`}>
                                  <S.DogImg src={d.imgUrl} />
                              </Link>
                              <S.DogInfoContainer>
                                  <S.DogName>{d.name}</S.DogName>
                                  <S.DogInfo>
                                      <S.DogInfoItem>
                                          견종: {d.type}
                                      </S.DogInfoItem>
                                      <S.DogInfoItem>
                                          성별: {d.name}
                                      </S.DogInfoItem>
                                      <S.DogInfoItem>
                                          출생일: {d.birthDate}
                                      </S.DogInfoItem>
                                  </S.DogInfo>
                              </S.DogInfoContainer>
                          </S.DogItem>
                      ))
                    : dogs?.map((d) => (
                          <S.DogItem key={d.id}>
                              <Link to={`/mypage/owndogs/edit/${d.id}`}>
                                  <S.DogImg src={d.imgUrl} />
                              </Link>
                              <S.DogInfoContainer>
                                  <S.DogName>{d.name}</S.DogName>
                                  <S.DogInfo>
                                      <S.DogInfoItem>
                                          견종: {d.type}
                                      </S.DogInfoItem>
                                      <S.DogInfoItem>
                                          성별: {d.name}
                                      </S.DogInfoItem>
                                      <S.DogInfoItem>
                                          출생일: {d.birthDate}
                                      </S.DogInfoItem>
                                  </S.DogInfo>
                              </S.DogInfoContainer>
                          </S.DogItem>
                      ))}
            </S.ListContainer>
            <S.PaginationContainer>
                {/* 페이지네이션 진행해주시면 됩니다. */}
                {/* 페이지네이션 진행해주시면 됩니다. */}
                {/* 페이지네이션 진행해주시면 됩니다. */}
                {/* 페이지네이션 진행해주시면 됩니다. */}
                {/* 페이지네이션 진행해주시면 됩니다. */}
                <Pagenation
                    page={1}
                    totalPage={page}
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
