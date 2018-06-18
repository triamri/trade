import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground
} from 'react-native';

import { 
    Container,
    Header,
    Content,
    Thumbnail,
    Button,
    Icon
  } from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

export default class SplashScreen extends Component {
    
    componentWillMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        }, 5000)
    }

    render () {
        return (
            <Container>
                <Content>
                    <ImageBackground
                        style={{
                        flex: 1
                        }}
                        source={ require('../img/tradeitah.jpeg') }
                    >
                        <Grid>
                        <Col style={{
                            width: '100%',
                            height: 615
                            }}
                            >
                        </Col>
                        </Grid>
                    </ImageBackground>
                </Content>
            </Container>
        )
    }

}