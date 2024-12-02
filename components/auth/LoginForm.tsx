import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Button from '../UI/Button'

const LoginForm = () => {
  return (
    <View>
        <TextInput/>
        <Button 
        title='Log In'
        textStyle={{ textAlign:'center'}}
        containerStyle={{ marginHorizontal:0}}
        />
      </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({})