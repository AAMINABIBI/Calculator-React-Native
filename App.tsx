/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

const App= ()=>{
  const [input, setInput] = useState('');

  const handleInput=(value: string)=>{
 if(value==='c')
 {
  setInput("");
 }else if(value==='=')
 {
  try{
    const result=eval(input);
    setInput(String(result));
  }
  catch(error){
    setInput("error");
  }
 }
//  else if(value==='+'){
//   setInput(input+'+');
//  }else if(value==='-'){
//   setInput(input+'-');
//  }else if(value==='*'){
//   setInput(input+'*');
//  }else if(value==='/'){
//   setInput(input+'/');
//  }
 else{
  setInput(input+value);
 }

  }
return (
<View style={styles.container}>
<Text style={styles.heading}>Calculate Me:)</Text>
<TextInput style={styles.input} value={input} placeholder='Enter the values'></TextInput>
<View style={styles.button}>
  <TouchableOpacity onPress={()=>handleInput('1')}>
    <Text style={styles.btn} >1</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('2')}>
    <Text style={styles.btn}>2</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('3')}> 
    <Text style={styles.btn}>3</Text>
  </TouchableOpacity>
   <TouchableOpacity onPress={()=>handleInput('*')}>
    <Text style={[styles.btn,styles.opBtn]}>*</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('4')}>
    <Text style={styles.btn}>4</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('5')}>
    <Text style={styles.btn}>5</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('6')}>
    <Text style={styles.btn}>6</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('-')}>
    <Text style={[styles.btn,styles.opBtn]}>-</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('7')}>
    <Text style={styles.btn}>7</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('8')}>
    <Text style={styles.btn}>8</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('9')}>
    <Text style={styles.btn}>9</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('+')}>
    <Text style={[styles.btn,styles.opBtn]}>+</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('0')}>
    <Text style={styles.btn}>0</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('.')}>
    <Text style={styles.btn}>.</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('/')}>
    <Text style={[styles.btn,styles.opBtn]}>/</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('%')}>
    <Text style={[styles.btn,styles.opBtn]}>%</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('=')}>
    <Text style={[styles.btn,styles.clearbtn]}>=</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>handleInput('c')}>
    <Text style={[styles.btn,styles.clearbtn,]}>clear</Text>
  </TouchableOpacity>
 
</View>
</View>

);
};
export default App;

const styles=StyleSheet.create(
  {
    container:{
flex:1,
backgroundColor:'black',
    },
    heading:{
color:'white',
height:50,
fontSize:40,
justifyContent:'center',
alignItems:'center',
marginLeft:70,
fontWeight:'bold'
    },

    input:{
height:120,
width:400,
borderColor:'white',
borderWidth:3,
color:'black',
backgroundColor:'pink',
borderRadius:5,
fontSize:30,
padding:10,
margin:15
    },
    btn:{
      color:'black',
      width:70,
      height:70,
      backgroundColor:'white',
      fontSize:25,
      padding:20,
      margin:5,
borderRadius:20,

    },
    button:{
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      margin:30,
    },
    clearbtn:{
backgroundColor:'yellow',
width:145,
justifyContent:'center',
textAlign:'center'
    },
    opBtn:{
backgroundColor:'#bc0447',
color:'white'
    }

  }
)