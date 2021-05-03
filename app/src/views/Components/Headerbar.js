import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {IconButton} from 'react-native-paper';

// create a component
const HeaderBar = (props) => {
  return (
    <View style={styles.container}>
      <IconButton icon={props.icon} size={20} onPress={props.onPress} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width * 1,
  },
});

//make this component available to the app
export default HeaderBar;
