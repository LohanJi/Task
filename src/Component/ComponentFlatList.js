import React from 'react';
import { View, FlatList, Text } from 'react-native';

const ComponentFlatList = ({data}) => {
  

  const renderItem = ({ item }) => (
    <View style={{ padding: 15, backgroundColor: 'white', marginVertical: 5, borderRadius: 10}}>
      <Text style={{fontSize: 14, color: 'black', fontWeight: '800', marginBottom: 5}}>{item.branchName}</Text>
      <Text style={{fontSize: 14, color: 'gray', fontWeight: '300'}}>{item.email}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ComponentFlatList;
