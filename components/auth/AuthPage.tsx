import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AuthTitle from '../../components/auth/authTitle'
import LoginForm from '../../components/auth/LoginForm'
import { Colors } from '../../constants/colors'
import ThirdPartyAuthbtn from '../../components/auth/thirdPartyAuthbtn'
import { Link } from 'expo-router'
import { appRoutes } from '../../constants/routes'

const AuthPage = ({
    auth,
    title,
    subTitle,
    showLink,
    children
}) => {

  return (
    <View >
      <AuthTitle
        title={title}
        subTitle={subTitle}
      />
     
     {children}
      <View style={{
        gap: 5
      }}>
        <ThirdPartyAuthbtn
          type='google'
          authType={auth}
        />
        <ThirdPartyAuthbtn
          type='facebook'
           authType={auth}
        />
      </View>
      {showLink && <Text style={{
        textAlign: 'center',
        marginTop: 20
      }}>
        Don’t have an account?{" "}
        <Link href={appRoutes.Register} style={{
          color: Colors.primary
        }}>
          Register
        </Link>
      </Text>}
    </View>
  )
}

export default AuthPage

const styles = StyleSheet.create({})