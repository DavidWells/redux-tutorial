# Redux Tutorial

## Install the create-react-app CLI
```
npm install -g create-react-app
```

## Create the app with create-react-app CLI
```bash
# create with create-react-app PROJECT_NAME
create-react-app redux-example
# change into the redux-example directory
cd redux-example
```

## Install Redux and React-Redux

```bash
npm i redux react-redux --save
```

## Create Your Actions

## Create Your First Reducer

## Import reducers and create store in index.js

## Wrap app in provider in index.js

## Connect your component

---

Redux is a library to manage state in your application.

It's been written about a million times! Here are some of my favorites:

I'm going to explain redux to you in plain English.

Core concepts:
- redux flows in one direction
- There is a single place that holds all state
- Actions cause state to start changing
- Reducers actually change state object via cloning it

# One direction

No, not the band. Sorry to disappoint

Data goes one way. This makes things predictable.

There is only one way to change the state through discrete actions. This makes things easier to reason about

# State lives in one place

The "store" is the place that holds the current state of your application.

"Store" is a fancy way of saying a JavaScript object.

Example:

'var state = {}'

Yay! That's easy.

# How state changes

Actions (aka events) are triggered from your application.

These actions are also just objects describing what just happened.

Example:
```
// simple action with no data
var action = {
  type: 'INCREMENT_COUNT',
}
// action with payload data
var action = {
  type: 'SET_PRODUCT',
  data: button.id
}
```

These actions follow our one way data flow and go into a thing that is called a "reducer"

A "reducer" is a fancy way of saying a function with a switch statement.

The switch statement in the "reducer" will check the type of action being passed in and if it matches a condition, it will update the state in some way.

Example:
```
const initialState = {
  count: 0,
  activeProduct: 'anypointPlatform',
}

function reduxReducer (state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT: {
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
    case SET_PRODUCT: {
      return {
        ...state,
        activeProduct: action.activeProduct,
      }
    }
    default:
      // always return state in case action isn't matched
      return state
  }
}
// button reducer action to increment
```

Simple example: https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/redux/modules/counter.js

One important thing to note here is that the "reducer" (aka function with switch statement) doesn't change the state object passed in. Instead it clones that state object and changes the copy.

This is key. Don't mutate that global state object (aka your store) directly.

By using "pure" functions, functions with no side effects, this enables some out of the box features with redux like easy undo/redo

Now your state is changed based on the event (action) triggered (dispatched) and the data reflows into the application.

# connecting the dots

2 questions you might be asking:

1. How do I get my actions inside of my application?
2. How do I connect the current state to the UI?

The answer is through a companion library called `react-redux`

`react-redux` connects your underlying react application with the single store of data and the actions that need to be dispatched by the app.

## how?

<Provider> wraps your <App> at the top level.

```
<Provider store={store}>
  <App/>
</Provider>
```

Then in your application where you need access to either actions or state, you will want to `connect` them.

```
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return {
    count: state.count, // will be this.props.count in connected component
    prop2: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);
```
