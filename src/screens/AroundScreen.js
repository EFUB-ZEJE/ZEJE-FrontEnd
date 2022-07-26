import {View, Text, Button} from 'react-native';
import React from 'react';

//둘러보기
export default function AroundScreen({navigation}) {
  return (
    <View>
      <Text>AroundScreen</Text>
      <Button
        title="Activity"
        onPress={() => navigation.navigate('ActivityMain')}
      />
      <Button title="Tour" onPress={() => navigation.navigate('TourMain')} />
    </View>
  );
}
