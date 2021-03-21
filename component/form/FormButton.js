import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import Colors from '../../constants/Colors';

const { width, height } = Dimensions.get('screen');

function FormButton({ title, modeValue, ...rest }) {
  return (
    <Button
      style={styles.button}
      contentStyle={styles.buttonContainer}
      mode={modeValue}
      dark={true}
      // color={Colors.primary}
      {...rest}
    >
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10
  },
  buttonContainer: {
    width: width / 2,
    height: height / 15
  }
});

export default FormButton;

/*
react-native-paper
Button

modeValue
  text
  outlined
  contained

dark: true
  contained 모드일 때만 적용: 글씨 색깔 light 하게

color: 
  contained 모드: 배경색깔
  나머지 모드: 글씨색깔
*/
