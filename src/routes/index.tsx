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

const AdopterProfileEditPage = lazy(
  () => import("@pages/MyPage/UserProfileEdit/AdopterProfileEdit/index"),
);
const AdopterProfileEditRoute = [
  {
    path: "adopter/profile-edit",
    element: <AdopterProfileEditPage />,
  },
];

const BreederProfileManagementPage = lazy(
  () =>
    import(
      "@pages/MyPage/UserProfileManagement/BreederProfileManagement/index"
    ),
);
const BreederProfileManagementRoute = [
  {
    path: "breeder/profile-management",
    element: <BreederProfileManagementPage />,
  },
];

const AdopterProfileManagementPage = lazy(
  () =>
    import(
      "@pages/MyPage/UserProfileManagement/AdopterProfileManagement/index"
    ),
);
const AdopterProfileManagementRoute = [
  {
    path: "Adopter/profile-management",
    element: <AdopterProfileManagementPage />,
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

const ReviewManagementPage = lazy(
  () => import("@pages/MyPage/ReviewManagement/index"),
);
const ReviewManagementRoute = [
  {
    path: "adopter/review-management",
    element: <ReviewManagementPage />,
  },
];

const AddMyPetPage = lazy(
  () => import("@pages/MyPage/BreedManagement/AddMyPet/index"),
);
const AddMyPetRoute = [
  {
    path: "breeder/breed-management/add",
    element: <AddMyPetPage />,
  },
];

const EditMyPetPage = lazy(
  () => import("@pages/MyPage/BreedManagement/EditMyPet/index"),
);
const EditMyPetRoute = [
  {
    path: "breeder/breed-management/edit",
    element: <EditMyPetPage />,
  },
];

const AddMyReviewPage = lazy(
  () => import("@pages/MyPage/ReviewManagement/AddMyReview/index"),
);
const AddMyReviewRoute = [
  {
    path: "adopter/review-management/add",
    element: <AddMyReviewPage />,
  },
];

const EditMyReviewPage = lazy(
  () => import("@pages/MyPage/ReviewManagement/EditMyReview/index"),
);
const EditMyReviewRoute = [
  {
    path: "adopter/review-management/edit",
    element: <EditMyReviewPage />,
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
        ...AdopterProfileEditRoute,
        ...BreederProfileManagementRoute,
        ...AdopterProfileManagementRoute,
        ...BreedManagementRoute,
        ...ReviewManagementRoute,
        ...AddMyPetRoute,
        ...EditMyPetRoute,
        ...AddMyReviewRoute,
        ...EditMyReviewRoute,
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
