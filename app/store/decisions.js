
export const ASDF = 'ASDF'

export function asdf() {
  return {
    type: ASDF
  }
}

const initialState = {
  lastUpdated: '',
  isFetching: false,
  error: false,
  decisions: {},
  listeners: []
}

export default function decisions(state = initialState, action) {
  switch(action.type) {
    case ASDF:
      return {
        ...state
      }
    default:
      return state
  }
}
