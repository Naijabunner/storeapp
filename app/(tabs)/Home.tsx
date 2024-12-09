import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../../constants/colors'
import Button from '../../components/UI/Button'
import typography from '../../constants/typography'
import { Ionicons } from '@expo/vector-icons'
const Home = () => {
  return (
    <ScrollView style={{ flex:1 }}>
     <View>
      <Ionicons name='search-outline'/>
     </View>





      <View style={{}}>
      <LinearGradient
      colors={[Colors.primary,'transparent']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }} 
      locations={[0.09, 0.8]}
      style={{ position:'absolute', width:'100%', height:'100%',zIndex:1}}
      />
      <View
      style={{ position:'absolute',zIndex:10, top:0, width:'50%', justifyContent:'center', height:'100%', paddingLeft:15, gap:10}}
      >
        <Text style={[typography.heading4, { fontWeight:'bold', color:'white'}]}>
          Celebrate The Season With Us!
        </Text>
        <Text style={[typography.bodySmallRegular, {fontSize:12, color:'white'}]}>
        Get discounts up to 75% for furniture &  decoration
        </Text>
        <Button
        title='Shop Now'
        variant='alternate'
        containerStyle={{margin:0, paddingVertical:5, paddingHorizontal:0,borderRadius:50, width:'50%', justifyContent:'center', alignItems:'center'}}
        textStyle={{fontSize:12,}}
        />
      </View>
         <Image
        source={require('../../assets/homeImg.png')}
        style={{ width:'100%'}}
        resizeMode='cover'
        />
       
      </View>
      <Text>
        <Text>
        Special Offers
        </Text>
        <Text>
        See More
        </Text>
      </Text>



      <ScrollView horizontal
  showsHorizontalScrollIndicator={false} 
  contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}
  >


        <TouchableOpacity style={{ backgroundColor:'white',padding:10, borderRadius:10}}>
          <View
            style={{ width: 120, margin:10, gap:5}}
          >
            <View style={{padding:3, marginBottom:10}}>
            <Image
              source={require('../../assets/smallChair.png')}
              style={{ width: 120, marginBottom:10 }}
              resizeMode='cover'
            />

<View style={styles.badge}>
      <Text style={styles.text}>45% OFF</Text>
    </View>
            {/* 45%off */}
            </View>
            <Text style={[ typography.bodySmallRegular ,{ color:Colors.text}]}>STRANDMON</Text>
            <Text style={[ typography.heading4 ,{ color:Colors.text, fontWeight:'bold'}]}>$274.13</Text>
            <Text style={[ typography.bodySmallRegular ,{ color:Colors.text, textDecorationLine:'line-through'}]}>$856.60</Text>
            <View style={{ flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
            <Ionicons name='star' color={Colors.secondary} size={15} style={{width:20}} />
            <Text style={[ typography.caption ,{ color:Colors.text}]}>4.8 (128)</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor:'white',padding:10, borderRadius:10}}>
          <View
            style={{ width: 120, margin:10, gap:5}}
          >
            <View style={{padding:3, marginBottom:10}}>
            <Image
              source={require('../../assets/smallChair.png')}
              style={{ width: 120, marginBottom:10 }}
            />

<View style={styles.badge}>
      <Text style={styles.text}>45% OFF</Text>
    </View>
            {/* 45%off */}
            </View>
            <Text style={[ typography.bodySmallRegular ,{ color:Colors.text}]}>STRANDMON</Text>
            <Text style={[ typography.heading4 ,{ color:Colors.text, fontWeight:'bold'}]}>$274.13</Text>
            <Text style={[ typography.bodySmallRegular ,{ color:Colors.text, textDecorationLine:'line-through'}]}>$856.60</Text>
            <View style={{ flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
            <Ionicons name='star' color={Colors.secondary} size={15} style={{width:20}} />
            <Text style={[ typography.caption ,{ color:Colors.text}]}>4.8 (128)</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor:'white',padding:10, borderRadius:10}}>
          <View
            style={{ width: 120, margin:10, gap:5}}
          >
            <View style={{padding:3, marginBottom:10}}>
            <Image
              source={require('../../assets/smallChair.png')}
              style={{ width: 120, marginBottom:10 }}
            />

<View style={styles.badge}>
      <Text style={styles.text}>45% OFF</Text>
    </View>
            {/* 45%off */}
            </View>
            <Text style={[ typography.bodySmallRegular ,{ color:Colors.text}]}>STRANDMON</Text>
            <Text style={[ typography.heading4 ,{ color:Colors.text, fontWeight:'bold'}]}>$274.13</Text>
            <Text style={[ typography.bodySmallRegular ,{ color:Colors.text, textDecorationLine:'line-through'}]}>$856.60</Text>
            <View style={{ flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
            <Ionicons name='star' color={Colors.secondary} size={15} style={{width:20}} />
            <Text style={[ typography.caption ,{ color:Colors.text}]}>4.8 (128)</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>



{/* shop by category */}

      <View>
<View>
<Ionicons name='restaurant-outline'/>
</View>

      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    bottom: 0, // Position from top
    left: 0, // Position from left
    backgroundColor: '#E44A4A',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
})