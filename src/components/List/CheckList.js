import {View, Text, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import font from '../../styles/font';
import List from './List';
import ListInput from './ListInput';
import styled from 'styled-components';
import {theme} from '../../styles/theme';
import {useCheckDeleteAllTasksModal} from '../../modal/recoil/useModals';
import CheckDeleteAllTasksModal from '../../modal/modals/List/CheckDeleteAllTasksModal';
import {Subhead_long2} from '../../styles/font';
import {saveData, getData} from '../../data/LocalStorage';
import Spinner from 'react-native-loading-spinner-overlay';
import {tasksState} from '../../data/GlobalVariable';
import {useRecoilState} from 'recoil';

import ExceedMaximumListModal from '../../modal/modals/List/ExceedMaximumListModal';

import {useExceedMaximumListModal} from '../../modal/recoil/useModals';
/*
{
    1: {id: 1, text: '잠옷바지', completed: false},
    2: {id: 2, text: '물티슈', completed: false},
    3: {id: 3, text: '양말', completed: false},
  }
  */

const NUM_OF_MAXIMUM_TASK = 30;
export default function CheckList({route}) {
  const [mode, setMode] = useState('view'); // view :조회모드 , edit : 삭제모드
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [isLoading, setIsLoading] = useState(true);

  const {openModal: openExceedMaximumListModal} = useExceedMaximumListModal();
  const {openModal: openCheckDeleteAllTasksModal} =
    useCheckDeleteAllTasksModal();
  const _addTask = text => {
    if (text == '') return;

    var size = Object.keys(tasks).length;

    if (size > NUM_OF_MAXIMUM_TASK) {
      openExceedMaximumListModal();
      return;
    }
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: {id: ID, text: text, completed: false},
    };

    storeData({...tasks, ...newTaskObject});
  };

  const storeData = async tasks => {
    await saveData('tasks', tasks);
    if (typeof tasks == 'object') setTasks(tasks);
    else {
      console.log('아닙니다');
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    const loadedData = await getData('tasks');

    if (typeof loadedData == 'object') {
      setTasks(loadedData);
    } else {
      console.log('아닙니다');
    }

    setIsLoading(false);
  };

  const _toggleTask = id => {
    const currentTask = JSON.parse(JSON.stringify(tasks)); // 깊은 복사 수행
    currentTask[id]['completed'] = !currentTask[id]['completed'];

    storeData(currentTask);
  };

  const _deleteTask = id => {
    const currentTask = JSON.parse(JSON.stringify(tasks));
    delete currentTask[id];
    storeData(currentTask);
  };

  const _deleteAllTask = () => {
    storeData({});
  };

  useEffect(() => {
    loadData();
    console.log('useEffect');
  }, []);

  return (
    <View>
      <Spinner
        cancelable={true}
        color={theme.colors.main}
        visible={isLoading}
        textContent="Loading..."
      />

      {mode == 'view' ? (
        <TextContainer1>
          <Pressable
            onPress={() => setMode(prev => (prev == 'view' ? 'edit' : 'view'))}>
            <font.body.Caption color={theme.colors.main}>
              편집
            </font.body.Caption>
          </Pressable>
        </TextContainer1>
      ) : (
        <TextContainer2>
          <Pressable onPress={openCheckDeleteAllTasksModal}>
            <font.body.Caption color={theme.colors.main}>
              전체삭제
            </font.body.Caption>
          </Pressable>
          <Pressable
            onPress={() => setMode(prev => (prev == 'view' ? 'edit' : 'view'))}>
            <font.body.Caption color={theme.colors.main}>
              완료
            </font.body.Caption>
          </Pressable>
        </TextContainer2>
      )}
      <ListInput _addTask={_addTask} />
      {Object.values(tasks)
        .reverse()
        .map(task => (
          <List
            key={task.id}
            mode={mode}
            id={task.id}
            text={task.text}
            completed={task.completed}
            _toggleTask={_toggleTask}
            _deleteTask={_deleteTask}
          />
        ))}
      <CheckDeleteAllTasksModal _deleteAllTask={_deleteAllTask} />
      <ExceedMaximumListModal />
    </View>
  );
}

const TextContainer1 = styled.Pressable`
  display: flex;
  align-items: flex-end;
`;

const TextContainer2 = styled.Pressable.attrs(({onPress}) => {
  onPress: onPress;
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
