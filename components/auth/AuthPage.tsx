import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { FC, ReactNode } from 'react'
import AuthTitle from '../../components/auth/authTitle'
import { Colors } from '../../constants/colors'
import ThirdPartyAuthbtn from '../../components/auth/thirdPartyAuthbtn'
import { Link } from 'expo-router'
import { appRoutes } from '../../constants/routes'

interface authpageProps {
  auth: 'register' | 'login',
  title: string,
  subTitle: string,
  showLink: boolean,
  children: ReactNode
}

const AuthPage: FC<authpageProps> = ({
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

      {/* container for the google and facebook auth buttons  */}
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

      {/* Toogle "Don’t have an account?"  */}
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