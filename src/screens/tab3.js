import React, { Component } from 'react';
import {Alert, View, Text, ActivityIndicator} from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import {getArticles} from '../services/news'
import DataItems from '../component/dataItems'
import Modal from '../component/modal'
export default class tab3 extends Component {
    constructor(props){
        super(props);

        this.state ={
            isLoading: true, 
            data: null,
            setModalVisible: false,
            modalArticleData:{}
        }
    }
    
    handleItemDataOnPress = (articleData) => {
     this.setState({
       setModalVisible: true,
       modalArticleData: articleData
     })
    }
    handleModalClose = () => {
     this.setState({
       setModalVisible:false,
       modalArticleData: {}
     })
    }
    componentDidMount(){
        getArticles('technology').then(data =>{
         this.setState({
             isLoading: false,
             data: data
            
         })   
        },error =>{
         Alert.alert('No Internet connection', 'Something went wrong')
        })
    }
  render() {
      console.log(this.state.data)
      let view = this.state.isLoading ? (
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator animating={this.state.isLoading}/> 
          <Text style={{marginTop:40,justifyContent:'center',alignItems:'center',flex:1}}>Loading...</Text> 
        </View>
      ) : (
        <List 
        dataArray={this.state.data}
        renderRow={(item) =>{
            return <DataItems onPress={this.handleItemDataOnPress} data={item}/>
        }}/>
      )
    return (
      <Container>
        <Content>
         {view}
        </Content>
        <Modal
      showModal={this.state.setModalVisible}
      articleData={this.state.modalArticleData}
      onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}