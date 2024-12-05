import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { ComponentProps, FC } from 'react'
import { Ionicons } from '@expo/vector-icons'
import typography from '../../constants/typography'
import { Colors } from '../../constants/colors'
interface customInputProps {
  placeholder:string,
  label: string,
  name:string,
  handleChange:(value:string, name:string)=>void,
  value:string,
  icon:IoniconName
}

export type IoniconName = keyof typeof Ionicons.glyphMap;

const CustomInput:FC<customInputProps> = ({
  placeholder,
  label,
  name,
  handleChange,
  value,
  icon
}) => {
  return (
      <View style={{
        flexDirection: 'row',
        //  backgroundColor:'#7ec816',
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 5,
        gap: 15,
        overflow: 'hidden',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.neutral_40,
        marginVertical:10
      }}>
        <Ionicons
          name={icon}
          size={24}
          style={{ width: 24, height: 24 }}
        />
        <View style={{
          flex: 1,
          gap: 3
        }}>
          <Text style={[{
            color: Colors.neutral_90
          }, typography.caption]}>
            {label}
          </Text>
          <TextInput
            style={[{
              backgroundColor: 'white',
              paddingHorizontal: 1,
              paddingTop: 0,
              paddingBottom: 0,
            }, typography.bodyRegular]}
            placeholder={placeholder}
            value={value}
            onChangeText={(value)=>handleChange(value,name)}
          />
        </View>
      </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({})