
import React from 'react';
import {Dimensions,} from 'react-native';


export const deviceHeight = Dimensions.get('screen').height;
export const deviceWidth = Dimensions.get('screen').width;
export const resHeight = h => {
  return (deviceHeight * h) / 100;
};
export const resWidth = w => {
  return (deviceWidth * w) / 100;
};



export const validateMobile = mobile => {
  const regex = /^[0-9][0-9]{9}$/;
  return regex.test(mobile);
};

// function for email validation
export const validateEmail = email => {
  const regex =
    /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;
  return regex.test(email);
};

export const colors = { 
  baseColor: '#00308F',


}


