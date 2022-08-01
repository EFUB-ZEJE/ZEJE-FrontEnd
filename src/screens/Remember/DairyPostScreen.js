import React, {useState} from 'react';
import {
  ScreenContainer,
  ScreenHeader,
  WriteEditor,
  DateEditor,
  ImageEditor,
} from '../../components';

const _hangleComplete = () => {
  console.log('일기 작성 완료');
};

export default function DairyPostScreen({navigation}) {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [date, setDate] = useState(new Date());
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="일기 작성하기"
        canGoBack={true}
        rightIcon="Complete"
        handlePress={_hangleComplete}
      />
      <ScreenContainer>
        <DateEditor date={date} onChangeDate={setDate} />
        <WriteEditor
          title={title}
          body={body}
          onChangeBody={setBody}
          onChangeTitle={setTitle}
        />
        <ImageEditor />
      </ScreenContainer>
    </>
  );
}
