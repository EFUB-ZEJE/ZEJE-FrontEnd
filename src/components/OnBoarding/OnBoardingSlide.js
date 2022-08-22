import PagerView from 'react-native-pager-view';
import {Animated, ImageBackground} from 'react-native';
import {useMemo, useRef} from 'react';
import React from 'react';
import {Box, Column} from 'native-base';
import {SlidingDot} from 'react-native-animated-pagination-dots';
import {palette, theme} from '../../styles/theme';
import layout from '../../styles/layout';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export default function OnBoardingSlide() {
  const screens = [
    require('../../assets/images/onboarding-1.png'),
    require('../../assets/images/onboarding-2.png'),
    require('../../assets/images/onboarding-3.png'),
    require('../../assets/images/onboarding-4.png'),
  ];
  const positionAnimatedValue = useRef(new Animated.Value(0)).current;
  const scrollOffsetAnimatedValue = useRef(new Animated.Value(0)).current;
  const inputRange = [0, screens.length];
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue,
  ).interpolate({
    inputRange,
    outputRange: [0, screens.length * layout.window.width],
  });
  const onPageScroll = useMemo(
    () =>
      Animated.event(
        [
          {
            nativeEvent: {
              offset: scrollOffsetAnimatedValue,
              position: positionAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
    [],
  );
  return (
    <Column space={1} alignItems={'center'}>
      <AnimatedPagerView
        initialPage={0}
        onPageScroll={onPageScroll}
        style={{
          minHeight: layout.window.height * 0.8,
          minWidth: layout.window.width * 0.8,
        }}>
        {screens.map((source, idx) => {
          return (
            <ImageBackground key={idx} resizeMode="contain" source={source} />
          );
        })}
      </AnimatedPagerView>

      <Box height={10}>
        <SlidingDot
          marginHorizontal={3}
          containerStyle={{bottom: 70}}
          data={screens}
          scrollX={scrollX}
          dotSize={8}
          dotStyle={{
            backgroundColor: palette.orange50,
            borderWidth: 1,
            borderColor: theme.colors.main,
          }}
          slidingIndicatorStyle={{
            backgroundColor: theme.colors.main,
          }}
        />
      </Box>
    </Column>
  );
}
