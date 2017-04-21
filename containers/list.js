import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { connect } from 'react-redux'

const List = props => {
  return (
    <View cls="flx-i">
      <Text cls="">Test List</Text>
      {/* <Text>{JSON.stringify(props.workouts, null, 2)}</Text> */}
      <FlatList
        cls=""
        data={props.workouts}
        renderItem={({ item }) => (
          <View cls="" key={item.id}>
            <View>
              <Text cls="">{item.pushups}</Text>
            </View>
            <View>
              <Text cls="">{item.situps}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const connector = connect(state => state)

export default connector(wrap(List))
