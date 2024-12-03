import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { Colors } from '../../constants/colors'
import typography from '../../constants/typography'

interface customButtonProps {
    variant?: 'alternate' | 'primary',
    title: string,
    containerStyle?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
    children?:ReactNode,
    onPress:()=>void
}

const Button:FC<customButtonProps> = ({ variant = 'primary', title, containerStyle, textStyle, children, onPress}) => {

    

  return (
    <TouchableOpacity style={[styles.btnContainer, containerStyle, variant === 'alternate' && styles.alternateBg]} onPress={onPress}>
        {children}
      <Text style={[typography.bodyBold, variant === 'alternate'? styles.alternateText : {color:'white'}, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor:Colors.primary,
        paddingHorizontal:40,
        borderRadius:5,
        paddingVertical:10,
       margin:5
    },
    alternateText:{
        color:Colors.primary,        
    },
    alternateBg:{
        backgroundColor:'white'
    }
})