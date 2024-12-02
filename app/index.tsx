import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomSplashScreen from '../components/SplashScreen'
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});
const index = () => {
    useEffect(() => {
        SplashScreen.hide(); // Hide the splash screen once the app is ready
      }, []);
  return (
   <>
   <CustomSplashScreen/>
   </>
  )
}

export default index

const styles = StyleSheet.create({
})