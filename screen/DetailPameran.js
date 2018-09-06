import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import axios from 'axios';
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

export default class DetailPameran extends Component {

  constructor(props) {
    super(props)
    this.state={
      id: null,
      judul: null,
      img: null,
      isi: '<p>Loading</p>'
    }
  }

  componentWillMount = () => {
    axios.get(`http://156.67.214.64/api/index.php/pameran?id=${this.props.navigation.state.params.id}`)
    .then(({data}) => {
      this.setState({
        id: data[0].id,
        judul: data[0].judul,
        img: data[0].file,
        isi: data[0].detail
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
                >Detail Pameran</Text>
            </Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
        <Grid>
          <Col style={{
            width: '100%', 
            height: 250 
          }}>
            <Thumbnail resizeMethod="resize" square style={{ marginLeft: 20,width: '90%', height: '100%' }} source={{uri: `http://156.67.214.64/pameran/${this.state.img}`}} />
          </Col>
        </Grid>
        </Content>
        <ScrollView style={{ backgroundColor: 'white', flex: 1, padding: 10 }}>
          <H2>{ this.state.judul }</H2>
          <HTML html={ this.state.isi } imagesMaxWidth={Dimensions.get('window').width} />
        </ScrollView>
    </Container>
    );
  }
}