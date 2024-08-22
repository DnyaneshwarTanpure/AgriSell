import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ImageBase,
  Image,
} from 'react-native';
import {IMAGES} from '../images';
import {ValidateEmail, ValidatePassword} from './validation';
const {width, height} = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
const Login = (props: any) => {
  const [show, setshow] = useState(false);
  const [email, setemail] = useState('');
  const [emailErr, setemailErr] = useState('');
  const [password, setpassword] = useState('');
  const [passwordErr, setpasswordErr] = useState('');
  const submit = () => {
    const emailErr = ValidateEmail(email);
    const passErr = ValidatePassword(password);
    if (emailErr == '' && passErr == '') {
      console.log('hhh');
    } else {
      setemailErr(emailErr);
      setpasswordErr(passErr);
      console.log(emailErr, passErr);
    }
  };
  return (
    <SafeAreaView style={style.mainView}>
      <View style={style.secondView}>
        <Text style={style.hederText}>Login</Text>
        <Text
          style={[
            style.hederText,
            {
              fontSize: 16,
              fontWeight: '400',
              marginVertical: '2%',
              color: '#a0a0a0',
            },
          ]}>
          Welcome to the app
        </Text>
        <TextInput
          style={style.inputFildStyle}
          placeholder="Enter your email address."
          placeholderTextColor={'#bebebe'}
          value={email?.toLowerCase()}
          onChangeText={text => {
            setemail(text);
            if (emailErr && ValidateEmail(text)) {
              setemailErr('');
            }
          }}
          maxLength={256}
          onBlur={() => {
            if (emailErr && ValidateEmail(email)) {
              setemailErr('');
            } else {
              setemailErr(ValidateEmail(email));
            }
          }}
        />
        {emailErr && <Text style={style.errorSTyle}>{emailErr}</Text>}

        <View style={style.passwordView}>
          <TextInput
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
              width: width * 0.7,
              paddingVertical: '4%',
            }}
            placeholder="Enter your password."
            placeholderTextColor={'#bebebe'}
            secureTextEntry={!show}
            onChangeText={text => {
              setpassword(text);
              if (passwordErr && ValidatePassword(text)) {
                setpasswordErr('');
              }
            }}
            onBlur={() => {
              if (passwordErr && ValidatePassword(password)) {
                setpasswordErr('');
              } else {
                setpasswordErr(ValidatePassword(password));
              }
            }}
            maxLength={16}
          />
          {
            <TouchableOpacity onPress={() => setshow(!show)}>
              {show ? (
                <Entypo name="eye" size={20} />
              ) : (
                <Entypo name="eye-with-line" size={20} />
              )}
            </TouchableOpacity>
          }
        </View>
        {passwordErr && <Text style={style.errorSTyle}>{passwordErr}</Text>}
        <TouchableOpacity
          style={{width: width * 0.45, alignSelf: 'flex-end'}}
          onPress={() => props?.navigation?.navigate('ForgetPassword')}>
          <Text style={style.forgetTextstyle}>Forgot your Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonSTyle} onPress={() => submit()}>
          <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={style.cretaeAccount}>
          <Text style={style.createAccountText}>Dont have account?</Text>
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate('Register')}>
            <Text style={[style.createAccountText, {color: '#90D5FF'}]}>
              {' '}
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondView: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: '10%',
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
  hederText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
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
  forgetTextstyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    textAlign: 'right',
    marginTop: '3%',
  },
  createAccountText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  cretaeAccount: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '7%',
  },
  passwordView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#f8f8f8',
    width: width * 0.9,
    borderRadius: 7,
    marginTop: '5%',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  passIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  errorSTyle: {
    color: 'red',
    fontSize: 12,
    fontWeight: '300',
  },
});
export default Login;
