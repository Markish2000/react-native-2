import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.cajaVerde} />
      <View style={style.cajaMorada} />
      <View style={style.cajaNaranja} />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  cajaVerde: {
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    ...StyleSheet.absoluteFillObject,
  },
});
