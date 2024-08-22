import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
const HaderComponent = (props: any) => {
  return (
    <View style={style.mainView}>
      <TouchableOpacity onPress={props?.navigate}>
        <AntDesign name="left" size={20} color={'#fff'} />
      </TouchableOpacity>
      <Text style={style.hederText}>{props?.title}</Text>
      <Text></Text>
    </View>
  );
};
const style = StyleSheet.create({
  mainView: {
    width: width,
    backgroundColor: '#1F75FE',
    paddingHorizontal: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '5%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  hederText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
export default HaderComponent;
