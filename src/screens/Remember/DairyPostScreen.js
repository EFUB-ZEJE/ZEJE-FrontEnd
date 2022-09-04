import React, {useState} from 'react';
import {
  ScreenContainer,
  ScreenHeader,
  WriteEditor,
  DateEditor,
  ImageEditor,
} from '../../components';
import {DiaryService} from '../../services/DiaryService';

export default function DairyPostScreen({navigation}) {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [date, setDate] = useState(new Date());
  const _handleComplete = () => {
    DiaryService.addMemory(diaryId, title, body)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error('일기 작성 error', err);
      });
  };
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="일기 작성하기"
        canGoBack={true}
        rightIcon="Complete"
        handlePress={_handleComplete}
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
