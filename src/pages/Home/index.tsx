import { HeroSection } from "./heroSection";
import { JoinSection } from "./joinSection";
import { ServiceSection } from "./serviceSection";
import { StartSection } from "./startSection";
import { TeamMissionSection } from "./teamMissionSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <TeamMissionSection />
      <JoinSection />
      <StartSection />
    </>
  );
};

export default Home;
