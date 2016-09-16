
export function incrementCount() {
  return {
    type: 'INCREMENT_COUNT',
  }
}

export function decrementCount() {
  return {
    type: 'DECREMENT_COUNT',
  }
}

export function changeTitle (title) {
  return {
    type: 'CHANGE_TITLE',
    title: title
  }
}