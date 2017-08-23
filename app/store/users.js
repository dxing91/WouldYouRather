import auth, { logout, saveUser } from 'helpers/auth'
import { fetchUserDecisions } from 'helpers/api'

const ADD_USER = 'ADD_USER'
const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER'
const ADD_USERS_MADE_DECISIONS = 'ADD_USERS_MADE_DECISIONS'
const ADD_USER_DECISION = 'ADD_USER_DECISION'

export function addUser() {
  return {
    type: ADD_USER
  }
}

export function authUser(uid) {
  return {
    type: AUTH_USER,
    uid
  }
}

export function unauthUser() {
  return {
    type: UNAUTH_USER
  }
}

export function fetchingUser() {
  return {
    type: FETCHING_USER
  }
}

export function fetchingUserFailure() {
  return {
    type: FETCHING_USER_FAILURE
  }
}

export function fetchingUserSuccess(uid, user, timestamp) {
  return {
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp
  }
}

export function removeFetchingUser() {
  return {
    type: REMOVE_FETCHING_USER
  }
}

export function addUserDecision() {
  return {
    type: ADD_USER_DECISION
  }
}

export function addUsersMadeDecisions(uid, decisions) {
  return {
    type: ADD_USERS_MADE_DECISIONS,
    uid,
    decisions
  }
}

export function handleAuth() {
  return function(dispatch) {
    dispatch(fetchingUser())
    return auth().then(({user, credential}) => {
      const userData = user.providerData[0]
      const userInfo = {
        name: userData.displayName,
        uid: user.uid
      }
      return dispatch(fetchAndHandleDecisions(user.uid))
        .then(() => dispatch(fetchingUserSuccess(user.uid, userInfo, Date.now())))
    })
    .then(({user}) => saveUser(user)) 
    .then((user) => dispatch(authUser(user.uid)))
    .catch((error) => dispatch(fetchingUserFailure()))
  }
}

export function handleUnauth() {
  return function(dispatch) {
    return logout().then(() => dispatch(unauthUser()))
  }
}

export function fetchAndHandleDecisions(uid) {
  return function(dispatch) {
    return fetchUserDecisions(uid)
      .then((decisions) => dispatch(addUsersMadeDecisions(uid, decisions)))
      .catch((err) => console.warn(err))
  }
}

const initialUserState = {
  info: {
    name: '',
    uid: '',
    avatar: ''
  },
  lastUpdated: '',
  decisionsMade: []
}

function user(state = initialUserState, action) {
  switch(action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp
      }
    default:
      return state
  }
}

const initialState = {
  isAuthed: false,
  isFetching: true,
  error: '',
  authedId: ''
}

export default function users(state = initialState, action) {
  switch(action.type) {
    // case ADD_USER:
    //   return {
    //     ...state
    //   }
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid
      }
    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        authedId: ''
      }
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: 'Error fetching user'
      }
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        [action.uid]: user(state[action.uid], action)
      }
    case REMOVE_FETCHING_USER:
      return {
        ...state,
        isFetching: false
      }
    case ADD_USERS_MADE_DECISIONS:
      return {
        ...state,
        [action.uid]: {
          ...state[action.uid],
          decisionsMade: action.decisions
        }
      }
    // case ADD_USER_DECISION:
    //   return {
    //     ...state
    //   }
    default:
      return state
  }
}
