import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Link, useRouter } from 'expo-router'
import { appRoutes } from '../constants/routes'

const CustomSplashScreen = () => {
   const router = useRouter()
     useEffect(()=>{
    const timeout= setTimeout(() => {
    router.replace(appRoutes.Login)  
    }, timeout);

    return()=>{
     timeout
    }
     },[])

  return (
    <LinearGradient
    colors={['#1c7356','#004d4b']} // Replace with the actual color codes from your gradient
    style={styles.gradient}
    start={{ x: 0, y: 0 }} // Top-left
    end={{ x: 0, y: 1 }}   // Bottom
    >
      <Image
        source={require('../assets/splash.png')}
        width={100}
        />
      <Text style={{ textAlign:'center', fontSize:36, fontWeight:'900', color:'white'}}>HomeHaven</Text>
    </LinearGradient>
  )
}

export default CustomSplashScreen

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
       justifyContent:'center',
        alignItems:'center',
        gap:10
      },
})