import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AuthTitle from '../../components/auth/authTitle'
import LoginForm from '../../components/auth/LoginForm'
import { Colors } from '../../constants/colors'
import ThirdPartyAuthbtn from '../../components/auth/thirdPartyAuthbtn'
import { Link } from 'expo-router'
import { appRoutes } from '../../constants/routes'
import AuthPage from '../../components/auth/AuthPage'
import AuthForm from '../../components/auth/AuthForm'

const Login = () => {
  return (
   <AuthPage
   title={'Welcome Back!'}
   auth={'login'}
   subTitle={'Enter your email to start shopping and get awesome deals today!'}
   showLink={true}
   >
    <AuthForm
    ctaLabel={'Log In'}
    />
   </AuthPage>
  )
}

export default Login

const styles = StyleSheet.create({})