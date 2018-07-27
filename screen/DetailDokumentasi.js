import React, { Component } from 'react';
import axios from 'axios';
import { Text, View } from 'react-native';
import { 
  Container, 
  Header, 
  Content,
  Left,
  Body,
  Button,
  Icon,
  Thumbnail
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

export default class DetailDokumentasi extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataDokumentasi: []
    }
  }

  componentWillMount = () => {
    axios.get(`http://156.67.214.64/api/index.php/dokumentasi?id=${this.props.navigation.state.params.id}`)
    .then(({ data }) => {
      this.setState({
        dataDokumentasi: data
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
                >Detail Galeri Kegiatan</Text>
            </Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
        <Grid style={{ 
            marginTop: 5, 
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center' 
            }}>
            { this.state.dataDokumentasi.map((dokumentasi, index) =>
            <View key={ index } 
              style={{margin: 5,height: 170, width: '47%', backgroundColor: 'skyblue'}}
              onPress={ () => navigate('DetailDokumentasi', { id:dokumentasi.id }) }  
            >
              <Thumbnail square 
                style={{ width: '100%', height: '100%' }} 
                source={{uri: `http://156.67.214.64/trade/galeri/${dokumentasi.file}`}} 
              />
              <Grid style={{ marginTop: -100 }}>
                  <Col style={{
                      width: '100%',
                      height: 170
                      }}
                      >
                      <Button
                        style={{ 
                          alignSelf: 'center' 
                        }} 
                        transparent light onPress={ () => navigate('DetailImage', { id:dokumentasi.id }) }>
                        <Text  
                          style={{fontSize: 24, fontWeight: 'bold'}} 
                        >View</Text>
                      </Button>
                  </Col>
              </Grid>
            </View>
            )}
        </Grid>
        </Content>
    </Container>
    );
  }
}