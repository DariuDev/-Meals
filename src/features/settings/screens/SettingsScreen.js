import React, {useContext} from 'react';
import {Text} from 'react-native';
import {List, Avatar} from 'react-native-paper';
import {SafeArea} from '../../../components/utility/SafeArea';
import {
  SettingsItem,
  AvatarContainer,
  TextContainer,
} from './SettingsStyleScreen';
import {AuthenticationContext} from '../../../services/authentication/AuthenticationContext';

export const SettingsScreen = ({navigation}) => {
  const {onLogout, user} = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
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
