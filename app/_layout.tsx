import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { Colors } from '../constants/colors'

const _layout = () => {
  return (
    <>
    <StatusBar style="dark" backgroundColor='transparent' translucent={false} />
      <Stack initialRouteName='index'>
        <Stack.Screen name='index' options={{ headerShown: false, title: "" }} />
        <Stack.Screen name='onBoard' options={{ headerShown: false, title: "" }} />
        <Stack.Screen name='auth' options={{ headerShown: false, title: "" }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false, title: "", contentStyle:{ backgroundColor: Colors.neutral_20} }} />
      </Stack>
    </>
      
  )
}

export default _layout

const styles = StyleSheet.create({})