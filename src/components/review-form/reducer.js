import {
  INITIAL_VALUE,
  RESET_ACTION,
  SET_RATING_DECREMENT_ACTION,
  SET_RATING_INCREMENT_ACTION,
  SET_TEXT_ACTION
} from '../../constants/constants.js'

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TEXT_ACTION:
      return {
        ...state,
        text: payload,
      }
    case SET_RATING_INCREMENT_ACTION:
      return {
        ...state,
        rating: Math.min(state.rating + 1, 5),
      }
    case SET_RATING_DECREMENT_ACTION:
      return {
        ...state,
        rating: Math.max(state.rating - 1, 1),
      }
    case RESET_ACTION:
      return INITIAL_VALUE
    default:
      return state
  }
}
