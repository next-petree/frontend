import { useParams } from "react-router-dom";
import BC_Main from "../component/collectCOMP/breedercollectCOMP/BC_main";

export default function BreederCollect() {
  const params = useParams();
  return (
    <BC_Main />
  );
}
