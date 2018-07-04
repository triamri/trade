import React, { Component } from 'react';
import { Image, View } from 'react-native';
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
            <Body></Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }} >
        <Grid style={{ alignSelf: 'center' }}>
        <Col style={{
            width: '100%', 
            height: 200
        }}>
            <ImageSlider images={[
                'http://www.journalpolice.id/wp-content/uploads/2017/12/IMG-20171213-WA0000.jpg',
                'https://i0.wp.com/beritakalteng.com/wp-content/uploads/2017/12/IMG-20171212-WA0006.jpg',
                'https://i2.wp.com/gerakkalteng.com/wp-content/uploads/2018/05/IMG-20180531-WA0021.jpg'
            ]}/>
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
            onPress = { () => navigate('Register') }
            >
                <Thumbnail large source={{uri: 'http://icons.iconarchive.com/icons/blackvariant/button-ui-system-folders-alt/512/Documents-icon.png'}} />
                <Text style={{ fontSize: 10 }}>Register</Text>
            </Col>
        </Grid>
        <Text style={{ marginTop: 20, marginLeft: 10 }}>
            IKM
        </Text>
        <CardSilder style={{ marginTop: 5 }}>
            <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                IKM 1
            </Text>
            </View>
            <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightsalmon'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                IKM 2
            </Text>
            </View>
            <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'teal'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                IKM 3
            </Text>
            </View>
            <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightpink'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                IKM 4
            </Text>
            </View>
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
            <View style={{margin: 5,height: 170, width: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'skyblue'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                Produk 1
            </Text>
            </View>
            <View style={{margin: 5,height: 170, width: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightsalmon'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                Produk 2
            </Text>
            </View>
            <View style={{margin: 5,height: 170, width: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'teal'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                Produk 3
            </Text>
            </View>
            <View style={{margin: 5,height: 170, width: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightpink'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                Produk 4
            </Text>
            </View>
        </Grid>            
        </Content>
    </Container>
    </Drawer>
    );
  }
}