import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Shake } from "react-native-motion";

export default class index extends Component {
  state = {
    value: 0
  };
  _startAnimation = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <View >
        <View>
          <TouchableOpacity onPress={this._startAnimation}>
            <Text>Start animation 🚀</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Shake value={this.state.value} type="timing">
            <Text>{this.state.value}</Text>
          </Shake>
        </View>
      </View>
    );
  }
}