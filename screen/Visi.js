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

export default class Visi extends Component {

  constructor(props) {
    super(props)
    this.state={
      id: null,
      nama: null,
      tag: null,
      img: null,
      isi: null
    }
  }

  componentWillMount = () => {
    axios.get(`http://156.67.214.64/api/index.php/visimisi`)
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
            height: 250 
          }}>
            <Thumbnail square style={{ width: '100%', height: '100%' }} source={{uri: 'http://www.journalpolice.id/wp-content/uploads/2017/12/IMG-20171213-WA0000.jpg'}} />
          </Col>
        </Grid>
        </Content>
        <ScrollView style={{ backgroundColor: 'white', flex: 1, padding: 10 }}>
          <HTML html={ this.state.isi } imagesMaxWidth={Dimensions.get('window').width} />
        </ScrollView>
    </Container>
    );
  }
}