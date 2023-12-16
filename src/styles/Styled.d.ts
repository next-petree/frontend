import "styled-components";
import { ColorsType } from "./Theme";

declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.woff";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsType;
  }
}
