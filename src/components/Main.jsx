import { StyleSheet, View } from 'react-native';
//import Constants from 'expo-constants';

import RepositoryList from './RepositoryList';
//import Text from './Text';
import AppBar from './AppBar';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />


      <RepositoryList />
    </View>
  );
};

export default Main;
