import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Pressable} from 'react-native';
import {palette} from '../../../styles/theme';
import font from '../../../styles/font.js';
import SizedBox from '../../common/SizedBox';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import DateTimePickerModale from 'react-native-modal-datetime-picker';

export default function DateEditor({date, onChangeDate}) {
  // const date = new Date();
  const [mode, setMode] = useState('date');
  const [visible, setVisible] = useState(false);
  const onPressDate = () => {
    console.log('onPressDate');
    setMode('date');
    setVisible(true);
  };
  const onPressTime = () => {
    console.log('onPressTime');
    setMode('time');
    setVisible(true);
  };
  const onConfirm = selectedDate => {
    console.log(selectedDate);
    setVisible(false);
    onChangeDate(selectedDate);
  };
  const onCancel = () => {
    setVisible(false);
  };

  return (
    <StyledRoot>
      <font.title.Subhead2 color={palette.gray600}>날짜</font.title.Subhead2>
      <SizedBox height={8} />
      <Container>
        <Pressable onPress={onPressDate}>
          <font.body.Body1 color={palette.gray600}>
            {' '}
            {format(date, 'PPP', {locale: ko})}
          </font.body.Body1>
        </Pressable>

        <SizedBox width={8} />
        <Pressable onPress={onPressTime}>
          <font.body.Body1 color={palette.gray600}>
            {format(date, 'p', {locale: ko})}
          </font.body.Body1>
        </Pressable>
      </Container>
      <SizedBox height={22} />
      <DateTimePickerModale
        isVisible={visible}
        mode={mode}
        onConfirm={onConfirm}
        onCancel={onCancel}
        date={date}
      />
    </StyledRoot>
  );
}

const StyledRoot = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
`;
