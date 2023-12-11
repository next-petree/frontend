import { setOnBreederSearch } from "../../../../features/collect/onBreederSearchSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  selectBreeder_search,
  set_breedersearchauth,
} from "../../../../features/collect/breeder_searchSlice";
import { Circle, Toggle } from "./styles";

export default function BreederAuthToggle() {
  const dispath = useAppDispatch();
  const searchs = useAppSelector(selectBreeder_search);
  
  const onToggle = () => {
    dispath(setOnBreederSearch(true));
    dispath(set_breedersearchauth(!searchs.auth));
  };
  return (
    <Toggle onClick={onToggle} $toggle={searchs.auth}>
      <Circle $toggle={searchs.auth} />
    </Toggle>
  );
}
