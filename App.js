import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Modal,
  FlatList,
  Pressable,
  TextInput,
} from 'react-native';
import Header from './components/Header';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { createRef, useRef } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Zocial from '@expo/vector-icons/Zocial';
import {
  useNavigation,
  useRoute,
  NavigationContainer,
  useNavigationContainerRef,
  createNavigationContainerRef,
} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstScreen from './Screens/FirstScreen';
import { useState, useEffect, useContext } from 'react';
import { Store } from './utils/store';
import ContextProvider from './utils/store';
import { createStackNavigator } from '@react-navigation/stack';
import SecondProductScreen from './Screens/SecondScreen';
import HaalfHeader from './components/HaalfHeader';

import BottomTabScreen1 from './Screens/BotttomTabScreen1';
import BottomTabScreen3 from './Screens/BotttomTabScreen3';


import ProductDetailsScreen from './Screens/ProductDetailsScreen';
import ModalFilterTextComp from './components/ModalFilterTextComp';
import Ionicons from '@expo/vector-icons/Ionicons';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const navigationRef = createRef(null);

export default function App() {
  function StackScreen() {
    return (
      <Stack.Navigator
        screenOptions={{
          header: () => {
            return <Header />;
          },
        }}>
        <Stack.Screen name="FirstProductScreen" component={FirstScreen} />
        <Stack.Screen
          name="ProductSecondScreen"
          component={SecondProductScreen}
        />

        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
        />
      </Stack.Navigator>
    );
  }

  return (
    <>
      <SafeAreaView
        style={{ marginTop: StatusBar.currentHeight }}></SafeAreaView>
      <ContextProvider
        children={
          <NavigationContainer ref={navigationRef}>
            <BottomTab.Navigator
              screenOptions={{
                header: () => {
                  return <Header />;
                },
              }}>
              <BottomTab.Group>
                <BottomTab.Screen
                  name="FirstScreen"
                  component={BottomTabScreen1}
                  options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon: () => {
                      return <Zocial name="print" size={24} color="black" />;
                    },
                  }}
                />
                <BottomTab.Screen
                  name="SecondScreen"
                  component={StackScreen}
                  options={{
                    tabBarLabel: 'Products',
                    headerShown: false,
                    tabBarIcon: () => {
                      return (
                        <Ionicons name="receipt" size={24} color="black" />
                      );
                    },
                  }}
                />
                <BottomTab.Screen
                  name="ProductDetailsScreen"
                  component={ProductDetailsScreen}
                  options={{
                    tabBarLabel: 'Overview',
                    tabBarIcon: () => {
                      return (
                        <FontAwesome5
                          name="rupee-sign"
                          size={24}
                          color="black"
                        />
                      );
                    },
                  }}
                />
                <BottomTab.Screen
                  name="ThirdScreen"
                  component={BottomTabScreen3}
                  options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => {
                      return <AntDesign name="user" size={24} color="black" />;
                    },
                  }}
                />
              </BottomTab.Group>
            </BottomTab.Navigator>
          </NavigationContainer>
        }
      />
    </>
  );
}
