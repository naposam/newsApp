import React, { Component } from 'react';
import {View } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import TimeAgo from './time'
export default class DataItems extends Component{
constructor(props){
    super(props);
    this.data = props.data;
}

handlePress =() =>{
  const {url, title} = this.data
  this.props.onPress({url, title})
}
 render(){
     return(
        <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage:'https://techcrunch.com/wp-content/uploads/2019/10/hyundai-botride.jpg?w=600' }} />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.data.title}</Text>
          <Text note numberOfLines={2}>{this.data.description}</Text>
          <View style={{flex:1, flexDirection:'row', marginTop:8, marginLeft:0}}>
            <Text note>{this.data.source.name}</Text>
            <TimeAgo time={this.data.publishedAt}/>
          </View>
        </Body>
        <Right>
          <Button transparent onPress={this.handlePress}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
     )
 }
}


