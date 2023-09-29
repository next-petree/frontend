import LayoutPage from "@pages/Layout";
import { lazy, FC } from "react";
import { Routes, Route, Link, useRoutes } from "react-router-dom";

const HomePage = lazy(() => import("@pages/Home/index"));
const homeRoute = [
  {
    path: "home",
    element: <HomePage />,
  },
];

const BreederPublicProfilePage = lazy(
  () => import("@pages/PublicProfile/BreederPublicProfile/index"),
);
const BreederPublicProfileRoute = [
  {
    path: "breederpublicprofile",
    element: <BreederPublicProfilePage />,
  },
];

const AdopterPublicProfilePage = lazy(
  () => import("@pages/PublicProfile/AdopterPublicProfile/index"),
);
const AdopterPublicProfileRoute = [
  {
    path: "adopterpublicprofile",
    element: <AdopterPublicProfilePage />,
  },
];

const BreederProfileEditPage = lazy(
  () => import("@pages/MyPage/UserProfileEdit/BreederProfileEdit/index"),
);
const BreederProfileEditRoute = [
  {
    path: "breederprofileedit",
    element: <BreederProfileEditPage />,
  },
];

const RenderRouter: FC = () => {
  return useRoutes([
    {
      path: "/",
      element: <LayoutPage />,
      children: [
        ...homeRoute,
        ...BreederPublicProfileRoute,
        ...AdopterPublicProfileRoute,
        ...BreederProfileEditRoute,
        // { 404 페이지 제작시 작업할 예정
        //   path: "*",
        //   element: (
        //     <AuthenticatedComponent>
        //       <NotFoundPage />
        //     </AuthenticatedComponent>
        //   ),
        // },
      ],
    },
  ]);
};

export default RenderRouter;
