import {View, Text} from 'react-native';
import React, {useState} from 'react';
import font from '../../styles/font';
import List from './List';
import ListInput from './ListInput';

export default function CheckList() {
  const [tasks, setTasks] = useState({
    1: {id: 1, text: '잠옷바지', completed: false},
    2: {id: 2, text: '물티슈', completed: false},
    3: {id: 3, text: '양말', completed: false},
  });

  const _addTask = text => {
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

  return (
    <View>
      <ListInput _addTask={_addTask} />
      {Object.values(tasks)
        .reverse()
        .map(task => (
          <List
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            _toggleTask={_toggleTask}
          />
        ))}
    </View>
  );
}
