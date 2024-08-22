import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const ForgetPassword = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.secondView}>
        <Text style={styles.hederText}>Forgot Password</Text>
        <Text style={styles.subText}>
          Please enter your register email address.
        </Text>
        <TextInput
          style={styles.inputFildStyle}
          placeholder="Enter your register email address."
          placeholderTextColor={'#bebebe'}
        />
        <TouchableOpacity style={styles.buttonSTyle}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondView: {
    alignSelf: 'center',
    width: width * 0.9,
    marginTop: '10%',
  },
  hederText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  subText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#a0a0a0',
    marginTop: '2%',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
  buttonSTyle: {
    width: width * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: '4%',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: '10%',
    borderColor: 'black',
  },
  inputFildStyle: {
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#f8f8f8',
    width: width * 0.9,
    borderRadius: 7,
    padding: '4%',
    marginTop: '5%',
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },
});
