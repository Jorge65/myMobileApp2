import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Text from './Text'
import theme from "../theme"


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.appBar,
  },
  pressable: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    padding: 20,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.pressable}>Repositories</Text>
    </View>
  )
}

export default AppBar
