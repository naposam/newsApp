import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#D86B79'}} hasTabs >
        <Left/>
          <Body>
            <Title style={{justifyContent:'center',alignItems:'center', alignContent:'center', fontSize:18}}>UltDev News App</Title>
          </Body>
          <Right />
            </Header>
        <Tabs >
          <Tab tabStyle={{backgroundColor:'#D86B79'}} activeTabStyle={{backgroundColor:'#D86B79'}}  heading="General"  >
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#D86B79'}} activeTabStyle={{backgroundColor:'#D86B79'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#D86B79'}} activeTabStyle={{backgroundColor:'#D86B79'}} heading="Technology ">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}