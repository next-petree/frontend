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
    path: "breeder/public-profile",
    element: <BreederPublicProfilePage />,
  },
];

const AdopterPublicProfilePage = lazy(
  () => import("@pages/PublicProfile/AdopterPublicProfile/index"),
);
const AdopterPublicProfileRoute = [
  {
    path: "adopter/public-profile",
    element: <AdopterPublicProfilePage />,
  },
];

const BreederProfileEditPage = lazy(
  () => import("@pages/MyPage/UserProfileEdit/BreederProfileEdit/index"),
);
const BreederProfileEditRoute = [
  {
    path: "breeder/profile-edit",
    element: <BreederProfileEditPage />,
  },
];

const BreederProfileManagementPage = lazy(
  () =>
    import("@pages/MyPage/UserProfileManagement/BreederProfileMangement/index"),
);
const BreederProfileManagementRoute = [
  {
    path: "breeder/profile-management",
    element: <BreederProfileManagementPage />,
  },
];

const BreedManagementPage = lazy(
  () => import("@pages/MyPage/BreedManagement/index"),
);
const BreedManagementRoute = [
  {
    path: "breeder/breed-management",
    element: <BreedManagementPage />,
  },
];

const AddMyPetPage = lazy(
  () => import("@pages/MyPage/BreedManagement/AddMyPetPage/index"),
);
const AddMyPetRoute = [
  {
    path: "breeder/breed-management/add",
    element: <AddMyPetPage />,
  },
];

const EditMyPetPage = lazy(
  () => import("@pages/MyPage/BreedManagement/EditMyPetPage/index"),
);
const EditMyPetRoute = [
  {
    path: "breeder/breed-management/edit",
    element: <EditMyPetPage />,
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
        ...BreederProfileManagementRoute,
        ...BreedManagementRoute,
        ...AddMyPetRoute,
        ...EditMyPetRoute,
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
