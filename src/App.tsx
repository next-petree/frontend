import { Routes, Route } from "react-router-dom";
import BreederCollect from "./pages/breedercollect";
import DogyCollect from "./pages/dogycollect";

function App() {
  return (
    <>
      <Routes>
        <Route path="/breeders/:pageId" element={<BreederCollect/>}/>
        <Route path="/dogys/:pageId" element={<DogyCollect/>}/>
        {/* 예시: <Route path='/example' element={<ExampleComponent />} /> */}
        {/* 위와 같은 방식으로 필요한 라우트를 추가하실 수 있습니다. */}
      </Routes>
    </>
  );
}
export default App;
