import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false, 
            tabBarInactiveTintColor: '#ffbd7d', 
            tabBarActiveTintColor: '#e47911',
            }} 
        >
            <Tab.Screen
             component={HomeStack} 
             name="home" 
             options={{
                 header: () => null,
                 tabBarIcon:({color}) => (
                    <Entypo name="home" color={color} size={25} />
                  ),
                }}
              
            />
            <Tab.Screen
             component={HomeScreen} 
             name="profile" 
             options={{
                 header: () => null,
                 tabBarIcon:({color}) => (
                     <Entypo name="user" color={color} size={25} />
                    ),
                 }}
            />
            <Tab.Screen
             component={ShoppingCartScreen} 
             name="shoppingCart" 
             options={{
                 header: () => null,
                 tabBarIcon:({color}) => (
                     <Entypo name="shopping-cart" color={color} size={25} />
                    ),
                 }}
            />
            <Tab.Screen
             component={HomeScreen} 
             name="more" 
             options={{
                 header: () => null,
                 tabBarIcon:({color}) => (
                     <Entypo name="menu" color={color} size={25} />
                    ),
                 }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNav;