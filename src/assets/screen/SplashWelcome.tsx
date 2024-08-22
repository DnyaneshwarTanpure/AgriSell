import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {IMAGES} from '../images';
const {width, height} = Dimensions.get('window');
const SplashWelcome = (props: any) => {
  return (
    <ImageBackground
      source={IMAGES.BackgroundImage}
      style={{
        width: width,
        height: height,
      }}>
      <View style={style.mainView}>
        <View style={style.secondView}>
          <Image source={IMAGES.Logo1} style={style.logoSTyle} />
          <TouchableOpacity
            style={[style.buttonSTyle, {marginTop: height * 0.05}]}
            onPress={() => props?.navigation?.navigate('Login')}>
            <Text style={style.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.buttonSTyle1}
            onPress={() => props?.navigation?.navigate('Register')}>
            <Text style={[style.buttonText]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const style = StyleSheet.create({
  mainView: {
    width: width * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  secondView: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: height * 0.53,
    alignSelf: 'center',
    alignItems: 'center',
  },
  hederText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonSTyle: {
    width: width * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: '5%',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: '4%',
    borderColor: 'black',
  },
  buttonSTyle1: {
    width: width * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: '5%',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: '4%',
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
  logoSTyle: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 40,
  },
});
export default SplashWelcome;
