import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

export default function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title={"Go to Profile"} onPress={ () => navigation.navigate('Profile')}/>
      </View>
    );
  }