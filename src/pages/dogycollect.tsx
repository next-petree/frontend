
import { useParams } from "react-router-dom";
import DC_main from "../component/collectCOMP/dogycollectCOMP/DC_main";



export default function DogyCollect() {
  const params = useParams();
 
  return (
    <DC_main param={params.dogy_collect_Id}/>
  );
}
