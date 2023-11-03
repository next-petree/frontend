import Banner from "../../component/Banner/Banner";
import Header from "../../component/Header/Header";

import { ICLProps } from "../../types";
import { Wrapper } from "./styles";

const CustomLayout = ({ height, children }: ICLProps) => {
  return (
    <>
      <Wrapper height={height}>
        <Header />
        <Banner />
        {children}
      </Wrapper>
    </>
  );
};

export default CustomLayout;
