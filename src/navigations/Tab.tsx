import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import StartScreen from '../screens/Muracietlerim';
import MuracietlerimSVG from '../../assets/icons/navigations/MuracietlerimSVG';
import MuracietEtSVG from '../../assets/icons/navigations/MuracietEtSVG';
import OzunuSinaSVG from '../../assets/icons/navigations/OzunuSinaSVG';
import Muracietlerim from '../screens/Muracietlerim';
import OzunuSina from '../screens/OzunuSina';
import MuracietEt from '../screens/MuracietEt';

const TabNavigator = createBottomTabNavigator();

const Tab = () => {
  return (
    <TabNavigator.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        borderTopWidth: 0,
        height: 70,
        backgroundColor: "#FAFAFA"
      },
    }}>

      <TabNavigator.Screen name='Muracietlerim' component={Muracietlerim} options={{
        tabBarIcon: ({ focused }) => {
          return focused ? <View>
            <View style={styles.selecetedIconContainer}>
              <MuracietlerimSVG stroke="white" />
            </View>
            <Text style={styles.text}>Müraciətlərim</Text>
          </View> : <View>
            <View style={styles.iconContainer}>
              <MuracietlerimSVG stroke="black" />
            </View>
            <Text style={styles.text}>Müraciətlərim</Text>
          </View>
        }
      }} />

      <TabNavigator.Screen name='Start2' component={MuracietEt} options={{
        tabBarIcon: ({ focused }) => {
          return focused ? <View>
            <View style={styles.selecetedIconContainer}>
              <MuracietEtSVG stroke="white" />
            </View>
            <Text style={styles.text}>Müraciət et</Text>
          </View> : <View>
            <View style={styles.iconContainer}>
              <MuracietEtSVG stroke="black" />
            </View>
            <Text style={styles.text}>Müraciət et</Text>
          </View>
        }
      }} />

      <TabNavigator.Screen name='Start3' component={OzunuSina} options={{
        tabBarIcon: ({ focused }) => {
          return focused ? <View>
            <View style={styles.selecetedIconContainer}>
              <OzunuSinaSVG stroke="white" />
            </View>
            <Text style={styles.text}>Özünü sına</Text>
          </View> : <View>
            <View style={styles.iconContainer}>
              <OzunuSinaSVG stroke="black" />
            </View>
            <Text style={styles.text}>Özünü sına</Text>
          </View>
        }
      }} />
    </TabNavigator.Navigator>
  )
}

export default Tab

const styles = StyleSheet.create({
  selecetedIconContainer: { backgroundColor: "#8582E4", paddingHorizontal: 20, paddingVertical: 4, borderRadius: 16 },
  iconContainer: { paddingHorizontal: 20, paddingVertical: 4, borderRadius: 16 },
  text: { fontFamily: "Roboto-Bold", fontSize: 12, fontWeight: "600", textAlign: "center" },
})