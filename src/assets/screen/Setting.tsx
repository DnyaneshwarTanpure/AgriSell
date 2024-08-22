import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {SAVE_USER_TYPE} from '../reduxConfig/UserDetailsSlice';
const {width, height} = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import LogOutModal from '../Components/LogOutModal';

const Setting = (props: any) => {
  interface MenuItem {
    name: string;
    nav?: () => void; // Optional navigation function
  }
  const dispatch = useDispatch();
  const [modalVisible, setmodalVisible] = useState(false);

  const CloseModal = () => {
    setmodalVisible(false);
  };
  const OpenModal = () => {
    setmodalVisible(true);
  };
  const data: MenuItem[] = [
    {
      name: 'Profile',
      nav: () => props?.navigation.navigate('Profile'),
    },
    {
      name: 'Notification',
      nav: () => props?.navigation.navigate('Notification'),
    },
    {
      name: 'Language',
      nav: () => props?.navigation.navigate('Language'),
    },
    {
      name: 'Logout',
      nav: () => setmodalVisible(true),
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.MainView}>
        <FlatList
          data={data}
          renderItem={item => {
            return (
              <View>
                <TouchableOpacity
                  style={styles.nextView}
                  onPress={item?.item?.nav}>
                  <Text style={styles.text}>{item?.item?.name}</Text>
                  <Entypo name="chevron-right" size={20} color={'black'} />
                </TouchableOpacity>
                <View style={styles.lineView}></View>
              </View>
            );
          }}
        />
      </View>
      <LogOutModal
        isVisible={modalVisible}
        onClose={CloseModal}
        onOpen={CloseModal}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  MainView: {
    alignSelf: 'center',
  },
  nextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    padding: '4%',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  lineView: {
    width: width,

    backgroundColor: '#C7C7C7',
    padding: 0.7,
  },
});
export default Setting;
