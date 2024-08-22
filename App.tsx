import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {IMAGES} from './src/assets/images';
const {width, height} = Dimensions.get('window');
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/assets/screen/Splash';
import SplashWelcome from './src/assets/screen/SplashWelcome';
import Login from './src/assets/screen/Login';
import Register from './src/assets/screen/Register';
import OtpVerification from './src/assets/screen/OtpVerification';
import ForgetPassword from './src/assets/screen/ForgetPassword';
import BottomTabBar from './src/assets/screen/BottomTabBar';
import {Provider, useSelector} from 'react-redux';
import Profile from './src/assets/screen/Profile';
import Notification from './src/assets/screen/Notification';
import Language from './src/assets/screen/Language';
import {RootState, store} from './src/assets/reduxConfig/Store';
import HaderComponent from './src/assets/Components/HaderComponent';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="SplashWelcome" component={SplashWelcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="OtpVerification" component={OtpVerification} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Language" component={Language} />
          <Stack.Screen name="HaderComponent" component={HaderComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
