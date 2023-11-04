import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "../(tabs)/home";
import Inspiration from "../(tabs)/inspiration";
import Saved from "../(tabs)/saved";
import Setting from "../(tabs)/setting";

const Tab = createBottomTabNavigator();
const noHead = { headerShown: false };

const Tabs = () => {
  return (
      <Tab.Navigator        
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Inspiration":
              iconName = "bulb-outline";
              break;
            case "Saved":
              iconName = "bookmark-outline";
              break;
            case "Setting":
              iconName = "settings-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={32}
              color={focused ? "#89580A" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          backgroundColor: '#FEFFC1',
          paddingBottom: 5,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "#89580A" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}>
        <Tab.Screen name="Home" component={Home} options={noHead} />
        <Tab.Screen name="Inspiration" component={Inspiration} options={noHead}/>
        <Tab.Screen name="Saved" component={Saved} options={noHead}/>
        <Tab.Screen name="Setting" component={Setting} options={noHead}/>
      </Tab.Navigator>
  );
};

export default Tabs;