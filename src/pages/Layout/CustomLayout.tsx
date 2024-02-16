import Banner from "../../component/Banner/Banner";
import Header from "../../component/Header/Header";

import { ICLProps } from "../../types";
import { Wrapper } from "./Styles1";

const CustomLayout = ({ height, children }: ICLProps) => {
  return (
      <Wrapper height={height}>
        <Header />
        <Banner />
        {/* <Container>{children}</Container> */}
        {children}
      </Wrapper>
  );
};

export default CustomLayout;
