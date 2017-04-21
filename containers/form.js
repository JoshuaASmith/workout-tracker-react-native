import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { pathOr } from 'ramda'
import { connect } from 'react-redux'

const Form = props => {
  return (
    <View cls="flx-i aic">
      <Text cls="f1 b mb4">Form</Text>
      <View cls="pv3">
        <Text cls="tl f3 ">Push-ups</Text>
        <TextInput
          cls="ba w5 h2"
          value={pathOr('', ['workout', 'pushups'], props)}
          onChangeText={value =>
            props.dispatch({ type: 'SET_PUSHUPS', payload: value })}
          keyboardType="numeric"
        />
      </View>
      <View cls="pv3">
        <Text cls="tl f3">Sit-ups</Text>
        <TextInput
          cls="ba w5 h2"
          value={pathOr('', ['workout', 'situps'], props)}
          onChangeText={value =>
            props.dispatch({ type: 'SET_SITUPS', payload: value })}
          keyboardType="numeric"
        />
      </View>
      <View cls="pv3">
        <Text cls="tl f3">Miles Run</Text>
        <TextInput
          cls="ba w5 h2"
          value={pathOr('', ['workout', 'milesRun'], props)}
          onChangeText={value =>
            props.dispatch({ type: 'SET_MILES_RUN', payload: value })}
          keyboardType="numeric"
        />
      </View>
      <View cls="pv3">
        <Text cls="tl f3">Miles Biked</Text>
        <TextInput
          cls="ba w5 h2"
          value={pathOr('', ['workout', 'milesBiked'], props)}
          onChangeText={value =>
            props.dispatch({ type: 'SET_MILES_BIKED', payload: value })}
          keyboardType="numeric"
        />
      </View>
      <View cls="pv3">
        <Text cls="tl f3">Date</Text>
        <TextInput
          cls="ba w5 h2"
          value={pathOr('', ['workout', 'date'], props)}
          onChangeText={value =>
            props.dispatch({ type: 'SET_DATE', payload: value })}
        />
      </View>
    </View>
  )
}

const connector = connect(store => store)

export default connector(wrap(Form))
