import Banner from "../../component/Banner/Banner";
import { IBLProps } from "../../types";
import { Wrapper } from "./styles";

const CustomLayout = ({ height, children }: IBLProps) => {
  return (
    <Wrapper height={height}>
      <Banner />
      {children}
    </Wrapper>
  );
};

export default CustomLayout;
