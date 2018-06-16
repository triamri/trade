import React, { Component } from 'react';
import { Image } from 'react-native';
import { 
  Container, 
  Header, 
  Content, 
  Card, 
  CardItem, 
  Thumbnail, 
  Text, 
  Button, 
  Icon, 
  Left, 
  Body, 
  Right 
} from 'native-base';

export default class Ikm extends Component {
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
                >Ikm</Text>
            </Body>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.imgur.com/dHLmxfO.jpg?2'}} />
                <Body>
                  <Text 
                    onPress= { () => navigate('DetailIkm')}
                    >NativeBase</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}