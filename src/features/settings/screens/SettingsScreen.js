import React, {useCallback, useContext, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {List, Avatar} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {SafeArea} from '../../../components/utility/SafeArea';
import {
  SettingsItem,
  AvatarContainer,
  TextContainer,
} from './SettingsStyleScreen';
import {AuthenticationContext} from '../../../services/authentication/AuthenticationContext';

export const SettingsScreen = ({navigation}) => {
  const {onLogout, user} = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async currentUser => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useCallback(() => {
    getProfilePicture(user);
  }, [user]);
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{uri: photo}}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <TextContainer>
          <Text>{user.email}</Text>
        </TextContainer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View Your Favourites"
          left={props => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
      </List.Section>
      <List.Section>
        <SettingsItem
          title="Logout"
          description="Log out from Account"
          left={props => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
