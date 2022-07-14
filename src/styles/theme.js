const palette = {
  black: '# 000000',
  orange: '#FFA317', // Zeje 메인 색상
  orange50: '#FFF8ED', // 리뷰 뒷 배경 옅은 오렌지
  orange100: '#FEEED5', // 방문한 포인트 스팟 뒷배경
  orange400: '#FFBA50', // 방문한 포인트 스팟 글씨
  green100: '#E6F6ED', // 배너 뒷배경
  green300: '9ADAB6', // 배너 화살표
  gray600: '221E1A', // 서체 색상
};

export const theme = {
  colors: {
    main: palette.orange,
    font: palette.gray600,
    black: palette.black,
    small_banner_bg: palette.green100,
    small_banner: palette.green300,
  },

  textVariants: {
    h1: {
      fontFamily: 'Pretendard',
      fontSize: 24,
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Pretendard',
      fontSize: 16,
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Pretendard',
      fontSize: 14,
      fontWeight: 700,
    },
  },
};
