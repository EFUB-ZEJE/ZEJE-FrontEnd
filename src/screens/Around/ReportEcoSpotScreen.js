import React, {useState} from 'react';
import {
  ScreenContainer,
  ScreenHeader,
  WriteEditor,
  DateEditor,
  ImageEditor,
} from '../../components';
import FilterBox from '../../components';
// import {DiaryService} from '../../services/DiaryService';
import FilterList from '../../components';
export default function ReportEcoSpotScreen({navigation}) {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [date, setDate] = useState(new Date());
  const [filterId, setFilterId] = useState(0);

  const _handleFilterChange = id => {
    setFilterId(id);
  };
  const _handleComplete = () => {};
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="친환경 스팟 제보하기"
        canGoBack={true}
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
        <FilterList>
          {filters.map(f => (
            <FilterBox
              id={f.id}
              title={f.title}
              activated={f.id === filterId}
              handlePress={_handleFilterChange}
            />
          ))}
        </FilterList>
        <ImageEditor />
      </ScreenContainer>
    </>
  );
}
const filters = [
  {id: 0, title: '전체'},
  {id: 1, title: '스포츠'},
  {id: 2, title: '문화예술'},
];
