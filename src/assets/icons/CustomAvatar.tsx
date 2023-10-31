import styled from "styled-components";

const SvgWrapper = styled.div`
  width: 140px;
  height: 140px;
  opacity: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CustomSvg = styled.svg`
  width: 118px;
  height: 118px;
`;

interface IProps {
  isBreeder?: boolean;
  isCustomer?: boolean;
}

const CustomAvatar = ({}) => {
  return (
    <SvgWrapper>
      <CustomSvg
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="68.0625"
          cy="72.1875"
          r="59.0625"
          fill="#E6E6E6"
          stroke="#5CABAA"
          strokeWidth="3"
        />
        <circle cx="68" cy="66.625" r="19" fill="#5CABAA" />
        <mask
          id="mask0_1035_1586"
          maskUnits="userSpaceOnUse"
          x="9"
          y="13"
          width="119"
          height="119"
        >
          <circle cx="68.0625" cy="72.1875" r="59.0625" fill="white" />
        </mask>
        <g mask="url(#mask0_1035_1586)">
          <path
            d="M31.2024 124.671C31.4145 116.704 35.2889 109.145 42.0123 103.579C48.7357 98.0142 57.7853 94.876 67.2615 94.8235C76.7378 94.7711 85.9038 97.8085 92.8355 103.298C99.7672 108.788 103.926 116.303 104.438 124.266L90.2869 137.505L67.4722 139.27L46.5504 139.186L31.2024 124.671Z"
            fill="#5CABAA"
          />
        </g>
      </CustomSvg>
    </SvgWrapper>
  );
};

export default CustomAvatar;
