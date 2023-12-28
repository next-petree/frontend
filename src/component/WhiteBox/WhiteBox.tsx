import { IWBProps } from "../../types";
import { Wrapper } from "./Styles1";

const WhiteBox = (props: IWBProps) => {
  return (
    <Wrapper
      customwidth={props.width}
      customheight={props.height}
      customtop={props.top}
      customleft={props.left}
    >
      {props.children}
    </Wrapper>
  );
};

export default WhiteBox;
