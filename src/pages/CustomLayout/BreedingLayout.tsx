import Banner from "../../component/Banner/Banner";
import { ICLProps } from "../../types";
import { Wrapper } from "./styles";

const BreedingLayout = ({ height, children }: ICLProps) => {
  return (
    <Wrapper height={height}>
      <Banner />
      {children}
    </Wrapper>
  );
};

export default BreedingLayout;
