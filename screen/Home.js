import React, { Component } from 'react';
import axios from 'axios';
import { Image, View, ImageBackground, Linking } from 'react-native';
import {
  Drawer,
  Container,
  Content, 
  Header,
  Left,
  Button,
  Body, 
  Icon, 
  Title,
  Thumbnail,
  Text
} from 'native-base';

import CardSilder from 'react-native-cards-slider';
import ImageSlider from 'react-native-image-slider';
import { Col, Row, Grid } from 'react-native-easy-grid';

import SideBar from './SideBar';

export default class Home extends Component {
    
    closeDrawer = () => {
        this.drawer._root.close()
      };
    
    openDrawer = () => {
    this.drawer._root.open()
    };

    constructor(props) {
        super(props)
        this.state = {
          dataIkm: [],
          dataProduk: [],
          dataImage:[]
        }
      }
    
      componentWillMount = () => {
        axios.get('http://156.67.214.64/api/index.php/ikm')
        .then(({ data }) => {
          this.setState({
            dataIkm: data
          })
        })
        .catch(err => console.log(err))

        axios.get('http://156.67.214.64/api/index.php/produk')
        .then(({ data }) => {
          this.setState({
            dataProduk: data
          })
        })
        .catch(err => console.log(err))

        axios.get('http://156.67.214.64/api/index.php/slide')
        .then(({ data }) => {
          this.setState({
            dataImage: data
          })
        })
        .catch(err => console.log(err))

      }

  render() {

    const { navigate } = this.props.navigation;

    return (
    <Drawer
    ref={(ref) => { this.drawer = ref; }}
    content={<SideBar navigator={this.props.navigation} />}
    onClose={() => this.closeDrawer()} >
    <Container>
        <Header>
            <Left>
              <Button transparent onPress={ () => this.openDrawer() } >
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
            <Text 
                  style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}
                >Trade Itah</Text>
            </Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }} >
        <Grid style={{ alignSelf: 'center' }}>
        <Col style={{
            width: '100%', 
            height: 200
        }}>
            <ImageSlider images={ this.state.dataImage }/>
        </Col>
        </Grid>
        <Grid style={{ marginTop: 5 }}>
            <Col 
            style={{ margin: 5, height: 100, alignItems: 'center' }}
            onPress = { () => navigate('Profil') }
            >
                <Thumbnail large source={{uri: 'http://icons.iconarchive.com/icons/blackvariant/button-ui-system-folders-alt/512/Users-icon.png'}} />
                <Text style={{ fontSize: 10 }}>Profil</Text>
            </Col>
            <Col 
            style={{ margin: 5, height: 100, alignItems: 'center' }}
            onPress = { () => navigate('Ikm') }
            >
                <Thumbnail large source={{uri: 'http://icons.iconarchive.com/icons/blackvariant/button-ui-system-folders-alt/512/Group-icon.png'}} />
                <Text style={{ fontSize: 10 }}>IKM</Text>
            </Col>
            <Col 
            style={{ margin: 5, height: 100, alignItems: 'center' }}
            onPress = { () => navigate('Berita') }
            >
                <Thumbnail large source={{uri: 'http://icons.iconarchive.com/icons/blackvariant/button-ui-system-folders-alt/512/Desktop-icon.png'}} />
                <Text style={{ fontSize: 10 }}>Berita</Text>
            </Col>
            <Col 
            style={{ margin: 5, height: 100, alignItems: 'center' }}
            onPress={ ()=>{ Linking.openURL('http://156.67.214.64/trade/web/register')}}
            >
                <Thumbnail large source={{uri: 'http://icons.iconarchive.com/icons/blackvariant/button-ui-system-folders-alt/512/Documents-icon.png'}} />
                <Text style={{ fontSize: 10 }}>Register</Text>
            </Col>
        </Grid>
        <Text style={{ marginTop: 20, marginLeft: 10 }}>
            IKM
        </Text>
        <CardSilder style={{ marginTop: 5 }}>
            { this.state.dataIkm.map((ikm, index) =>
            <View key={ index } style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
            <ImageBackground 
                style={{ width: '100%', height: '100%' }} 
                source={{uri: `http://156.67.214.64/trade/ikm/${ikm.file}`}} 
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
                        transparent light onPress={ () => navigate('DetailIkm', { id:ikm.id }) }>
                        <Text  
                          style={{fontSize: 24, fontWeight: 'bold'}} 
                        >{ ikm.ikm }</Text>
                      </Button>
                  </Col>
              </Grid>
            </View>
            )}
            </CardSilder>
        <Text style={{ marginTop: 20, marginLeft: 10 }}>
            Produk
        </Text>
        <Grid style={{ 
            marginTop: 5, 
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center' 
            }}>
            { this.state.dataProduk.map((produk, index) =>
            <View key={ index } style={{margin: 5,height: 170, width: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
            <ImageBackground 
                style={{ width: '100%', height: '100%' }} 
                source={{uri: `http://156.67.214.64/trade/produk/${produk.file}`}} 
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
                        transparent light onPress={ () => navigate('DetailProduk', { id:produk.id }) }>
                        <Text  
                          style={{fontSize: 12, fontWeight: 'bold'}} 
                        >{ produk.produk }</Text>
                      </Button>
                  </Col>
              </Grid>
            </View>
            )}
        </Grid>            
        </Content>
    </Container>
    </Drawer>
    );
  }
}