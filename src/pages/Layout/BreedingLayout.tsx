import Banner from "../../component/Banner/Banner";
import { IBLProps } from "../../types";
import { Wrapper } from "./styles";

const BreedingLayout = ({ height, children }: IBLProps) => {
  return (
    <Wrapper height={height}>
      <Banner />
      {children}
    </Wrapper>
  );
};

export default BreedingLayout;
