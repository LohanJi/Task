import {StyleSheet, Text, View, StatusBar, Image,ScrollView} from 'react-native';
import React, {useState} from 'react';
import ComponentFlatList from '../Component/ComponentFlatList';
import {data} from '../Utility/Json';
import Header from '../Component/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Constants from '../Utility/Constants';
import {DrawerActions} from '@react-navigation/native';
import ButtonCommon from '../Component/ButtonCommon';
import AddCustomerModal from '../Component/AddCustomerModal';

const Home = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [customers, setCustomers] = useState([]);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSaveCustomer = (customer) => {
    setCustomers((prevCustomers) => [...prevCustomers, customer]);
    console.log('====================================');
    console.log(customer);
    console.log('====================================');
  };


  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Constants.colors.baseColor}}>
        <StatusBar backgroundColor={Constants.colors.baseColor} />
        <Header
          onPressRight={() =>
            props?.navigation?.dispatch(DrawerActions.openDrawer())
          }
        />
        
        <ScrollView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#F5F5F5',
            marginHorizontal: 10,
            marginTop: 30,
            padding: 10,
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,

            // height: Constants.deviceHeight-110
          }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 0.5, borderColor: 'gray',}}>
              <Image style={{height: 30, width: 30}} source={require('../../asset/Image/search.png')}/>
              <Image style={{height: 25, width: 25}} source={require('../../asset/Image/people.png')}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 8}}>
              <Text style={{
    color: 'black',
    textAlignVertical: 'center',
    fontSize: 14,
    fontWeight: '500',
  }} > Customer List</Text>
              <ButtonCommon title={'Add Customer'} onPress={handleOpenModal}/>
            </View>
          <View style={{padding: 10}}>
          <Text style={{
    color: 'black',
    textAlignVertical: 'center',
    fontSize: 12,
    fontWeight: '500',
  }} > Customer Name</Text>
          <ComponentFlatList data={data} />
          </View>
        </View>
        </ScrollView>
        <AddCustomerModal visible={modalVisible} onClose={handleCloseModal} onSave={handleSaveCustomer}/>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
