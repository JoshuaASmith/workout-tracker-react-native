import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { set, lensProp, append } from 'ramda'

const initialWorkout = {
  pushups: '',
  situps: '',
  milesRun: '',
  milesBiked: '',
  date: '',
  id: new Date()
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
        case 'CLEAR_WORKOUT':
          return {}
        default:
          return state
      }
    },
    workouts: (state = [], action) => {
      switch (action.type) {
        case 'SET_WORKOUTS':
          console.log(action.payload)
          return append(action.payload, state)
        default:
          return state
      }
    }
  }),
  applyMiddleware(thunk)
)

export default store
