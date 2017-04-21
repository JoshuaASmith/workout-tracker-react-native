import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Constants } from 'expo'
import Form from './containers/form'
import List from './containers/list'
import store from './store'
import { Provider } from 'react-redux'
import { NativeRouter, Route } from 'react-router-native'
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
      <NativeRouter>
        <View style={styles.container}>
          <Text>Workout Tracker</Text>
          <Route exact path="/" component={Form} />
          <Route path="/list" component={List} />
        </View>
      </NativeRouter>
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
