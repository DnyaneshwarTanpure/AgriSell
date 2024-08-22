import React from 'react';
import {View, Text, Dimensions, StyleSheet, FlatList} from 'react-native';
import HaderComponent from '../Components/HaderComponent';
const {width, height} = Dimensions.get('window');
const Notification = (props: any) => {
  const data = [
    {
      name: 'You Login succsessfuly.',
      time: '08-Aug-2024',
    },
    {
      name: 'You LogOut succsessfuly.',
      time: '08-Aug-2024',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <HaderComponent
        title={'Notification'}
        navigate={() => props?.navigation?.navigate('BottomTabBar')}
      />
      <View style={style.profileImage}>
        <FlatList
          data={data}
          renderItem={item => {
            return (
              <View style={style.flatListView}>
                <Text style={style.notificationText}>{item?.item?.name}</Text>
                <Text style={style.notificationText1}>{item?.item?.time}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Notification;
const style = StyleSheet.create({
  profileImage: {
    alignSelf: 'center',
  },
  flatListView: {
    width: width,
    backgroundColor: '#fff',
    padding: '5%',
    marginBottom: '1%',
  },
  notificationText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  notificationText1: {
    fontSize: 14,
    fontWeight: '300',
    color: 'black',
    textAlign: 'right',
  },
});
