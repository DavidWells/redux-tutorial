
const initialState = {
  count: 0,
  activeTitle: 'Sidebar',
}

export default function reduxReducer (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT': {
      /* ES5 equivalent
      var currentCount = state.count
      var newCount = {
         count: currentCount + 1
      }
      var newState = Object.assign({}, state, newCount);
      return newState
       */
      return {
        ...state,
        count: state.count + 1,
      }
    }
    case 'DECREMENT_COUNT': {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    case 'CHANGE_TITLE': {
      return {
        ...state,
        activeTitle: action.title,
      }
    }
    default:
      // always return state in case action isn't matched
      return state
  }
}