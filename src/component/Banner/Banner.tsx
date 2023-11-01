import { IMG1 } from "../../assets/images";
<<<<<<< HEAD
import * as S from "./styles";

const Banner = () => {
  return (
    <S.CustomBanner>
      <S.IconContainer>
        <S.InnerContainer>
          <S.Svg
            width="109"
            height="108"
            viewBox="0 0 109 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2110_1924)">
              <path
                d="M20.5087 53.9949C26.7119 53.9949 31.7405 48.9663 31.7405 42.7631C31.7405 36.5599 26.7119 31.5312 20.5087 31.5312C14.3055 31.5312 9.27686 36.5599 9.27686 42.7631C9.27686 48.9663 14.3055 53.9949 20.5087 53.9949Z"
                fill="#A09185"
              />
              <path
                d="M40.727 36.0262C46.9301 36.0262 51.9588 30.9975 51.9588 24.7943C51.9588 18.5912 46.9301 13.5625 40.727 13.5625C34.5238 13.5625 29.4951 18.5912 29.4951 24.7943C29.4951 30.9975 34.5238 36.0262 40.727 36.0262Z"
                fill="#A09185"
              />
              <path
                d="M67.6825 36.0262C73.8857 36.0262 78.9144 30.9975 78.9144 24.7943C78.9144 18.5912 73.8857 13.5625 67.6825 13.5625C61.4794 13.5625 56.4507 18.5912 56.4507 24.7943C56.4507 30.9975 61.4794 36.0262 67.6825 36.0262Z"
                fill="#A09185"
              />
              <path
                d="M87.9003 53.9949C94.1035 53.9949 99.1321 48.9663 99.1321 42.7631C99.1321 36.5599 94.1035 31.5312 87.9003 31.5312C81.6971 31.5312 76.6685 36.5599 76.6685 42.7631C76.6685 48.9663 81.6971 53.9949 87.9003 53.9949Z"
                fill="#A09185"
              />
              <path
                d="M78.1957 66.854C74.287 62.2714 71.0073 58.3627 67.0537 53.7801C64.987 51.354 62.3363 48.9279 59.1914 47.8497C58.6972 47.67 58.203 47.5352 57.7088 47.4453C56.5856 47.2656 55.3726 47.2656 54.2045 47.2656C53.0364 47.2656 51.8233 47.2656 50.6552 47.4903C50.161 47.5801 49.6668 47.7149 49.1726 47.8946C46.0277 48.9729 43.4219 51.3989 41.3103 53.825C37.4016 58.4076 34.1219 62.3163 30.1683 66.8989C24.2828 72.7844 17.0495 79.2988 18.3973 88.4191C19.7002 93.0017 22.9799 97.5394 28.8654 98.8423C32.1451 99.5162 42.6132 96.8655 53.7552 96.8655H54.5639C65.7059 96.8655 76.174 99.4712 79.4537 98.8423C85.3391 97.5394 88.6189 92.9568 89.9217 88.4191C91.3145 79.2539 84.0812 72.7394 78.1957 66.854Z"
                fill="#A09185"
              />
            </g>
            <defs>
              <clipPath id="clip0_2110_1924">
                <rect
                  width="107.826"
                  height="107.826"
                  fill="white"
                  transform="translate(0.292969 0.0859375)"
                />
              </clipPath>
            </defs>
          </S.Svg>
          <S.Text>
            <svg
              width="219"
              height="72"
              viewBox="0 0 219 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M63.8071 46.5038C58.9662 46.5038 55.765 42.9903 56.3896 35.8851C57.0143 27.9211 57.0143 18.7858 56.4677 11.5245C55.765 3.7947 58.9662 0.125 63.8071 0.125C68.1015 0.125 71.3027 3.24815 71.6931 9.65061C72.0835 17.7708 72.1616 29.0142 71.6931 37.1344C71.2246 43.4587 68.1015 46.5038 63.8071 46.5038ZM33.3564 28.1553C33.2783 28.5457 33.1222 29.0142 32.966 29.4826C35.8549 30.3415 37.0261 32.7619 37.0261 36.4316C37.0261 40.726 35.5426 43.3026 31.4825 43.693C23.5185 44.6299 13.6805 44.4738 5.87265 43.3807C1.73447 42.8341 0.250977 40.4137 0.250977 36.1193C0.250977 32.2935 1.42216 29.7169 4.77955 29.0142C3.53029 24.2514 3.53029 20.6597 4.54531 15.6627C1.42216 14.8038 0.250977 12.3053 0.250977 8.71367C0.250977 4.49741 1.73447 1.92081 5.87265 1.45234C13.6805 0.515394 23.5185 0.203078 31.4825 1.14003C35.5426 1.53042 37.0261 4.10702 37.0261 8.32328C37.0261 11.8368 35.933 14.1792 33.2783 15.1161C33.3564 15.5065 33.4345 15.8188 33.5125 16.2092H39.2904C39.2123 14.8819 39.1342 13.4765 39.0561 12.1491C38.4315 4.49741 41.4766 0.983865 46.3955 0.983865C50.6899 0.983865 53.735 4.02894 54.2034 10.1972C54.6719 18.005 54.6719 27.5307 54.2034 35.3385C53.735 41.6629 50.6899 44.6299 46.3955 44.6299C41.4766 44.6299 38.2754 41.0383 38.9 34.1674C39.0561 32.1373 39.2123 30.1073 39.2904 28.1553H33.3564ZM18.131 28.3895C18.8337 28.3895 19.4584 28.3895 20.1611 28.3895C20.4734 23.7048 20.4734 20.3474 20.2392 16.2873C19.5364 16.2873 18.7557 16.3654 18.0529 16.3654C17.8187 20.4255 17.8187 23.7829 18.131 28.3895ZM35.0741 56.1075C34.8399 56.6541 35.2303 57.1225 35.7768 57.2787C39.6027 58.0595 42.7258 59.6991 42.7258 64.3058C42.7258 69.3028 35.8549 71.0986 24.065 71.0986C12.5093 71.0986 5.71649 67.8974 5.71649 61.4949C5.71649 50.8762 18.7557 46.0353 39.9931 46.0353C60.8401 46.0353 71.4589 51.657 71.4589 61.9634C71.4589 67.7412 68.1015 71.0986 58.8882 71.0986C49.1283 71.0986 45.3024 68.9124 44.9121 63.9935C44.5217 58.3718 41.0081 56.576 36.2453 55.4048C35.6988 55.3267 35.2303 55.4829 35.0741 56.1075Z"
                fill="#A09185"
              />
              <path
                d="M90.4473 46.5038C83.264 45.4888 79.1258 39.3986 79.1258 29.4046V18.2393C79.1258 9.49446 81.8586 5.04397 87.4022 4.65357C104.736 3.40431 121.366 3.40431 138.622 4.10702C141.745 4.1851 142.838 5.98091 142.838 8.63559C142.838 11.056 141.745 13.7107 138.622 13.7107H104.58C103.096 13.7107 103.096 16.5215 104.58 16.5215H137.919C141.042 16.5215 142.135 18.2393 142.135 20.8159C142.135 23.3925 141.042 24.7198 137.919 24.7979L104.58 24.9541C103.018 24.9541 103.018 28.1553 104.58 28.1553L137.997 27.9991C141.589 27.9991 143.775 31.5908 143.775 37.2124C143.775 42.6779 141.589 45.723 137.997 46.2696C120.976 48.69 105.36 48.7681 90.4473 46.5038ZM85.8406 69.9275C79.9066 69.3028 76.3931 65.8674 76.3931 59.1526C76.3931 53.6871 79.9066 49.2366 85.8406 49.8612C103.252 51.5789 119.414 51.5789 136.904 49.8612C142.916 49.2366 146.352 53.6871 146.352 59.1526C146.352 65.8674 142.916 69.3028 136.826 69.9275C119.414 71.6452 103.252 71.6452 85.8406 69.9275Z"
                fill="#A09185"
              />
              <path
                d="M207.425 71.8794C201.1 71.8794 196.806 68.2878 197.587 61.2607C199.539 44.4738 199.539 27.6087 197.665 11.5245C196.806 3.7947 201.1 0.125 207.425 0.125C212.89 0.125 216.794 3.24815 217.419 9.65061C219.136 26.5156 219.136 45.5669 217.419 62.51C216.794 68.7563 212.89 71.8794 207.425 71.8794ZM151.676 56.576C150.661 50.0954 150.427 43.3026 151.676 37.6809C152.926 31.5908 154.878 27.2964 161.748 27.2964C166.667 27.2964 172.133 27.0622 177.13 26.2814C178.301 26.1252 178.301 23.7048 177.13 23.861C172.445 24.5637 167.37 24.876 162.763 24.876C154.253 24.876 151.676 21.5967 151.676 15.2723C151.676 9.02598 155.58 5.04397 163.232 3.48239C169.556 2.31121 174.553 2.31121 180.019 3.09199C186.187 3.95086 191.418 6.13707 192.824 13.3203C193.917 19.5666 193.995 26.6718 192.824 31.9031C192.043 35.2605 189.623 36.3536 186.265 36.3536C177.364 36.4316 169.244 37.759 164.091 40.1794C162.842 40.8041 163.7 42.9903 164.95 42.5218C169.4 40.5698 176.896 38.6959 182.439 38.6959C190.95 38.6959 195.01 43.2245 195.713 51.4228C196.65 65.2427 186.109 68.8343 174.866 68.8343C161.28 68.8343 152.769 64.3839 151.676 56.576Z"
                fill="#A09185"
              />
            </svg>
          </S.Text>
        </S.InnerContainer>
      </S.IconContainer>
      <img src={IMG1} alt="" />
    </S.CustomBanner>
=======
import { CustomBanner } from "./styles";

const Banner = () => {
  return (
    <CustomBanner>
      <img src={IMG1} alt="" />
    </CustomBanner>
>>>>>>> 7bf8a408468ea528f8835e98cdc6b3a9e7ad3fb3
  );
};

export default Banner;
