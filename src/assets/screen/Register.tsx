import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {IMAGES} from '../images';
import {
  ValidateConfirmPassword,
  ValidateEmail,
  ValidateMobile,
  ValidatePassword,
  validateAddress,
  validateName,
} from './validation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const {width, height} = Dimensions.get('window');
const Register = (props: any) => {
  const [fullName, setfullName] = useState('');
  const [fullNameErr, setfullNameErr] = useState('');
  const [email, setemail] = useState('');
  const [emailErr, setemailErr] = useState('');
  const [mobile, setmobile] = useState('');
  const [mobileErr, setmobileErr] = useState('');
  const [address, setaddress] = useState('');
  const [addressErr, setaddressErr] = useState('');
  const [password, setpassword] = useState('');
  const [passErr, setpassErr] = useState('');
  const [confirmPass, setconfirmPass] = useState('');
  const [confirmPassErr, setconfirmPassErr] = useState('');
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [value, setValue] = useState(null);
  const [valueErr, setvalueErr] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [value1, setValue1] = useState(null);
  const [value1Err, setvalue1Err] = useState('');
  const [isFocus1, setIsFocus1] = useState(false);
  const data = [
    {label: 'Male', value: '1'},
    {label: 'Female', value: '2'},
    {label: 'Other', value: '3'},
  ];
  const data1 = [
    {label: 'Seller', value: '1'},
    {label: 'Buyer', value: '2'},
  ];
  const submit = () => {
    const emailErr = ValidateEmail(email);
    const passErr = ValidatePassword(password);
    const cPassErr = ValidateConfirmPassword(password, confirmPass);
    const fNameErr = validateName(fullName);
    const mobileErr = ValidateMobile(mobile);
    const addresErr = validateAddress(address);
    if (
      emailErr == '' &&
      passErr == '' &&
      cPassErr == '' &&
      fNameErr == '' &&
      mobileErr == '' &&
      addresErr == '' &&
      value != '' &&
      value1 != ''
    ) {
      console.log('hhh');
    } else {
      setemailErr(emailErr);
      setpassErr(passErr);
      setfullNameErr(fNameErr);
      setmobileErr(mobileErr);
      setconfirmPassErr(cPassErr);
      setaddressErr(addresErr);
      setvalue1Err(value1 ? '' : 'Please select your gender.');
      setvalueErr(value ? '' : 'Please select user type.');
      console.log(emailErr, passErr, cPassErr, fNameErr, mobileErr, addresErr);
    }
  };
  return (
    <SafeAreaView style={style.mainView}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={style.secondView}>
          <Text style={style.hederText}>Create an account</Text>

          <Text style={style.forgetTextstyle}>Full Name:</Text>
          <TextInput
            style={style.inputFildStyle}
            placeholder="Enter your full name."
            placeholderTextColor={'#bebebe'}
            value={fullName}
            maxLength={60}
            onChangeText={text => {
              setfullName(text);
              if (fullNameErr && validateName(text)) {
                setfullNameErr('');
              }
            }}
            onBlur={() => {
              if (fullNameErr && validateName(fullName)) {
                setfullNameErr('');
              } else {
                setfullNameErr(validateName(fullName));
              }
            }}
          />
          {fullNameErr && <Text style={style.errorSTyle}>{fullNameErr}</Text>}
          <Text style={style.forgetTextstyle}>Email Address:</Text>
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
          <Text style={style.forgetTextstyle}>Mobile Number:</Text>
          <TextInput
            style={style.inputFildStyle}
            placeholder="Enter your mobile number."
            placeholderTextColor={'#bebebe'}
            value={mobile}
            keyboardType="number-pad"
            onChangeText={text => {
              setmobile(text);
              if (mobileErr && ValidateMobile(text)) {
                setmobileErr('');
              }
            }}
            maxLength={10}
            onBlur={() => {
              if (mobileErr && ValidateMobile(mobile)) {
                setmobileErr('');
              } else {
                setmobileErr(ValidateMobile(mobile));
              }
            }}
          />
          {mobileErr && <Text style={style.errorSTyle}>{mobileErr}</Text>}
          <Text style={style.forgetTextstyle}>Password:</Text>
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
              value={password}
              onChangeText={text => {
                setpassword(text);
                if (passErr && ValidatePassword(text)) {
                  setpassErr('');
                }
              }}
              onBlur={() => {
                if (passErr && ValidatePassword(password)) {
                  setpassErr('');
                } else {
                  setpassErr(ValidatePassword(password));
                }
              }}
              maxLength={16}
            />

            {
              <TouchableOpacity onPress={() => setshow(!show)}>
                {show ? (
                  <Image source={IMAGES.Show} style={style.passIcon} />
                ) : (
                  <Image source={IMAGES.Hide} style={style.passIcon} />
                )}
              </TouchableOpacity>
            }
          </View>
          {passErr && <Text style={style.errorSTyle}>{passErr}</Text>}
          <Text style={style.forgetTextstyle}>Confirm Password:</Text>
          <View style={style.passwordView}>
            <TextInput
              style={{
                color: 'black',
                fontSize: 14,
                fontWeight: '400',
                width: width * 0.7,
                paddingVertical: '4%',
              }}
              placeholder="Enter your confirm password."
              placeholderTextColor={'#bebebe'}
              secureTextEntry={!show1}
              value={confirmPass}
              onChangeText={text => {
                setconfirmPass(text);
                if (confirmPassErr && ValidateConfirmPassword(password, text)) {
                  setconfirmPassErr('');
                }
              }}
              onBlur={() => {
                if (
                  confirmPassErr &&
                  ValidateConfirmPassword(password, confirmPass)
                ) {
                  setconfirmPassErr('');
                } else {
                  setconfirmPassErr(
                    ValidateConfirmPassword(password, confirmPass),
                  );
                }
              }}
              maxLength={16}
            />
            {
              <TouchableOpacity onPress={() => setshow1(!show1)}>
                {show1 ? (
                  <Image source={IMAGES.Show} style={style.passIcon} />
                ) : (
                  <Image source={IMAGES.Hide} style={style.passIcon} />
                )}
              </TouchableOpacity>
            }
          </View>
          {confirmPassErr && (
            <Text style={style.errorSTyle}>{confirmPassErr}</Text>
          )}
          <Text style={style.forgetTextstyle}>Gender:</Text>
          <Dropdown
            style={[style.dropdown]}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            inputSearchStyle={style.inputSearchStyle}
            iconStyle={style.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select gender.' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item: any) => {
              setValue(item.value);
              setIsFocus(false);
              setvalueErr('');
            }}
          />
          {valueErr && <Text style={style.errorSTyle}>{valueErr}</Text>}
          <Text style={style.forgetTextstyle}>User Type:</Text>
          <Dropdown
            style={[style.dropdown]}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            inputSearchStyle={style.inputSearchStyle}
            iconStyle={style.iconStyle}
            data={data1}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus1 ? 'Select user type.' : '...'}
            searchPlaceholder="Search..."
            value={value1}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChange={(item: any) => {
              setValue1(item.value);
              setIsFocus1(false);
              setvalue1Err('');
            }}
          />
          {value1Err && <Text style={style.errorSTyle}>{value1Err}</Text>}
          <Text style={style.forgetTextstyle}>Address:</Text>
          <TextInput
            style={style.inputFildStyle}
            placeholder="Enter your permenent address."
            placeholderTextColor={'#bebebe'}
            value={address}
            onChangeText={text => {
              setaddress(text);
              if (addressErr && validateAddress(text)) {
                setconfirmPassErr('');
              }
            }}
            onBlur={() => {
              if (addressErr && validateAddress(address)) {
                setaddressErr('');
              } else {
                setaddressErr(validateAddress(address));
              }
            }}
            maxLength={500}
          />
          {addressErr && <Text style={style.errorSTyle}>{addressErr}</Text>}
          <TouchableOpacity style={style.buttonSTyle} onPress={() => submit()}>
            <Text style={style.buttonText}>Register</Text>
          </TouchableOpacity>
          <View style={style.cretaeAccount}>
            <Text style={style.createAccountText}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => props?.navigation?.navigate('Login')}>
              <Text style={[style.createAccountText, {color: '#90D5FF'}]}>
                {' '}
                Sign in here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
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
    marginTop: '4%',
    marginBottom: '2%',
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
    marginBottom: '2%',
  },

  dropdown: {
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#f8f8f8',
    paddingHorizontal: '2.5%',
    paddingVertical: '5%',
    borderRadius: 7,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#bebebe',
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
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
export default Register;
