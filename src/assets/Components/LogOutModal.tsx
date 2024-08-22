import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
const LogOutModal = ({isVisible, onClose, onOpen}) => {
  return (
    <View style={styles.MaineView}>
      <Modal visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={onClose}>
              <AntDesign name="close" size={20} color={'black'} />
            </TouchableOpacity>
            <Text style={[styles.modalText, {marginTop: '5%'}]}>Logout</Text>
            <Text style={styles.modalText1}>
              Are you sure you want to logout?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width * 0.8,
                marginTop: '10%',
                marginBottom: '3%',
              }}>
              <TouchableOpacity
                onPress={onClose}
                style={[
                  styles.button,
                  {
                    borderColor: 'black',
                    borderWidth: 1,
                    backgroundColor: '#fff',
                  },
                ]}>
                <Text style={[styles.modalText1, {paddingVertical: '4%'}]}>
                  No
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={onOpen}>
                <Text
                  style={[
                    styles.modalText1,
                    {paddingVertical: '4%', color: 'white'},
                  ]}>
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  MaineView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width * 0.9,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  modalText1: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
    marginVertical: 5,
  },
  button: {
    backgroundColor: 'red',
    width: width * 0.35,
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default LogOutModal;
