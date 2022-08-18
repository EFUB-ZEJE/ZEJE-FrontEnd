import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import font from '../../styles/font';
import List from './List';
import ListInput from './ListInput';
import styled from 'styled-components';
import {theme} from '../../styles/theme';
import {useCheckDeleteAllTasksModal} from '../../modal/recoil/useModals';
import CheckDeleteAllTasksModal from '../../modal/modals/Around/CheckDeleteAllTasksModal';

export default function CheckList() {
  const [mode, setMode] = useState('view'); // view :조회모드 , edit : 삭제모드
  const [tasks, setTasks] = useState({
    1: {id: 1, text: '잠옷바지', completed: false},
    2: {id: 2, text: '물티슈', completed: false},
    3: {id: 3, text: '양말', completed: false},
  });
  const {openModal} = useCheckDeleteAllTasksModal();

  const _addTask = text => {
    if (text == '') return;
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: {id: ID, text: text, completed: false},
    };

    setTasks({...tasks, ...newTaskObject});
  };

  const _toggleTask = id => {
    const currentTask = Object.assign({}, tasks);
    currentTask[id]['completed'] = !currentTask[id]['completed'];
    setTasks(currentTask);
  };

  const _deleteTask = id => {
    const currentTask = Object.assign({}, tasks);
    delete currentTask[id];
    setTasks(currentTask);
  };

  const _deleteAllTask = () => {
    setTasks({});
  };

  return (
    <View>
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
          <Pressable onPress={openModal}>
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
