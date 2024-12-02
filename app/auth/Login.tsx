import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AuthTitle from '../../components/auth/authTitle'
import Button from '../../components/UI/Button'
import Seperator from '../../components/UI/Seperator'
import LoginForm from '../../components/auth/LoginForm'
import OrSeparator from '../../components/UI/Seperator'

const Login = () => {
  return (
    <View >
      <AuthTitle
         title={'Welcome Back!'}
         subTitle={'Enter your email to start shopping and get awesome deals today!'}
      />
        <LoginForm/>
 <Seperator>
<Text style={{  color: 'black', }}>OR</Text>
</Seperator> 
{/* <OrSeparator/> */}
<Button
title='Goggo'
/>
<Button
variant='alternate'
title='Goggo'
/>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({})