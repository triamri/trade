import React, { Component } from 'react';
import axios from 'axios';
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

export default class Struktur extends Component {

  constructor(props) {
    super(props)
    this.state={
      id: null,
      nama: null,
      tag: null,
      img: null,
      isi: '<p>Loading</p>'
    }
  }

  componentWillMount = () => {
    axios.get(`http://156.67.214.64/api/index.php/struktur`)
    .then(({data}) => {
      this.setState({
        id: data[0].id,
        nama: data[0].nama,
        img: data[0].file,
        tag: data[0].tag,        
        isi: data[0].isi
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
                  >{ this.state.nama }</Text>
            </Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
        <Grid>
          <Col style={{
            width: '100%', 
            height: Dimensions.get('window').width,
            alignItems: 'center'
          }}>
            <Thumbnail 
              resizeMethod="resize"
              square 
              style={{ width: '100%', height: '100%' }} 
              source={ {uri: `http://156.67.214.64/banner/${this.state.img}`} }
            />
          </Col>
        </Grid>
        </Content>
    </Container>
    );
  }
}