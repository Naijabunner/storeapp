import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthTitle from '../../components/auth/authTitle'

const Register = () => {
  return (
    <View>
      <AuthTitle
         title={'Welcome Back!'}
         subTitle={'Enter your email to start shopping and get awesome deals today!'}
      />
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})