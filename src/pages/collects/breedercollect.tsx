import { useParams } from "react-router-dom";
import BC_Main from "../../component/collectCOMP/breedercollectCOMP/BC_main";
import Header from "../../component/Header/Header";

export default function BreederCollect() {
  return (
    <>
      <Header />
      <BC_Main />
    </>
  );
}
