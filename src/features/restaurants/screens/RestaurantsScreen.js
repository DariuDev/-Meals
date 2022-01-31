import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantsComponent} from '../components/RestaurantsComponent';

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Searchbar placeholder={'search'} />
      </View>
      <View style={styles.list}>
        <RestaurantsComponent />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
  searchBar: {
    margin: '2%',
  },
  list: {
    flex: 1,
  },
});
