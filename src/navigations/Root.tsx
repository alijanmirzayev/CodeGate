import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Tab from './Tab';
import Onboading from '../screens/Onboarding';
import MuracietEt2 from '../screens/MuracietEt2';
import MuracietEt3 from '../screens/MuracietEt3';

const StackNavigator = createNativeStackNavigator()

const RootStack = () => {

    return (
        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <StackNavigator.Screen name='Onboarding' component={Onboading} />
            <StackNavigator.Screen name='Tab' component={Tab} />
            <StackNavigator.Screen name='MuracietEt2' component={MuracietEt2} />
            <StackNavigator.Screen name='MuracietEt3' component={MuracietEt3} />

        </StackNavigator.Navigator>
    )
}


export default RootStack