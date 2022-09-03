import React from 'react';
import {View} from 'react-native';
import * as Progress from 'react-native-progress';
import {usePedometer} from '../../../feature/pedometer/recoil/usePedometer';
import {palette, theme} from '../../../styles/theme';

export function OrangeSmallProgressBar({maxWalk}) {
  const {stepCount: walk} = usePedometer();

  return (
    <View style={{marginTop: -5, width: '100%'}}>
      <Progress.Bar
        progress={walk / maxWalk}
        width={null}
        height={2}
        borderColor={'white'}
        borderWidth={2}
        color={theme.colors.main}
        unfilledColor={palette.gray150}
      />
    </View>
  );
}

export default OrangeSmallProgressBar;
