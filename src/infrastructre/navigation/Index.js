import React from 'react';
import {AppNavigator} from './AppNavigator';

export const Navigation = () => {
  return <AppNavigator />;
};
// import React, {useContext} from 'react';
// import {View, Text} from 'react-native';
// import {AppNavigator} from './AppNavigator';
// import {AuthenticationContext} from '../../services/authentication/AuthenticationContext';

// export const Navigation = () => {
//   const {isAuthenticated} = useContext(AuthenticationContext);
//   return isAuthenticated ? (
//     <AppNavigator />
//   ) : (
//     <View>
//       <Text>not authenticated</Text>
//     </View>
//   );
// };