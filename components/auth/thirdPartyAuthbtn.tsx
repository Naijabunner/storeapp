import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../UI/Button'
import { Colors } from '../../constants/colors'
import typography from '../../constants/typography'

const ThirdPartyAuthbtn = ({ type, authType }: { type: 'google' | 'facebook', authType: 'register' | 'login' }) => {
  const labelAction = authType === 'login' ? 'Log In' : 'Continue'
  const label = type === 'google' ? 'with Google' : 'with Facebook'
  const imagePath = type === 'google' ? require('../../assets/Icons/google.png') : require('../../assets/Icons/facebook.png')

  const handlePress = () => { }

  return (
    <Button
      title={labelAction + " " + label}
      variant='alternate'
      onPress={handlePress}
      containerStyle={{
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
      }}
      textStyle={[{
        textAlign: 'center',
        marginLeft: 8,
      }, typography.bodyBold]}
    >
      <Image
        source={imagePath}
        width={16}
        height={16}
      />
    </Button>
  )
}

export default ThirdPartyAuthbtn

const styles = StyleSheet.create({})