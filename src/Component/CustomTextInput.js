// import React from 'react';
// import { TextInput, StyleSheet } from 'react-native';

// const CustomTextInput = ({ placeholder, value, onChangeText }) => {
//   return (
//     <TextInput
//       style={styles.input}
//       placeholder={placeholder}
//       value={value}
//       onChangeText={onChangeText}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default CustomTextInput;
import React, { useRef, useEffect } from 'react';
import { Animated, TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ style, ...restProps }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const containerStyles = [
    styles.container,
    {
      opacity: animatedValue,
      transform: [
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0],
          }),
        },
      ],
    },
    style,
  ];

  return (
    <Animated.View style={containerStyles}>
      <TextInput style={styles.input} {...restProps} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default CustomTextInput;
