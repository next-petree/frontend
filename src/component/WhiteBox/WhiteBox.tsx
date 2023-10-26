import { IWBProps } from "../../types";
import { Wrapper } from "./styles";

const WhiteBox = (props: IWBProps) => {
  return (
    <Wrapper
      customwidth={props.width}
      customheight={props.height}
      customtop={props.top}
    >
      {props.children}
    </Wrapper>
  );
};

export default WhiteBox;
