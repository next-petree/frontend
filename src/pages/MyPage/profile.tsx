import Banner from "../../component/Banner/Banner";
import Header from "../../component/Header/Header";
import MyPageLayout from "../../component/MyPage/MyPageLayout";

const Profile = () => {
  return (
    <>
      <Header />
      <Banner />
      <MyPageLayout where="Profile"/>
    </>
  );
};

export default Profile;
