import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Profile({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text>Profile</Text>
        <Button title={"Go to Profile"} onPress={ () => navigation.push('Profile') } />
        <Button title={"Go to Home"} onPress={ () => navigation.navigate('Home') } />
        <Button title={"Go back"} onPress={ () => navigation.goBack() } />
        <Button title={"Go back to first screen in stack"} onPress={() => navigation.popToTop()} />
      </View>
    );
  }