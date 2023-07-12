import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import * as Constants from '../Utility/Constants';
const Header = ({onPressRight}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLeft}
        source={require('../../asset/Image/Logo.png')}
      />
      <Pressable onPress={onPressRight}>
      <Image
        style={styles.imageRight}
        source={require('../../asset/Image/menu.png')}
      />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomWidth: 0.3,
    borderColor: 'white',
    backgroundColor: Constants.colors.baseColor,
  },
  imageLeft: {
    height: 25,
    width: 25,
  },
  imageRight:
  {
    tintColor: 'white',
    height: 30,
    width: 30,
  },

});

export default Header;
