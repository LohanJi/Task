import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../Utility/Constants';

const SideMenu = () => {
  return (
    <View style={{backgroundColor: colors.baseColor, paddingTop: 10, flex: 1}}>
      <View style={styles.childView}>
        <Image
          style={styles.imageIcon}
          source={require('../../asset/Image/home.png')}
        />
        <Text style={styles.text}>Dashboard</Text>
      </View>
      <View style={styles.childView}>
        <Image
          style={styles.imageIcon}
          source={require('../../asset/Image/people.png')}
        />

        <Text style={styles.text}>Customers</Text>
      </View>
      <View style={styles.childView}>
        <Image
          style={styles.imageIcon}
          source={require('../../asset/Image/3dcube.png')}
        />

        <Text style={styles.text}>Vendors</Text>
      </View>
      <View style={styles.childView}>
        <Image
          style={styles.imageIcon}
          source={require('../../asset/Image/shoppingbag.png')}
        />

        <Text style={styles.text}>Goods/Services</Text>
      </View>
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  text: {fontSize: 14, color: 'white', marginLeft: 10, fontWeight: '500'},
  childView: {flexDirection: 'row', marginVertical: 10, marginHorizontal: 10},
  imageIcon: {height: 18, width: 18, tintColor: 'white'},
});
