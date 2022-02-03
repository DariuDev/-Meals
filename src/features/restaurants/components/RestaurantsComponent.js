/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React from 'react';
import {Text} from 'react-native';
import star from '../../../assets/star';
import open from '../../../assets/open';
import {
  RestaurantCard,
  RestaurantCardCover,
  Title,
  Section,
  Rating,
  Star,
  SectionEnd,
  Open,
  Icon,
  Address,
} from './RestaurantStylesComponent';

export const RestaurantsComponent = ({restaurant = {}}) => {
  const {
    name = 'chakuch',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.collinsdictionary.com/images/thumb/restaurant_135621509_250.jpg?version=4.0.219',
    ],
    address = 'Beryanak,Tehran',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Title>{name}</Title>
      <Section>
        <Rating>
          {ratingArray.map(() => (
            <Star xml={star} />
          ))}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variant="label" style={{color: 'red'}}>
              CLOSED TEMPORARILY
            </Text>
          )}
          {isOpenNow && <Open xml={open} />}
          <Icon source={{uri: icon}} />
        </SectionEnd>
      </Section>
      <Address>{address}</Address>
    </RestaurantCard>
  );
};
