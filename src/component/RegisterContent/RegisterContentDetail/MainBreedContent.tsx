import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  setSearchKeyword,
  setSearchResults,
  setSelectedBreeds,
} from "../../../redux/Register/CheckMainBreedSlice";
import { get } from "../../../api/api";
import {
  MainBreedArea,
  MainBreedTextArea,
  MianBreedText,
  MainBreedInputArea,
  MainBreedInput,
  MainBreedSearchButton,
  DogTypeResult,
  DogType,
  BreedList,
  Breed,
} from "./RegisterContentDetailStyle";
import Swal from "sweetalert2";
import alertList from "../../../utils/Swal1";

interface DogType {
  id: number;
  name: string;
  imgUrl: string;
}

interface DogTypeSearchResponse {
  status: "SUCCESS" | "FAIL";
  data: DogType[];
}

const MainBreedContent = () => {
  const dispatch = useDispatch();
  const searchKeyword = useSelector(
    (state: RootState) => state.mainbreed.searchKeyword,
  );
  const searchResults = useSelector(
    (state: RootState) => state.mainbreed.searchResults,
  );
  const selectedBreeds = useSelector(
    (state: RootState) => state.mainbreed.selectedBreeds,
  );

  const handleSearchKeywordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(setSearchKeyword(e.target.value));
  };

  const handleSearchDog = async () => {
    if (selectedBreeds.length >= 3) {
      Swal.fire(alertList.infoMessage("견종은 최대 3개까지 추가 가능합니다."));
      return;
    }

    if (!searchKeyword) {
      Swal.fire(alertList.infoMessage("견종 이름을 입력해주세요."));
      return;
    }

    try {
      const response = await get<DogTypeSearchResponse>("/dog-type/search", {
        params: { keyword: searchKeyword },
      });

      if (response.data.status === "SUCCESS") {
        dispatch(setSearchResults(response.data.data));
      } else {
        Swal.fire(
          alertList.errorMessage("검색 결과를 가져오는 데 실패했습니다."),
        );
      }
    } catch (error) {
      Swal.fire(alertList.errorMessage("검색 중 오류가 발생했습니다."));
    }
  };

  const handleBreedClick = (dogType: DogType) => {
    const isAlreadySelected = selectedBreeds.some(
      breed => breed.id === dogType.id,
    );

    if (!isAlreadySelected && selectedBreeds.length < 3) {
      dispatch(setSelectedBreeds([...selectedBreeds, dogType]));
      dispatch(setSearchResults([]));
    } else if (isAlreadySelected) {
      Swal.fire(alertList.infoMessage("이미 선택된 견종입니다."));
    }
  };

  const DogTypeList = () => {
    return (
      <DogTypeResult>
        {searchResults.map(dogType => (
          <DogType key={dogType.id} onClick={() => handleBreedClick(dogType)}>
            {dogType.name}
          </DogType>
        ))}
      </DogTypeResult>
    );
  };

  const handleBreedRemove = (id: number) => {
    const updatedBreeds = selectedBreeds.filter(breed => breed.id !== id);
    dispatch(setSelectedBreeds(updatedBreeds));
  };

  const SelectedBreedsList = () => {
    return (
      <BreedList>
        {selectedBreeds.map(breed => (
          <Breed key={breed.id} onClick={() => handleBreedRemove(breed.id)}>
            {breed.name}
          </Breed>
        ))}
      </BreedList>
    );
  };

  return (
    <MainBreedArea>
      <MainBreedTextArea>
        <MianBreedText>주력견종</MianBreedText>
      </MainBreedTextArea>
      <MainBreedInputArea>
        <MainBreedInput
          type="text"
          placeholder="원하시는 견종을 입력해 주세요."
          value={searchKeyword}
          onChange={handleSearchKeywordChange}
        />
        <MainBreedSearchButton onClick={handleSearchDog}>
          검색
        </MainBreedSearchButton>
      </MainBreedInputArea>
      <DogTypeList />
      <SelectedBreedsList />
    </MainBreedArea>
  );
};

export default MainBreedContent;
