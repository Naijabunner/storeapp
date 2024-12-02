import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import typography from '../../constants/typography'
import { Colors } from '../../constants/colors'

const AuthTitle = ({
    title,
    subTitle,
    titleStyles,
    subTitleStyles,
    
}) => {
  return (
    <View style={{marginVertical:20}}>
      <Text style={[typography.heading2, { color:Colors.text}, titleStyles]}>{title}</Text>
      <Text style={[typography.bodyRegular, { color:Colors.neutral_70, marginTop:10, marginRight:10}, subTitleStyles]}>{subTitle}</Text>
    </View>
  )
}

export default AuthTitle

const styles = StyleSheet.create({})