import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { 
  Container, 
  Header, 
  Content,
  Left,
  Body,
  Button,
  Icon,
  Thumbnail,
  H3
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Kategori extends Component {

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
                >Produk Eksport</Text>
            </Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
        <Grid style={{ 
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center' 
            }}>
            <View style={{marginTop: 5,height: 170, width: '100%'}}>
              <ImageBackground 
                resizeMethod="resize"
                style={{ width: '100%', height: '100%' }} 
                source={{uri: 'http://www.journalpolice.id/wp-content/uploads/2017/12/IMG-20171213-WA0000.jpg'}} 
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
                        transparent light onPress={ () => navigate('Produk', { id:1 }) }>
                        <Text  
                          style={{fontSize: 24, fontWeight: 'bold'}} 
                        >Hari Jadi Kota Palangka Raya</Text>
                      </Button>
                  </Col>
              </Grid>
            </View>
            <View style={{marginTop: 5,height: 170, width: '100%'}}>
              <ImageBackground 
                style={{ width: '100%', height: '100%' }} 
                source={{uri: 'http://www.journalpolice.id/wp-content/uploads/2017/12/IMG-20171213-WA0000.jpg'}} 
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
                        transparent light onPress={ () => navigate('Produk', { id:2 }) }>
                        <Text  
                          style={{fontSize: 24, fontWeight: 'bold'}} 
                        >Pameran</Text>
                      </Button>
                  </Col>
              </Grid>
            </View>
        </Grid>
        </Content>
    </Container>
    );
  }
}