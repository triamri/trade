import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'; 

//profil
import Home from './screen/Home';
import Profil from './screen/Profil';
import Struktur from './screen/Struktur';
import Visi from './screen/Visi';
import Kontak from './screen/Kontak';

//media
import SplashScreen from './screen/SplashScreen';
import Berita from './screen/Berita';
import DetailBerita from './screen/DetailBerita';
import Agenda from './screen/Agenda';
import DetailAgenda from './screen/DetailAgenda';
import Video from './screen/Video';
import DetailVideo from './screen/DetailVideo';
import Dokumentasi from './screen/Dokumentasi';

//ikm
import Ikm from './screen/Ikm';
import DetailIkm from './screen/DetailIkm';
import Produk from './screen/Produk';
import DetailProduk from './screen/DetailProduk';
import Register from './screen/Register';

const NavTrade = StackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  Home: {
    screen: Home
  },
  Profil: {
    screen: Profil
  },
  Visi: {
    screen: Visi
  },
  Struktur: {
    screen: Struktur
  },
  Kontak: {
    screen: Kontak
  },
  Berita: {
    screen: Berita
  },
  DetailBerita: {
    screen: DetailBerita
  },
  Agenda: {
    screen: Agenda
  },
  DetailAgenda: {
    screen: DetailAgenda
  },
  Video: {
    screen: Video
  },
  DetailVideo: {
    screen: DetailVideo
  },
  Ikm: {
    screen: Ikm
  },
  DetailIkm: {
    screen: DetailIkm
  },
  Produk: {
    screen: Produk
  },
  DetailProduk: {
    screen: DetailProduk
  },
  Dokumentasi: {
    screen: Dokumentasi
  },
  Register: {
    screen: Register
  }
}, {
  headerMode: 'none',
  initialRouteName: 'SplashScreen'
})

export default class App extends Component {
  
  render() {
    return (
        <NavTrade />
    );
  }
}