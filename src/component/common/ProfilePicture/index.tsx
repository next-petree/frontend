import React, {
  HTMLAttributes,
  ImgHTMLAttributes,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import * as S from "./style";
import ProfileSvg from "@assets/images/profile_small.svg";
import { PROFILE_IMAGE_URL } from "@assets/constant/string";
import { Badge } from "@component/Common/Badge";
interface Props extends HTMLAttributes<HTMLDivElement> {
  verified?: boolean;
  mine?: boolean;
  src?: ImgHTMLAttributes<HTMLImageElement>["src"];
}
export default function ProfilePic({ verified, mine, ...props }: Props) {
  const [url, setUrl] = useState("");

  const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = ProfileSvg;
  };

  useEffect(() => {
    setUrl(
      mine ? localStorage.getItem(PROFILE_IMAGE_URL) ?? "" : props.src ?? ""
    );
  }, []);

  return (
    <S.Container>
      <S.Image
        src={url}
        onError={handleError}
        alt="프로필"
        $verified={verified !== undefined ? verified : false}
        {...props}
      />
      {verified && <Badge />}
    </S.Container>
  );
}
