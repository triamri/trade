import React, { Component } from 'react';
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

export default class Produk extends Component {

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
                >Produk</Text>
            </Body>
        </Header>
        <Content>
        <Grid style={{ 
            marginTop: 5, 
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center' 
            }}>
            <View style={{margin: 5,height: 170, width: '47%', justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
            <Thumbnail square style={{ width: '100%', height: '70%' }} source={{uri: 'http://www.journalpolice.id/wp-content/uploads/2017/12/IMG-20171213-WA0000.jpg'}} />
            <Text 
              style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginTop: 10}}
              onPress= { () => navigate('DetailProduk') }  
            >
                悉尼
            </Text>
            </View>
            <View style={{margin: 5,height: 170, width: '47%', justifyContent:'center', alignItems:'center', backgroundColor: 'lightsalmon'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                纽约
            </Text>
            </View>
            <View style={{margin: 5,height: 170, width: '47%', justifyContent:'center', alignItems:'center', backgroundColor: 'teal'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                东京
            </Text>
            </View>
            <View style={{margin: 5,height: 170, width: '47%', justifyContent:'center', alignItems:'center', backgroundColor: 'lightpink'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                上海
            </Text>
            </View>
        </Grid>
        </Content>
    </Container>
    );
  }
}