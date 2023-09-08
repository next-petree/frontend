import StartSection from 'components/main/StartSection';
import HeroSection from 'components/main/HeroSection';
import JoinSection from 'components/main/JoinSection';
import ServiceSection from 'components/main/ServiceSection';
import TeamMissionSection from 'components/main/TeamMissionSection';

const Main = () => {
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

export default Main;
