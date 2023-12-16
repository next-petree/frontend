import { useParams } from "react-router-dom";
import BC_Main from "../../component/CollectCOMP/BreederCollectCOMP/BCMain";
import Header from "../../component/Header/Header";

export default function BreederCollect() {
  return (
    <>
      <Header />
      <BC_Main />
    </>
  );
}
