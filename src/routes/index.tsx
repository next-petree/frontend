import { lazy, FC } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import ChartPage from "../pages/Chart";
import CounterPage from "../pages/Counter";
import PostBoardPage from "../pages/PostBoard";

const RenderRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='chart' element={<ChartPage />}></Route>
      <Route path='counter' element={<CounterPage />}></Route>
      <Route path='postBoard' element={<PostBoardPage />}></Route>
    </Routes>
  );
};

export default RenderRouter;
