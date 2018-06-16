import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { 
  Container, 
  Header, 
  H1,
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

export default class DetailVideo extends Component {

  render() {
    
    const htmlContent = `<img src="https://i.imgur.com/dHLmxfO.jpg?2" />`;
    
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
                >Detail Video</Text>
            </Body>
        </Header>
        <Content>
        <Grid>
          <Col style={{
            margin: 10,
            width: '100%'
          }}>
          <H1>Judul Video</H1>            
          </Col>
        </Grid>
        <Grid>          
          <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
        </Grid>
        </Content>
    </Container>
    );
  }
}