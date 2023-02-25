import * as React from 'react';
import { Text, Image, View,SafeAreaView, StyleSheet, Pressable, TextInput } from 'react-native';

export default function Landing({ navigation }) {

  return (
  <View style={{backgroundColor: "white"}}>
    <View style={{display:'flex'}}>
        <Image style={styles.img} source={require('../Landing/splash.png')}/>
    </View>
    <View style={styles.btnContainer}>
      <Pressable style={styles.btnLeft} onPress={()=>{navigation.navigate('Sign In')}}><Text style={styles.btnText}>Login</Text></Pressable>
      <Pressable style={styles.btnRight} onPress={()=>{navigation.navigate('Sign Up')}}><Text style={styles.btnText}>Sign Up</Text></Pressable>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 'max-width',
    height: '40em'
  },
  btnLeft:{
    backgroundColor: '#BFCEB8',
    width:'45%',
    height: 200,
    marginTop: '2em',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 50,
  },
  btnRight:{
    backgroundColor: '#BFCEB8',
    width:'45%',
    height: 200,
    marginTop: '2em',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 50,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnText: {
    fontSize: 28,
    fontWeight: '800',
  }
});