import { setOnBreederSearch } from "../../../../redux/Collect1/OnBreederSearchSlice1";

import {
  selectBreeder_search,
  set_breedersearchauth,
} from "../../../../redux/Collect1/BreederSearchSlice1";
import { Circle, Toggle } from "./Styles1";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

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
