import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { Colors } from '../../constants/colors'

const {width, height }=Dimensions.get('window')

const Seperator = ({ children }:{ children:ReactNode }) => {
  return (
    <View style={styles.container}>
<View style={styles.line}/>
{children}
<View style={styles.line}/>

    </View>

   
  )
}

export default Seperator

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    marginVertical:20
  },
   line:{
     flex:1,
     backgroundColor:Colors.neutral_50,
     height:1
   }
   
})