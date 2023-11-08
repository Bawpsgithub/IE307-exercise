import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Categories from '../screens/Categories';
import Favourites from '../screens/Favourites';
import Home from '../screens/Home';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Bottom = createBottomTabNavigator();

const TabIcon = ({ name, focused }) => {
  return (
    <IonIcon name={name} size={25}
      color={focused ? '#0081F1' : '#000'}
    />
  );
};
// 20520541 - Ngô Nhật Huy
const homeScreenOptions = (headerShown, name) => {
  return {
    headerShown: headerShown,
    tabBarIcon: ({ focused }) => <TabIcon name={name} focused={focused} />,
  };
};

const MainBottom = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Home" component={Home}
        options={homeScreenOptions(false, 'home')}
      />

    <Bottom.Screen name="Categories" component={Categories}
      options={homeScreenOptions(false, 'grid')}
    />
    <Bottom.Screen name="Favourites" component={Favourites} 
      options={{...homeScreenOptions (false, 'heart'), tabBarBadge: 3 }}
    />

    <Bottom.Screen name="Profile" component= {Profile}
      options={homeScreenOptions (false, 'person')}
    />
  </Bottom.Navigator>
  );
};

export default MainBottom;