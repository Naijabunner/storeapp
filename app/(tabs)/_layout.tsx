import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/colors'
import typography from '../../constants/typography'

const _TabLayout = () => {
  return (
   <Tabs screenOptions={{
    tabBarStyle:{
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
         height:80,
        paddingTop:5,
        shadowOpacity:0,
    }
   }}>
    <Tabs.Screen
     name='Home'
     options={{
        title:'Home',
        tabBarInactiveTintColor:Colors.neutral_50,
        tabBarActiveTintColor:Colors.primary,
        tabBarIcon:({ color })=> <Ionicons name='home-outline' size={28} color={color}/>,
        tabBarLabelStyle: [typography.bodySmallRegular,{ paddingTop:5}],
        headerShown:false,
     }}
    />
    <Tabs.Screen
     name='Cart'
     options={{
        title:'My Cart',
        tabBarInactiveTintColor:Colors.neutral_50,
        tabBarActiveTintColor:Colors.primary,
        tabBarIcon:({ color })=> <Ionicons name='cart-outline' size={28} color={color}/>,
        tabBarLabelStyle: [typography.bodySmallRegular,{ paddingTop:5}],
        headerShown:false,
     }}
    />
    <Tabs.Screen
     name='Account'
     options={{
        title:'My Account',
        tabBarInactiveTintColor:Colors.neutral_50,
        tabBarActiveTintColor:Colors.primary,
        tabBarIcon:({ color })=> <Ionicons name='person-outline' size={28} color={color}/>,
        tabBarLabelStyle: [typography.bodySmallRegular,{ paddingTop:5}],
        headerShown:false,
     }}
    />
   </Tabs>
  )
}

export default _TabLayout