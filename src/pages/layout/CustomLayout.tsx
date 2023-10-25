import Banner from "../../component/Banner/Banner";
import { ICLProps } from "../../types";
import { Wrapper } from "./styles";

const CustomLayout = ({ height, children }: ICLProps) => {
  return (
    <Wrapper height={height}>
      <Banner />
      {children}
    </Wrapper>
  );
};

export default CustomLayout;
