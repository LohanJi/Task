import React, {useRef, useEffect, useState} from 'react';
import {
  Modal,
  Animated,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import CustomTextInput from './CustomTextInput';
import ButtonCommon from './ButtonCommon';
import {colors, validateEmail, validateMobile} from '../Utility/Constants';

const CustomerModal = ({visible, onClose, onSave}) => {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [branchAddress, setBranchAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    if (
      firstName.length == 0 &&
      lastName.length == 0 &&
      branchAddress.length == 0 &&
      branchName.length == 0 &&
      email.length == 0 &&
      phone.length == 0
    ) {
      Alert.alert('Enter valid details', 'You Must Fill All Details');
    } else if (!validateEmail(email)) {
      Alert.alert('Enter valid email', 'You must enter a valid email');
    } else if (!validateMobile(phone)) {
      Alert.alert('Enter valid Phone', 'You must enter a valid phone number');
    } else {
      onSave({firstName, email, phone, lastName, branchAddress, branchName});
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setBranchAddress('');
      setBranchName('');
      onClose();
    }
  };

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <Animated.View
          style={[
            styles.modalContent,
            {
              transform: [
                {
                  translateY: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0],
                  }),
                },
              ],
            },
          ]}>
          <Text style={styles.title}>Add Customer Details</Text>
          <Text style={styles.tagLine}>
            You can add as much customer you want!
          </Text>
          <CustomTextInput
            placeholder="First Name"
            onChangeText={e => setFirstName(e)}
          />
          <CustomTextInput
            placeholder="Last Name"
            onChangeText={e => setLastName(e)}
          />
          <CustomTextInput
            placeholder="Email"
            onChangeText={e => setEmail(e)}
          />
          <CustomTextInput
            keyboardType="numeric"
            placeholder="Phone"
            onChangeText={e => setPhone(e)}
          />
          <CustomTextInput
            placeholder="Branch Name"
            onChangeText={e => setBranchName(e)}
          />
          <CustomTextInput
            placeholder="Branch Address"
            onChangeText={e => setBranchAddress(e)}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <ButtonCommon
              title="Cancel"
              onPress={onClose}
              titleStyle={{color: colors.baseColor}}
              extraButtonStyle={{
                backgroundColor: 'white',
                borderWidth: 0.5,
                borderColor: colors.baseColor,
              }}
            />

            <ButtonCommon title="  Save  " onPress={handleSave} />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    // marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  tagLine: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default CustomerModal;
