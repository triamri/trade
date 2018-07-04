import React, { Component } from 'react';
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

export default class Video extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataVideo: []
    }
  }

  componentWillMount = () => {
    axios.get('http://156.67.214.64/api/index.php/video')
    .then(({ data }) => {
      this.setState({
        dataVideo: data
      })
    })
    .catch(err => console.log(err))
  }

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
        <Content style={{ backgroundColor: 'white' }}>
        { this.state.dataVideo.map((video, index) =>
          <Card style={{flex: 0}}>
            <CardItem>
                <Body>
                <Text 
                  style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}
                  onPress= { () => navigate('DetailVideo', { id:video.id })}
                > { video.nama }</Text>
                </Body>
            </CardItem>
          </Card>
        )}
        </Content>
    </Container>
    );
  }
}