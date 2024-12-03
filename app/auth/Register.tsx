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

const Register = () => {
  return (
    <AuthPage
    authType={'register'}
    title={'Create Account'}
    subTitle={'Fill in your details below to get started on a seamless shopping experience.'}
   
   >
      <AuthForm
      ctaLabel={'Create Account'}
      showTermsofUse={true}
      />
    </AuthPage>
  )
}

export default Register

const styles = StyleSheet.create({})