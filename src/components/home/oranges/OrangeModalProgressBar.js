import {Column, Row} from 'native-base';
import React from 'react';
import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';
import {palette, theme} from '../../../styles/theme';
import {Body_long1} from '../../../styles/font';

export function OrangeModalProgressBar({walk, maxWalk}) {
  return (
    <Column w={'100%'} alignItems={'center'} my={2}>
      <Row px={15}>
        <Bar>
          <Progress.Bar
            progress={walk / maxWalk}
            width={null}
            height={4}
            borderColor={'transparent'}
            color={theme.colors.main}
            unfilledColor={palette.gray150}
          />
        </Bar>
      </Row>
      <Row mt={-2}>
        <Body_long1>{walk}</Body_long1>
        <Body_long1 color={palette.gray350}> / {maxWalk}</Body_long1>
      </Row>
    </Column>
  );
}

export default OrangeModalProgressBar;

const Bar = styled.View`
  margin: 10px 0;
  flex: 1;
`;
