import React, {useState} from 'react';
import {
  ScreenContainer,
  ScreenHeader,
  WriteEditor,
  DateEditor,
  ImageEditor,
} from '../../components';
import {RememberService} from '../../services/RememberService';

export default function AddMemoryScreen({route, navigation}) {
  const {diaryId} = route.params;
  const [title, setTitle] = useState();
  const _handleTitleChange = text => {
    setTitle(text);
  };
  const [body, setBody] = useState();
  const _handleBodyChange = text => {
    setBody(text);
  };
  const [date, setDate] = useState(new Date());

  const _handleComplete = () => {
    RememberService.addMemory(diaryId, title, body)
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
          onChangeBody={_handleBodyChange}
          onChangeTitle={_handleTitleChange}
        />
        <ImageEditor />
      </ScreenContainer>
    </>
  );
}
