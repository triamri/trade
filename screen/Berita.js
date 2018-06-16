import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import axios from 'axios';
import { 
  Container, 
  Header, 
  Left,
  Body,
  Content,
  Card, 
  CardItem,
  Thumbnail,
  Right,
  Button,
  Icon,
  Text
} from 'native-base';

import HTML from 'react-native-render-html';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Berita extends Component {

  render() {
    
    const htmlContent = `
      <h1>judul</h1>
      <p>This HTML snippet is now rendered with native components !
      Enjoy a webview-free and blazing fast application
      <em style="textAlign: center;">Look at how happy this native cat is</em></p>
    `;
    
    const { goBack, navigate } = this.props.navigation;
    
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
                >Berita</Text>
            </Body>
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
                <Body>
                    <HTML html={htmlContent} />
                    <Button transparent 
                        textStyle={{color: '#87838B'}}
                        onPress= { () => navigate('DetailBerita')}
                    >
                        <Text>Selengkapnya..</Text>
                    </Button>
                </Body>
            </CardItem>
          </Card>
        </Content>
    </Container>
    );
  }
}