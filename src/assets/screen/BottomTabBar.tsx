import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Setting from './Setting';
import Seller from './Seller';
import Buyer from './Buyer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Tab = createBottomTabNavigator();

const BottomTabBar = (props: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          height: '8%',
          paddingBottom: '2%',
          borderTopWidth: 0.8,
          borderTopColor: '#848482',
        },
        tabBarActiveTintColor: '#CB4154',
        tabBarLabelStyle: {fontSize: 12},
        tabBarInactiveTintColor: '#848482',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Seller"
        component={Seller}
        options={{
          tabBarLabel: 'Tradefloor',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Buyer"
        component={Buyer}
        options={{
          tabBarLabel: 'Marketplace',
          tabBarIcon: ({color, size}) => (
            <Fontisto name="shopping-basket-add" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabBar;
