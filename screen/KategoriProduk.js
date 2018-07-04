import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
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

export default class KategoriProduk extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataProduk: []
    }
  }

  componentWillMount = () => {
    axios.get(`http://156.67.214.64/api/index.php/kategori?id=${this.props.navigation.state.params.id}`)
    .then(({ data }) => {
      this.setState({
        dataProduk: data
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
                >{ this.props.navigation.state.params.kategori }</Text>
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
            { this.state.dataProduk.map((kategori, index) =>
            <View key={ kategori.id } style={{margin: 5,height: 170, width: '47%', justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
            <Thumbnail square style={{ width: '100%', height: '70%' }} source={{uri: `http://156.67.214.64/trade/produk/${kategori.file}`}} />
            <Text 
              style={{color: 'white', fontSize: 12, fontWeight: 'bold', marginTop: 10}}
              onPress= { () => navigate('DetailProduk', { id:kategori.id }) }  
            >
            { kategori.produk }
            </Text>
            </View>
            )}
        </Grid>
        </Content>
    </Container>
    );
  }
}