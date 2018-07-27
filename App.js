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
import Informasi from './screen/Informasi';
import DetailInformasi from './screen/DetailInformasi';
import Agenda from './screen/Agenda';
import DetailAgenda from './screen/DetailAgenda';
import Video from './screen/Video';
import DetailVideo from './screen/DetailVideo';
import Dokumentasi from './screen/Dokumentasi';
import DetailDokumentasi from './screen/DetailDokumentasi';
import DetailImage from './screen/DetailImage';
import Pameran from './screen/Pameran';
import DetailPameran from './screen/DetailPameran';

//ikm
import Ikm from './screen/Ikm';
import DetailIkm from './screen/DetailIkm';
import Kategori from './screen/Kategori';
import Produk from './screen/Produk';
import KategoriProduk from './screen/KategoriProduk';
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
  Informasi: {
    screen: Informasi
  },
  DetailInformasi: {
    screen: DetailInformasi
  },
  Agenda: {
    screen: Agenda
  },
  DetailAgenda: {
    screen: DetailAgenda
  },
  Pameran: {
    screen: Pameran
  },
  DetailPameran: {
    screen: DetailPameran
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
  Kategori: {
    screen: Kategori
  },
  Produk: {
    screen: Produk
  },
  KategoriProduk: {
    screen: KategoriProduk
  },
  DetailProduk: {
    screen: DetailProduk
  },
  Dokumentasi: {
    screen: Dokumentasi
  },
  DetailDokumentasi: {
    screen: DetailDokumentasi
  },
  DetailImage: {
    screen: DetailImage
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