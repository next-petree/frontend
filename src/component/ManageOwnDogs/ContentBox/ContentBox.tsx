import { useState, useEffect } from "react";
import { get } from "../../../api/api";

import Pagenation from "../../CollectCOMP1/Pagenation1";
import FilterBox from "../../Common/FilterBox/FilterBox";
import Button from "../../Common/Button/Button";

import * as S from "./styles";
import { Link, useParams } from "react-router-dom";

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
  // 첫 페이지로 오실려면 "mypage/owndogs/1" 이런 식으로 url을 연결 하셔야 합니다.
  // 되도록이면 첫 페이지가 "mypage/owndogs/0" 이 아닌 "mypage/owndogs/1" 이 되도록 하셔야 제가 만든 Pagenation 컴포넌트를 쓰시기 편하실 겁니다.
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));
  const [dogs, setDogs] = useState<IContent[]>();
  const [category, setCategory] = useState("");
  const [result, setResult] = useState<IContent[]>();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await get<IData>(
        `${process.env.REACT_APP_API_URL}breeder/dogs`,
      );

      return res.data.data;
    };

    fetchData()
      .then(res => {
        setPage(res.totalPages);
        setDogs(res.content);
      })
      .catch(err => console.log(err));
  }, []);

  const searchItems = (searchValue: string) => {
    setInputText(searchValue);
    if (searchValue !== "") {
      const filteredData = dogs?.filter(item => {
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
            onChange={e => searchItems(e.target.value)}
          />
          <Button weight={400} size={16} width={120} height={52.5}>
            검색
          </Button>
        </S.SearchBoxContainer>
      </S.SearchContainer>
      <S.ListContainer>
        {inputText.length > 0
          ? result?.map(d => (
              <S.DogItem key={d.id}>
                <Link to={`/mypage/owndogs/edit/${d.id}`}>
                  <S.DogImg src={d.imgUrl} />
                </Link>
                <S.DogInfoContainer>
                  <S.DogName>{d.name}</S.DogName>
                  <S.DogInfo>
                    <S.DogInfoItem>견종: {d.type}</S.DogInfoItem>
                    <S.DogInfoItem>성별: {d.name}</S.DogInfoItem>
                    <S.DogInfoItem>출생일: {d.birthDate}</S.DogInfoItem>
                  </S.DogInfo>
                </S.DogInfoContainer>
              </S.DogItem>
            ))
          : dogs?.map(d => (
              <S.DogItem key={d.id}>
                <Link to={`/mypage/owndogs/edit/${d.id}`}>
                  <S.DogImg src={d.imgUrl} />
                </Link>
                <S.DogInfoContainer>
                  <S.DogName>{d.name}</S.DogName>
                  <S.DogInfo>
                    <S.DogInfoItem>견종: {d.type}</S.DogInfoItem>
                    <S.DogInfoItem>성별: {d.name}</S.DogInfoItem>
                    <S.DogInfoItem>출생일: {d.birthDate}</S.DogInfoItem>
                  </S.DogInfo>
                </S.DogInfoContainer>
              </S.DogItem>
            ))}
      </S.ListContainer>
      <S.PaginationContainer>
        {/* 현재 api에 데이터가 없는 것 같아서 totalPage는 일단 10으로 세팅 해두었습니다 */}
        {/* 상단에 param.pageId 에 따라서 데이터가 잘 표시 되도록 하셔야 될 겁니다. */}
        <Pagenation
          page={page}
          totalPage={10}
          setPage={setPage}
          name={"mypage/owndogs"}
        />
      </S.PaginationContainer>
    </S.Wrapper>
  );
};

export default ContentBox;
