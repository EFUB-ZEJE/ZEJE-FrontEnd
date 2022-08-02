// 베껴온 거라 수정 필요
import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  PanResponder,
} from 'react-native';

//focus : 모달 이외의 영역을 블러 처리할 건지 결정
const BottomSheet = ({modalVisible, setModalVisible, children, focus}) => {
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          closeModal();
        } else {
          resetBottomSheet.start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (modalVisible) {
      resetBottomSheet.start();
    }
  }, [modalVisible, resetBottomSheet]);

  const closeModal = () => {
    closeBottomSheet.start(() => {
      setModalVisible(false);
    });
  };

  return (
    <Modal
      visible={modalVisible}
      animationType={'fade'}
      transparent
      statusBarTranslucent>
      <View style={styles(focus).overlay}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles().background} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            ...styles().bottomSheetContainer,
            transform: [{translateY: translateY}],
          }}
          {...panResponders.panHandlers}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = focus =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: focus ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
    },
    background: {
      flex: 1,
    },
    bottomSheetContainer: {
      backgroundColor: 'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 20,
    },
  });

export default BottomSheet;
