import LayoutPage from "@pages/Layout";
import { lazy, FC } from "react";
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("@pages/Home/index"));
const homeRoute = [
  {
    path: "/",
    element: <HomePage />,
  },
];

const SignUpPage = lazy(() => import("@pages/SignUp/index"));
const signUpRoute: RouteObject[] = [
  {
    path: "sign-up",
    element: <SignUpPage />,
  },
];
const LoginPage = lazy(() => import("@pages/Login/index"));
const loginRoute = [
  {
    path: "login",
    element: <LoginPage />,
  },
];
const TestPage = lazy(() => import("@pages/Test/index"));
const TestResultPage = lazy(() => import("@pages/Test/Result/index"));
const TestIntroducePage = lazy(() => import("@pages/Test/Introduce/index"));
const TestQuestionPage = lazy(() => import("@pages/Test/Question/index"));

const testRoute: RouteObject[] = [
  {
    path: "test",
    element: <TestPage />,
  },
  {
    path: "test/result",
    element: <TestResultPage />,
  },
  {
    path: "test/introduce",
    element: <TestIntroducePage />,
  },
  {
    path: "test/question",
    element: <TestQuestionPage />,
  },
];
const BreederPublicProfilePage = lazy(
  () => import("@pages/PublicProfile/BreederPublicProfile/index")
);
const BreederPublicProfileRoute = [
  {
    path: "breeder/public-profile",
    element: <BreederPublicProfilePage />,
  },
];

const AdopterPublicProfilePage = lazy(
  () => import("@pages/PublicProfile/AdopterPublicProfile/index")
);
const AdopterPublicProfileRoute = [
  {
    path: "adopter/public-profile",
    element: <AdopterPublicProfilePage />,
  },
];

const BreederProfileEditPage = lazy(
  () => import("@pages/MyPage/UserProfileEdit/BreederProfileEdit/index")
);
const BreederProfileEditRoute = [
  {
    path: "breeder/profile-edit",
    element: <BreederProfileEditPage />,
  },
];

const AdopterProfileEditPage = lazy(
  () => import("@pages/MyPage/UserProfileEdit/AdopterProfileEdit/index")
);
const AdopterProfileEditRoute = [
  {
    path: "adopter/profile-edit",
    element: <AdopterProfileEditPage />,
  },
];

const BreederProfileManagementPage = lazy(
  () =>
    import("@pages/MyPage/UserProfileManagement/BreederProfileManagement/index")
);
const BreederProfileManagementRoute = [
  {
    path: "breeder/profile-management",
    element: <BreederProfileManagementPage />,
  },
];

const AdopterProfileManagementPage = lazy(
  () =>
    import("@pages/MyPage/UserProfileManagement/AdopterProfileManagement/index")
);
const AdopterProfileManagementRoute = [
  {
    path: "Adopter/profile-management",
    element: <AdopterProfileManagementPage />,
  },
];

const BreedManagementPage = lazy(
  () => import("@pages/MyPage/BreedManagement/index")
);
const BreedManagementRoute = [
  {
    path: "breeder/breed-management",
    element: <BreedManagementPage />,
  },
];

const ReviewManagementPage = lazy(
  () => import("@pages/MyPage/ReviewManagement/index")
);
const ReviewManagementRoute = [
  {
    path: "adopter/review-management",
    element: <ReviewManagementPage />,
  },
];

const AddMyPetPage = lazy(
  () => import("@pages/MyPage/BreedManagement/AddMyPet/index")
);
const AddMyPetRoute = [
  {
    path: "breeder/breed-management/add",
    element: <AddMyPetPage />,
  },
];

const EditMyPetPage = lazy(
  () => import("@pages/MyPage/BreedManagement/EditMyPet/index")
);
const EditMyPetRoute = [
  {
    path: "breeder/breed-management/edit",
    element: <EditMyPetPage />,
  },
];

const AddMyReviewPage = lazy(
  () => import("@pages/MyPage/ReviewManagement/AddMyReview/index")
);
const AddMyReviewRoute = [
  {
    path: "adopter/review-management/add",
    element: <AddMyReviewPage />,
  },
];

const EditMyReviewPage = lazy(
  () => import("@pages/MyPage/ReviewManagement/EditMyReview/index")
);
const EditMyReviewRoute = [
  {
    path: "adopter/review-management/edit",
    element: <EditMyReviewPage />,
  },
];

const BreederApplicationHistoryPage = lazy(
  () =>
    import("@pages/MyPage/ApplicationHistoy/BreederApplicationHistory/index")
);
const BreederApplicationHistoryRoute = [
  {
    path: "breeder/application-history",
    element: <BreederApplicationHistoryPage />,
  },
];

const AdopterApplicationHistoryPage = lazy(
  () => import("@pages/MyPage/ApplicationHistoy/AdopterApplictionHistory/index")
);
const AdopterApplicationHistoryRoute = [
  {
    path: "adopter/application-history",
    element: <AdopterApplicationHistoryPage />,
  },
];

const DeleteAccountPage = lazy(
  () => import("@pages/MyPage/DeleteAccount/index")
);
const DeleteAccountRoute = [
  {
    path: "delete-account",
    element: <DeleteAccountPage />,
  },
];

const FindEmail = lazy(() => import("@pages/Auth/find/email/index"));
const FindEmailComplete = lazy(
  () => import("@pages/Auth/find/email/complete/index")
);
const FindEmailPasswrod = lazy(() => import("@pages/Auth/find/password/index"));
const FindEmailPasswrodComplete = lazy(
  () => import("@pages/Auth/find/password/complete/")
);
const FindEmailPasswordChange = lazy(
  () => import("@pages/Auth/find/password/change")
);
const FindEmailDONE = lazy(() => import("@pages/Auth/find/password/done"));
const findEmailRoute = [
  {
    path: "/auth/find-email",
    element: <FindEmail />,
  },
  {
    path: "/auth/find-email-complete",
    element: <FindEmailComplete />,
  },
  {
    path: "/auth/find-password",
    element: <FindEmailPasswrod />,
  },
  {
    path: "/auth/find-password-complete",
    element: <FindEmailPasswrodComplete />,
  },
  {
    path: "/auth/find-password-change",
    element: <FindEmailPasswordChange />,
  },
  {
    path: "/auth/find-password-done",
    element: <FindEmailDONE />,
  },
];
const RenderRouter: FC = () =>
  useRoutes([
    {
      path: "/",
      element: <LayoutPage />,
      children: [
        ...homeRoute,
        ...loginRoute,
        ...findEmailRoute,
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
        ...BreederApplicationHistoryRoute,
        ...AdopterApplicationHistoryRoute,
        ...DeleteAccountRoute,
        ...signUpRoute,
        ...testRoute,
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
export default RenderRouter;
