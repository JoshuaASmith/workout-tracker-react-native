import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Constants } from 'expo'
import Form from './containers/form'
import store from './store'
import { Provider } from 'react-redux'
import NativeTachyons from 'react-native-style-tachyons'
NativeTachyons.build(
  {
    rem: 16
  },
  StyleSheet
)

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Workout Tracker</Text>
        <Form />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
