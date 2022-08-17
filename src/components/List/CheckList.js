import {View, Text} from 'react-native';
import React, {useState} from 'react';
import font from '../../styles/font';
import List from './List';
export default function CheckList() {
  // task 의 id는 그때 시간으로해서 겹치지(unique) 않도록
  const [tasks, setTasks] = useState({
    1: {id: 1, text: '잠옷바지', completed: false},
    2: {id: 2, text: '물티슈', completed: false},
    3: {id: 3, text: '양말', completed: false},

    //randomNumber : {}
  });

  return (
    <View>
      <font.body.Body1>CheckList</font.body.Body1>

      {Object.values(tasks).map(task => (
        <List key={task.id} text={task.text} completed={task.completed} />
      ))}
    </View>
  );
}
