import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import typography from '../../constants/typography'
import { Colors } from '../../constants/colors'

const OnboardText = ({ type, style, text }: { type: 'title' | 'subtitle', style?: StyleProp<TextStyle>, text: string }) => {

  if (type === 'subtitle') {
    return <Text style={[typography.heading5, { opacity: 0.6,  paddingHorizontal: 15, marginTop: 10,color:Colors.text, textAlign: 'center' }, style]}>{text}</Text>
  }
  return (
    <Text style={[typography.heading2, { paddingHorizontal: 15, marginTop: 30, textAlign: 'center',color:Colors.text, }]}>
      {text}
    </Text>

  )
}

export default OnboardText

const styles = StyleSheet.create({})