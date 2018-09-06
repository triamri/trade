import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView, Dimensions } from 'react-native';
import { 
  Container, 
  Header, 
  Left,
  Body,
  H2,
  Content,
  Thumbnail,
  Right,
  Button,
  Icon,
  Text
} from 'native-base';

import HTML from 'react-native-render-html';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class DetailProduk extends Component {

  constructor(props) {
    super(props)
    this.state={
      id: null,
      produk: null,
      detail: '<p>Loading</p>',
      img: null
    }
  }

  componentWillMount = () => {
    axios.get(`http://156.67.214.64/api/index.php/produk?id=${this.props.navigation.state.params.id}`)
    .then(({data}) => {
      this.setState({
        id: data[0].id,
        produk: data[0].produk,
        detail: data[0].detail,
        img: data[0].file
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
                >Detail Produk</Text>
            </Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
        <Grid>
          <Col style={{
            width: '100%', 
            height: 250 
          }}>
            <Thumbnail resizeMethod="resize" square style={{ width: '100%', height: '100%' }} source={{uri: `http://156.67.214.64/produk/${this.state.img}`}} />
          </Col>
        </Grid>
        </Content>
        <ScrollView style={{ backgroundColor: 'white', flex: 1, padding: 10 }}>
          <H2>{ this.state.produk }</H2>
          <HTML html={ this.state.detail } imagesMaxWidth={Dimensions.get('window').width} />
        </ScrollView>
    </Container>
    );
  }
}