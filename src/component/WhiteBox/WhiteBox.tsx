import { IWBProps } from "../../types";
import { Wrapper } from "./styles";

const WhiteBox = (props: IWBProps) => {
  return (
    <Wrapper
      customWidth={props.width}
      customHeight={props.height}
      customTop={props.top}
    >
      {props.children}
    </Wrapper>
  );
};

export default WhiteBox;
