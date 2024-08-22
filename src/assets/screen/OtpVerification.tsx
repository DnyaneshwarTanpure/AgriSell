import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const {width, height} = Dimensions.get('window');
const OtpVerification = () => {
  const [seconds, setSeconds] = useState(180);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const resend = () => {
    setSeconds(180);
    setIsActive(true);
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.secondView}>
        <Text style={styles.hederText}>OTP Verification</Text>
        <Text style={styles.subText}>
          Please enter the code we sent to your email.
        </Text>
        <OTPInputView
          style={{width: width * 0.8, height: 100, alignSelf: 'center'}}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <View style={styles.expiredView}>
          <View>
            {seconds == 0 ? (
              <Text style={styles.otpExpired}>OTP expired.</Text>
            ) : (
              <Text></Text>
            )}
          </View>
          <View>
            {seconds == 0 ? (
              <TouchableOpacity onPress={() => resend()}>
                <Text style={[styles.otpExpired, {color: 'black'}]}>
                  Resend OTP.
                </Text>
              </TouchableOpacity>
            ) : (
              <Text style={[styles.otpExpired, {color: 'black'}]}>
                {seconds}
                <Text
                  style={[styles.otpExpired, {color: 'black', fontSize: 12}]}>
                  s
                </Text>
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.buttonSTyle}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerification;
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
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 1,
    color: 'black',
    fontSize: 18,
    borderColor: 'black',
    borderRadius: 8,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
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
  expiredView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
    alignSelf: 'center',
  },
  otpExpired: {
    color: 'red',
    fontSize: 14,
    fontWeight: '500',
  },
});
