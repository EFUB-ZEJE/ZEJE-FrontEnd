import {View, Text} from 'react-native';
import React from 'react';
import {Svg, Path} from 'react-native-svg';
export default function GrayMarker({size}) {
  if (size == 'small') {
    return (
      <View style={{width: 40, height: 56}}>
        <Svg
          width="29"
          height="37"
          viewBox="0 0 29 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5 0C6.50906 0 0 6.4032 0 14.2642C0 16.4672 0.928274 18.8122 2.20332 21.2403C3.47837 23.6686 5.14446 26.1601 6.80254 28.417C10.1187 32.9305 13.4238 36.5297 13.4238 36.5297C13.5598 36.6778 13.7258 36.7962 13.9112 36.8772C14.0966 36.9583 14.2972 37.0001 14.5 37.0001C14.7029 37.0001 14.9034 36.9583 15.0888 36.8772C15.2742 36.7962 15.4402 36.6778 15.5762 36.5297C15.5762 36.5297 18.8813 32.9305 22.1975 28.417C23.8555 26.1601 25.5216 23.6686 26.7967 21.2403C28.0717 18.8122 29 16.4672 29 14.2642C29 6.4032 22.4909 0 14.5 0ZM26.0999 14.2641C26.0999 11.606 25.1841 9.165 23.6447 7.2288C25.1841 9.16502 26.1 11.606 26.1 14.2642C26.1 15.6065 25.397 17.6991 24.2252 19.9309C23.0534 22.1624 21.457 24.5618 19.8525 26.7454C17.4001 30.0835 15.632 32.043 14.7226 33.0509L14.7215 33.0522C14.6408 33.1415 14.567 33.2233 14.5 33.298L14.4999 33.2979C14.5672 33.2229 14.6415 33.1406 14.7225 33.0508L14.7226 33.0507C15.632 32.0428 17.4001 30.0833 19.8525 26.7453C21.4569 24.5617 23.0533 22.1623 24.2251 19.9308C25.397 17.699 26.0999 15.6064 26.0999 14.2641ZM8.84251 11.584C8.74926 11.9879 8.7 12.4075 8.7 12.8378C8.7 13.2681 8.74926 13.6878 8.84251 14.0916V14.0919C8.74922 13.6879 8.69993 13.2681 8.69993 12.8377C8.69993 12.4073 8.74922 11.9876 8.84251 11.5836V11.584ZM14.5 7.1321C13.257 7.1321 12.1011 7.52351 11.1535 8.18702H11.1533C12.1009 7.52346 13.2569 7.13203 14.4999 7.13203C15.743 7.13203 16.8989 7.52346 17.8465 8.18702H17.8465C16.8989 7.52351 15.743 7.1321 14.5 7.1321Z"
            fill="#A7A7A7"
          />
          <Path
            d="M8.92994 8.69824C8.30713 8.69824 7.80225 9.19072 7.80225 9.79823V12.6281C7.80225 14.7985 9.60603 16.558 11.8311 16.558C11.8777 16.558 11.9242 16.5572 11.9705 16.5557C11.7734 16.0139 11.6662 15.4306 11.6662 14.8229C11.6662 14.31 11.7426 13.8145 11.8849 13.3466L12.2811 12.4006C12.8465 11.3594 13.765 10.5287 14.881 10.0603C14.1423 9.22612 13.0499 8.69824 11.8311 8.69824H8.92994ZM13.5831 17.47L11.8608 19.1513C11.6723 19.3353 11.6724 19.6336 11.8611 19.8175C12.0498 20.0014 12.3556 20.0013 12.5441 19.8173L14.2663 18.1362C15.0099 18.7162 15.953 19.063 16.9791 19.063C19.3799 19.063 21.3261 17.1647 21.3261 14.8229V11.7392C21.3261 11.1005 20.7953 10.5828 20.1405 10.5828L16.9791 10.5828C14.5784 10.5828 12.6322 12.4811 12.6322 14.8229C12.6322 15.8243 12.988 16.7446 13.5831 17.47Z"
            fill="white"
          />
        </Svg>
      </View>
    );
  } else {
    //big
    return (
      <Svg
        width="43"
        height="55"
        viewBox="0 0 43 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.5 0C9.65136 0 0 9.51827 0 21.2036C0 24.4782 1.37641 27.9641 3.26699 31.5734C5.15758 35.1831 7.628 38.8866 10.0865 42.2415C15.0036 48.9507 19.9043 54.301 19.9043 54.301C20.1059 54.5211 20.3521 54.6971 20.6269 54.8175C20.9018 54.9379 21.1992 55.0002 21.5 55.0002C21.8008 55.0002 22.0982 54.9379 22.3731 54.8175C22.6479 54.6971 22.8941 54.5211 23.0957 54.301C23.0957 54.301 27.9964 48.9507 32.9135 42.2415C35.372 38.8866 37.8424 35.1831 39.733 31.5734C41.6236 27.9641 43 24.4782 43 21.2036C43 9.51827 33.3486 0 21.5 0ZM38.6999 21.2034C38.6999 17.4714 37.4884 14.0273 35.4307 11.2314C37.4884 14.0273 38.7 17.4714 38.7 21.2036C38.7 23.1988 37.6577 26.3095 35.9201 29.627C34.1826 32.9441 31.8155 36.5108 29.4365 39.7567C25.8002 44.7187 23.1785 47.6315 21.8301 49.1297C21.7099 49.2632 21.5998 49.3855 21.5 49.497L21.4999 49.4969C21.5994 49.3857 21.7091 49.2638 21.8289 49.1307L21.83 49.1295L21.83 49.1295C23.1785 47.6313 25.8001 44.7185 29.4364 39.7565C31.8154 36.5107 34.1825 32.944 35.92 29.6269C37.6576 26.3094 38.6999 23.1987 38.6999 21.2034ZM13.1113 17.2195C12.973 17.8198 12.9 18.4436 12.9 19.0832C12.9 19.7228 12.973 20.3467 13.1113 20.947V20.9474C12.973 20.3469 12.8999 19.7229 12.8999 19.0831C12.8999 18.4433 12.973 17.8194 13.1113 17.2189V17.2195ZM21.5 10.6018C19.6569 10.6018 17.943 11.1836 16.5379 12.1699H16.5377C17.9427 11.1835 19.6568 10.6017 21.4999 10.6017C23.343 10.6017 25.057 11.1835 26.4621 12.1699H26.4621C25.057 11.1836 23.3431 10.6018 21.5 10.6018Z"
          fill="#A7A7A7"
        />
        <Path
          d="M13.241 12.9307C12.3175 12.9307 11.5688 13.6627 11.5688 14.5658V18.7724C11.5688 21.9987 14.2434 24.6141 17.5427 24.6141C17.6118 24.6141 17.6807 24.6129 17.7493 24.6107C17.4572 23.8053 17.2982 22.9382 17.2982 22.0349C17.2982 21.2724 17.4114 20.5359 17.6224 19.8404L18.2099 18.4342C19.0482 16.8864 20.4102 15.6516 22.065 14.9553C20.9696 13.7153 19.3498 12.9307 17.5427 12.9307H13.241ZM20.1405 25.9698L17.5868 28.4689C17.3072 28.7425 17.3074 29.1859 17.5871 29.4593C17.8669 29.7327 18.3204 29.7326 18.5999 29.459L21.1535 26.96C22.256 27.8223 23.6544 28.3378 25.176 28.3378C28.7357 28.3378 31.6214 25.5159 31.6214 22.0349V17.4509C31.6214 16.5016 30.8344 15.732 29.8636 15.732L25.176 15.732C21.6162 15.732 18.7305 18.5539 18.7305 22.0349C18.7305 23.5234 19.2581 24.8914 20.1405 25.9698Z"
          fill="white"
        />
      </Svg>
    );
  }
}
