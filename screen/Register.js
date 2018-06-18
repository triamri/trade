import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { 
  Container, 
  Header, 
  Left,
  Body,
  Content,
  Button,
  Icon,
  Text,
  Item, 
  Input, 
  Label
} from 'native-base';

import HTML from 'react-native-render-html';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Register extends Component {

  render() {
    
    const { goBack } = this.props.navigation;
    
    return (
      <Container>
        <Header>
            <Left>
              <Button transparent onPress={ () => goBack() } >
                <Icon name='md-arrow-back' />
              </Button>
            </Left>
            <Body>
                <Text 
                  style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}
                >Register</Text>
            </Body>
        </Header>
        <Content style={{backgroundColor: 'white', margin:10 }}>
          <Item floatingLabel>
            <Label>Nama Lengkap</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Nama IKM</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Alamat</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>No. Kontak</Label>
            <Input />
          </Item>
          <Button primary style={{ marginTop: 30 }}>
            <Text> Daftar </Text>
          </Button>
        </Content>
    </Container>
    );
  }
}