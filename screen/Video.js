import React, { Component } from 'react';
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

export default class Video extends Component {

  render() {
    
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
                >Video</Text>
            </Body>
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
                <Body>
                <Text 
                  style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}
                  onPress= { () => navigate('DetailVideo')}
                >Video</Text>
                </Body>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
                <Body>
                <Text 
                  style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}
                  onPress= { () => navigate('DetailVideo')}
                >Detail Video</Text>
                </Body>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
                <Body>
                <Text 
                  style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}
                  onPress= { () => navigate('DetailAgenda')}
                >Detail Video</Text>
                </Body>
            </CardItem>
          </Card>
        </Content>
    </Container>
    );
  }
}