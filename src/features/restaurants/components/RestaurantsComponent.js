import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

export const RestaurantsComponent = ({restaurant = {}}) => {
  const {
    name = 'chakuch',
    icon,
    photos = [
      'https://www.collinsdictionary.com/images/thumb/restaurant_135621509_250.jpg?version=4.0.219',
    ],
    address = 'Beryanak,Tehran',
    isOpenNow = true,
    rating = 4,
    isTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: '3%',
  },
  cover: {
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    padding: '2%',
  },
});
