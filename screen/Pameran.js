import React, { Component } from 'react';
import axios from 'axios';
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

export default class Pameran extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataPameran: []
    }
  }

  componentWillMount = () => {
    axios.get('http://156.67.214.64/api/index.php/pameran')
    .then(({ data }) => {
      this.setState({
        dataPameran: data
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
                >Pameran</Text>
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
            { this.state.dataPameran.map((pameran, index) =>
            <View key={ index } style={{marginTop: 5,height: 170, width: '100%'}}>
              <ImageBackground 
                resizeMethod="resize"
                style={{ width: '100%', height: '100%' }} 
                source={{uri: `http://156.67.214.64/pameran/${pameran.file}`}} 
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
                        transparent light onPress={ () => navigate('DetailPameran', { id:pameran.id }) }>
                        <Text  
                          style={{fontSize: 24, fontWeight: 'bold'}} 
                        >{ pameran.judul }</Text>
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