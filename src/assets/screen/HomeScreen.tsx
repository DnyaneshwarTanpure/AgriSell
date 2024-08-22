import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {IMAGES} from '../images';
import SwiperFlatList from 'react-native-swiper-flatlist';
const {width, height} = Dimensions.get('window');
const HomeScreen = () => {
  const data = [
    {
      img: IMAGES.HomeImage1,
      title: 'Agree to Sell Your Product.',
      subTitle: 'Confirm Your Product Listing and Complete the Sale Process.',
    },
    {
      img: IMAGES.HomeImage1,
      title: 'Agree to Sell Your Product.',
      subTitle: 'Confirm Your Product Listing and Complete the Sale Process.',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <View style={style.frsitView}>
        <View>
          <Text style={style.hederText}>Hello Dnyaneshwar !</Text>
          <Text style={style.subText}>Welcome</Text>
        </View>
        <View>
          <Text style={style.hederText}>Hi Dnyaneshwar</Text>
          <Text style={style.subText}>Welcome</Text>
        </View>
      </View>
      <View style={style.container}>
        <SwiperFlatList
          autoplay
          autoplayDelay={3}
          autoplayLoop
          index={2}
          showPagination
          data={data}
          paginationStyleItem={{
            marginTop: '6%',
            width: 10,
            height: 10,
            borderRadius: 5,
            gap: -15,
          }}
          renderItem={({item}) => (
            <View style={style.swapperFrist}>
              <View>
                <Image
                  source={item?.img}
                  resizeMode="cover"
                  style={style.swapperimg}></Image>
              </View>
              <View
                style={{
                  backgroundColor: '#F3E8D6',
                  width: 250,
                  height: 250,

                  justifyContent: 'center',
                }}>
                <Text style={style.text}>{item?.title}</Text>
                <Text style={style.text1}>{item?.subTitle}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  frsitView: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingVertical: '8%',
  },
  hederText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  subText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginTop: '1%',
  },
  swapperimg: {
    width: 250,
    height: 250,
  },
  text: {
    textAlign: 'left',
    width: width * 0.3,
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
  },
  text1: {
    textAlign: 'left',
    width: width * 0.3,
    fontWeight: '400',
    fontSize: 12,
    color: '#848482',
    marginTop: '1%',
  },
  container: {
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swapperFrist: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
  },
});
export default HomeScreen;
