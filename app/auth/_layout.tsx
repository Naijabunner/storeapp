import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'

const _authlayout = () => {
  return (
    <>
    <StatusBar style="dark" backgroundColor='transparent' translucent={false} />
      <Stack>
        <Stack.Screen name='Login' options={{ headerShown: false, title: "" , contentStyle:{
            backgroundColor:'white',
            paddingHorizontal:20,
            paddingTop:10,
        }}} />
        <Stack.Screen name='Register' options={{ headerShown: false, title: "" , contentStyle:{
            backgroundColor:'white',
            paddingHorizontal:20,
            paddingTop:10,
        }}} />
      </Stack>
    </>
      
  )
}

export default _authlayout

const styles = StyleSheet.create({})