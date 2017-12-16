import React from 'react';
import { StatusBar, View, Platform, StyleSheet} from 'react-native';

function Header(props) {
  return (
    <View style={styles.main}>
      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    backgroundColor: "#FFAB40"
  }
});


export default Header;
