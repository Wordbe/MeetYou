import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');

function FormInput({labelName, ...rest}) {
  return (
    <TextInput
      style={styles.input}
      label={labelName}
      numberOfLines={1}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    width: width / 1.5,
    height: height / 15
  }
});

export default FormInput;
