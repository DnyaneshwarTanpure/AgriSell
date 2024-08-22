import React, {useEffect} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import {IMAGES} from '../images';
const {width, height} = Dimensions.get('window');
import {Provider, useSelector} from 'react-redux';
import {RootState} from '../reduxConfig/Store';

const Splash = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      props?.navigation?.navigate('BottomTabBar');
    }, 3000);
  }, [props]);
  const data = useSelector((state: RootState) => state.user.userType);
  console.log(data, 'data');
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Image source={IMAGES.BackgroundImage1} style={style.imageStyle} />
    </View>
  );
};
const style = StyleSheet.create({
  imageStyle: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
});
export default Splash;
