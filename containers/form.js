import React from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'react-native-elements'

const Form = props => {
  return (
    <View cls="flx-i aic">
      <Text cls="f1 b mb4">Form</Text>
      <ScrollView cls="">
        <KeyboardAvoidingView cls="pv3">
          <Text cls="tl f3 ">Push-ups</Text>
          <TextInput
            cls="ba w5 h2"
            value={pathOr('', ['workout', 'pushups'], props)}
            onChangeText={value =>
              props.dispatch({ type: 'SET_PUSHUPS', payload: value })}
            keyboardType="default"
            keyboardAppearance="dark"
          />
        </KeyboardAvoidingView>
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
        <KeyboardAwareScrollView behavior="padding" cls="pv3">
          <View>
            <Text cls="tl f3">Date</Text>
            <TextInput
              cls="ba w5 h2"
              value={pathOr('', ['workout', 'date'], props)}
              onChangeText={value =>
                props.dispatch({ type: 'SET_DATE', payload: value })}
            />
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
      <Button
        onPress={() => {
          props.dispatch({ type: 'SET_WORKOUTS', payload: props.workout })
          props.dispatch({ type: 'CLEAR_WORKOUT' })
          props.history.push('/list')
        }}
        cls="mb7 w5"
        raised
        icon={{ name: 'save', size: 32 }}
        buttonStyle={{ backgroundColor: 'gray', borderRadius: 10 }}
        textStyle={{ textAlign: 'center' }}
        title="Save"
      />
    </View>
  )
}

const connector = connect(store => store)

export default connector(wrap(Form))
