import React, { Component } from 'react';
import axios from 'axios';
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

  constructor(props) {
    super(props)
    this.state={
      id: null,
      nama: null,
      youtube: null
    }
  }

  componentWillMount = () => {
    axios.get(`http://156.67.214.64/api/index.php/video?id=${this.props.navigation.state.params.id}`)
    .then(({data}) => {
      this.setState({
        id: data[0].id,
        nama: data[0].nama,
        youtube: data[0].youtube
      })
    })
    .catch(err => console.log(err))
  }
  
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
                >Detail Video</Text>
            </Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
        <Grid>
          <Col style={{
            margin: 10,
            width: '100%'
          }}>
          <H1>{ this.state.nama }</H1>            
          </Col>
        </Grid>
        <Grid>          
          <HTML html={`<iframe width="${ Dimensions.get('window').width }" height="315" src="${ this.state.youtube }" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`} imagesMaxWidth={Dimensions.get('window').width} />
        </Grid>
        </Content>
    </Container>
    );
  }
}