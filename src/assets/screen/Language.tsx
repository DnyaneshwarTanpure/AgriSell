import React from 'react';
import {View, Text} from 'react-native';
import HaderComponent from '../Components/HaderComponent';

const Language = (props: any) => {
  return (
    <View>
      <HaderComponent
        title={'Language'}
        navigate={() => props?.navigation?.navigate('BottomTabBar')}
      />
    </View>
  );
};

export default Language;
