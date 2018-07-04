import React, { Component } from 'react'; 
import { Linking } from 'react-native';
import { 
    Container, 
    Header, 
    Content, 
    List, 
    ListItem, 
    Text, 
    Icon, 
    Left, 
    Body, 
    Right, 
    Switch,
    Thumbnail,
    H3
} from 'native-base';
    
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class ListIconExample extends Component { 

    render() { 

        const { navigate } = this.props.navigator; 

        return ( 
        <Container style={{ backgroundColor: 'white' }}> 
            <Header
                style={{
                    alignItems: 'center',
                    width: '100%',
                    height: 200}}
            >
            <Grid>
            <Col style={{
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: 'center',
                width: '100%',
                height: '100%'}}
            >
                <Thumbnail square small
                    style={{ width: '50%', height: '100%' }} 
                    source={ require('../img/logoori.png') } 
                />
            </Col>
            </Grid>
            </Header>
            <Content> 
                <List> 
                    <ListItem icon onPress={ () => navigate('Home') }> 
                        <Left> 
                            <Icon name="home" /> 
                        </Left> 
                        <Body> 
                            <Text>Home</Text> 
                        </Body> 
                    </ListItem> 
                    <ListItem icon onPress={ () => navigate('Profil') }> 
                        <Left> 
                            <Icon name="person" /> 
                        </Left> 
                        <Body> 
                            <Text>Profil</Text> 
                        </Body> 
                    </ListItem>
                    <ListItem icon onPress={ () => navigate('Visi') }> 
                        <Left> 
                            <Icon name="bulb" /> 
                        </Left> 
                        <Body> 
                            <Text>Visi & Misi</Text> 
                        </Body> 
                    </ListItem>
                    <ListItem icon onPress={ () => navigate('Struktur') }> 
                        <Left> 
                            <Icon name="people" /> 
                        </Left> 
                        <Body> 
                            <Text>Struktur</Text> 
                        </Body> 
                    </ListItem>
                    <ListItem icon onPress={ () => navigate('Berita') }> 
                        <Left> 
                            <Icon name="paper" /> 
                        </Left> 
                        <Body> 
                            <Text>Berita</Text> 
                        </Body> 
                    </ListItem>
                    <ListItem icon onPress={ () => navigate('Informasi') }> 
                        <Left> 
                            <Icon name="globe" /> 
                        </Left> 
                        <Body> 
                            <Text>Informasi</Text> 
                        </Body> 
                    </ListItem>
                    <ListItem icon onPress={ () => navigate('Ikm') }> 
                        <Left> 
                            <Icon name="albums" /> 
                        </Left> 
                        <Body> 
                            <Text>IKM</Text> 
                        </Body> 
                    </ListItem>
                    <ListItem icon onPress={ () => navigate('Produk') }> 
                        <Left> 
                            <Icon name="basket" /> 
                        </Left> 
                        <Body> 
                            <Text>Produk</Text> 
                        </Body> 
                    </ListItem>
                    <ListItem icon onPress={ () => navigate('Agenda') }> 
                        <Left> 
                            <Icon name="folder" /> 
                        </Left> 
                        <Body> 
                            <Text>Agenda</Text> 
                        </Body> 
                    </ListItem>
                    <ListItem icon onPress={ () => navigate('Dokumentasi') }> 
                        <Left> 
                            <Icon name="document" /> 
                        </Left> 
                        <Body> 
                            <Text>Dokumentasi</Text> 
                        </Body> 
                    </ListItem>
                    <ListItem icon onPress={ () => navigate('Pameran') }> 
                        <Left> 
                            <Icon name="map" /> 
                        </Left> 
                        <Body> 
                            <Text>Pameran</Text> 
                        </Body> 
                    </ListItem>
                    {/* <ListItem icon onPress={ () => navigate('Chatting') }> 
                        <Left> 
                            <Icon name="chatboxes" /> 
                        </Left> 
                        <Body> 
                            <Text>Layanan Chating</Text> 
                        </Body> 
                    </ListItem> */}
                    <ListItem icon
                        onPress={ ()=>{ Linking.openURL('http://156.67.214.64/trade/web/register')}}
                    > 
                        <Left> 
                            <Icon name="list" /> 
                        </Left> 
                        <Body> 
                            <Text>Register</Text> 
                        </Body> 
                    </ListItem>
                    <ListItem icon onPress={ () => navigate('Video') }> 
                        <Left> 
                            <Icon name="videocam" /> 
                        </Left> 
                        <Body> 
                            <Text>Video</Text> 
                        </Body> 
                    </ListItem>
                    <ListItem icon onPress={ () => navigate('Kontak') }> 
                        <Left> 
                            <Icon name="flag" /> 
                        </Left> 
                        <Body> 
                            <Text>Kontak</Text> 
                        </Body> 
                    </ListItem>
                </List> 
            </Content> 
        </Container> 
        ); 
    } 
} 