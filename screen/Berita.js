import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import axios from 'axios';
import { 
  Container, 
  Header, 
  Left,
  Body,
  Content,
  H2,
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

  constructor(props) {
    super(props)
    this.state = {
      dataBerita: []
    }
  }

  componentWillMount = () => {
    axios.get('http://156.67.214.64/api/index.php/berita')
    .then(({ data }) => {
      this.setState({
        dataBerita: data
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
                >Berita</Text>
            </Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>

          { this.state.dataBerita.map((berita, index) =>
          <Card style={{flex: 0}} key={ index }>
          <CardItem>
              <Body>
                  <H2>{ berita.judul }</H2>
                  <HTML html={ berita.isi } />
                  <Button transparent 
                      textStyle={{color: '#87838B'}}
                      onPress= { () => navigate('DetailBerita', { id: berita.id })}
                  >
                      <Text>Selengkapnya..</Text>
                  </Button>
              </Body>
          </CardItem>
          </Card>

          ) }
        </Content>
    </Container>
    );
  }
}