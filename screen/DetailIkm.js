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
  Text,
  Tab, 
  Tabs, 
  ScrollableTab
} from 'native-base';

import HTML from 'react-native-render-html';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class DetailIkm extends Component {

  constructor(props) {
    super(props)
    this.state={
      id: null,
      ikm: null,
      alamat: null,
      kontak: null,
      email: null,
      img: null,
      desc: null
    }
  }

  componentWillMount = () => {
    axios.get(`http://156.67.214.64/api/index.php/ikm?id=${this.props.navigation.state.params.id}`)
    .then(({data}) => {
      this.setState({
        id: data[0].id,
        ikm: data[0].ikm,
        alamat: data[0].alamat,
        kontak: data[0].kontak,
        email: data[0].email,
        img: data[0].img,
        desc: data[0].deskripsi
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
                >Detail IKM</Text>
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
        <Tabs style={{ marginTop: -50 }} renderTabBar={()=> <ScrollableTab />}>
          <Tab style={{ padding: 10 }} heading="Profil">
            <Text>{ this.state.ikm }</Text>
            <Text>{ this.state.alamat }</Text>
            <Text>{ this.state.kontak }</Text>
            <Text>{ this.state.email }</Text>
          </Tab>
          <Tab style={{ padding: 10 }} heading="Deskripsi">
            <ScrollView style={{ backgroundColor: 'white', flex: 1, padding: 10 }}>
              <HTML html={ this.state.desc } imagesMaxWidth={Dimensions.get('window').width} />
            </ScrollView>
          </Tab>
        </Tabs>
    </Container>
    );
  }
}