import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { 
  Container, 
  Header, 
  Left,
  Body,
  Content,
  Thumbnail,
  Right,
  Button,
  Icon,
  Text
} from 'native-base';

import HTML from 'react-native-render-html';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Kontak extends Component {

  render() {
    
    const htmlContent = `
      <h1>This HTML snippet is now rendered with native components !</h1>
      <h2>Enjoy a webview-free and blazing fast application</h2>
      <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
      <em style="textAlign: center;">Look at how happy this native cat is</em>
    `;
    
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
                >Kontak</Text>
            </Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
        <Grid>
          <Col style={{
            width: '100%', 
            height: 250 
          }}>
            <Thumbnail square style={{ width: '100%', height: '100%' }} source={{uri: 'http://www.journalpolice.id/wp-content/uploads/2017/12/IMG-20171213-WA0000.jpg'}} />
          </Col>
        </Grid>
        </Content>
        <ScrollView style={{ backgroundColor: 'white', flex: 1, padding: 10 }}>
          <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
        </ScrollView>
    </Container>
    );
  }
}