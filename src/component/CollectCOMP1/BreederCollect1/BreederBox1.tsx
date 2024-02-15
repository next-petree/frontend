import {
  Badge,
  BoxWrapper,
  Dermyimg,
  Distance,
  Img,
  ImgBox,
  MajorDog,
  Name,
  Nameline,
} from "../StylesCollect1/CollectBoxStyled1";
import dermyAvatar from "../../../assets/svgs/DermyAvartar.svg"
import redBadge from "../../../assets/svgs/RedBadge.svg"
interface IBreederBox {
  nickname: string;
  distance: number | null;
  types: string[];
  profileImagUrl: string | null;
  verified: boolean;
}

export default function BreederBox({
  nickname,
  distance,
  types,
  profileImagUrl,
  verified,
}: IBreederBox) {
  return (
    <BoxWrapper>
      <ImgBox>
        {profileImagUrl ? (
          <Img src={profileImagUrl} alt="Breeder_image" />
        ) : (
          <Dermyimg src={dermyAvatar} alt="dermyAvatar"/>
        )}
        {verified ? (
          <Badge src={redBadge} alt="redBadge"/>
        ) : null}
      </ImgBox>
      <Nameline>
        <Name>{nickname}</Name>
        <Distance>{distance ? `(${distance}km)` : null}</Distance>
      </Nameline>

      <MajorDog>
        {`주력견종 : ${types.map((t) => " " + t)}`.length < 19
          ? `주력견종 : ${types.map((t) => " " + t)}`
          : `주력견종 : ${types.map((t) => " " + t)}`.slice(0, 19) + "..."}
      </MajorDog>
    </BoxWrapper>
  );
}
