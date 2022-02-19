import React, {useContext, useState, useEffect} from 'react';
import {Searchbar} from 'react-native-paper';
import {LocationContext} from '../../../services/locations/LocationContext';
import {SearchContainer} from './SearchStylesComponent';

export const SearchComponent = ({onFavouritesToggled, isFavouritesToggled}) => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggled}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
