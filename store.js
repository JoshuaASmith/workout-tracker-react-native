import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { set, lensProp } from 'ramda'

const initialWorkout = {
  pushups: '',
  situps: '',
  milesRun: '',
  milesBiked: '',
  date: ''
}

const store = createStore(
  combineReducers({
    workout: (state = initialWorkout, action) => {
      switch (action.type) {
        case 'SET_PUSHUPS':
          return set(lensProp('pushups'), action.payload, state)
        case 'SET_SITUPS':
          return set(lensProp('situps'), action.payload, state)
        case 'SET_MILES_RUN':
          return set(lensProp('milesRun'), action.payload, state)
        case 'SET_MILES_BIKED':
          return set(lensProp('milesBiked'), action.payload, state)
        case 'SET_DATE':
          return set(lensProp('date'), action.payload, state)
        default:
          return state
      }
    },
    workouts: () => null
  }),
  applyMiddleware(thunk)
)

export default store
