import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {Constants} from 'expo';
import NavigationBar from 'react-native-navbar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.navigationbar}
          title={titleConfig}
        />
        <Text>Hi!!</Text>
      </View>
    );
  }
}

const width = Dimensions.get('window').width;
const titleConfig = {
  title: 'Twitter news',
  tintColor: '#FFF'
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  navigationbar: {
    width: width,
    marginTop: Constants.statusBarHeight,
    alignSelf: 'stretch',
    backgroundColor: '#54acef',
    justifyContent: 'center',
  }
});