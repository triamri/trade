import React, { Component } from 'react'; 
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
                paddingTop: 20,
                alignItems: 'center',
                width: '100%',
                height: 200}}
            >
                <Thumbnail 
                    style={{ width: 150, height: 150 }} 
                    source={{uri: 'https://2.bp.blogspot.com/-giS-lfUcwkc/WemOHkmZwBI/AAAAAAAAENg/lfbpQxbgeVchBbsw6yzY56cmALCKMkpjQCLcBGAs/s1600/kalimantan%2Btengah.png'}} 
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
                    <ListItem icon onPress={ () => navigate('Chatting') }> 
                        <Left> 
                            <Icon name="chatboxes" /> 
                        </Left> 
                        <Body> 
                            <Text>Layanan Chating</Text> 
                        </Body> 
                    </ListItem>
                    <ListItem icon onPress={ () => navigate('Register') }> 
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