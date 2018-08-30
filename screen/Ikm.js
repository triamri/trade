import React, { Component } from 'react';
import axios from 'axios';
import { Image } from 'react-native';
import { 
  Container, 
  Header, 
  Content, 
  Card, 
  CardItem, 
  Thumbnail, 
  Text, 
  Button, 
  Icon, 
  Left, 
  Body, 
  Right 
} from 'native-base';

export default class Ikm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataIkm: []
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
                >UKM Berorientasi Ekspor</Text>
            </Body>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
        { this.state.dataIkm.map((ikm, index) =>
          <Card key={ index }>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: `http://156.67.214.64/ikm/${ikm.file}`}} />
                <Body>
                  <Text 
                    onPress= { () => navigate('DetailIkm', { id: ikm.id })}
                    >{ ikm.ikm }</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        ) }
        </Content>
      </Container>
    );
  }
}