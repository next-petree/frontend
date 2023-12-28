import { IMG1 } from "../../assets/images";
import petreeIconBrowm from "../../assets/images/PetreeIconBrown.png";
import petreeBrowm from "../../assets/images/PetreeBrown.png";
import { CustomBanner, Logo, LogoIcon, LogoWrapper } from "./Styles1";

const Banner = () => {
  return (
    <CustomBanner>
      <LogoWrapper>
        <LogoIcon src={petreeIconBrowm} alt="" />
        <Logo src={petreeBrowm} alt="" />
      </LogoWrapper>
      <img src={IMG1} alt="" />
    </CustomBanner>
  );
};

export default Banner;
