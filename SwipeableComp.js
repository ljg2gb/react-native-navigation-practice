import React, { Component } from "react";
import { Animated, StyleSheet, View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default class SwipeableComp extends Component {
  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Text style={styles.text} >Archive</Text>
        {/* <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          Archive
        </Animated.Text> */}
      </RectButton>
    );
  };
  render() {
    return (
      <Swipeable
        renderLeftActions={this.renderLeftActions}>
        <Text style={styles.text}>
           "hello"
         </Text>
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
    leftAction: {
        backgroundColor: 'green',
        height: 200,
    },
    text: {
        fontSize: 30,
        color: 'red',
        height: 200,
    }
})