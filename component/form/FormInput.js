import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import Colors from '../../constants/Colors';

const { width, height } = Dimensions.get('screen');

function FormInput({ labelName, ...rest }) {
  return (
    <TextInput
      style={styles.input}
      label={labelName}
      numberOfLines={1}
      mode={'outlined'}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    width: width / 1.5,
    height: height / 15,
    backgroundColor: 'white'
  }
});

export default FormInput;
