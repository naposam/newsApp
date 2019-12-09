import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import TabScreen from './src/screens/TabScreen'

export default class App extends React.Component{
  render(){
    return(
      
        <TabScreen/>
     
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})