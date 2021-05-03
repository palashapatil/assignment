import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
 
import Swiper from 'react-native-swiper';
 
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  imgStyle: {
      height: '100%',
      width: '100%',
      borderRadius: 150,
      alignSelf: 'center'
  }
})
 
export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
        <View style={styles.slide1}>
            <Image source={require('../../assests/jason-cooper-iEJVyyevw-U-unsplash.jpg')} style={styles.imgStyle} resizeMode='cover' />
        </View>
        <View style={styles.slide2}>
        <Image source={require('../../assests/karsten-wurth-uZt8wD1rgeo-unsplash.jpg')} style={styles.imgStyle} resizeMode='cover' />
        </View>
        <View style={styles.slide3}>
        <Image source={require('../../assests/linh-nguyen-DNE9iZ1Kqzk-unsplash.jpg')} style={styles.imgStyle} resizeMode='cover' />
        </View>
      </Swiper>
    )
  }
}