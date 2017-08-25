import { listenToDecisionsFb, fetchSingleDecisionFb } from 'helpers/api'
import { addListener } from 'store/listeners'
import { addUser } from 'store/users'

const ADD_DECISION = 'ADD_DECISION'
const SETTING_DECISIONS_LISTENER = 'SETTING_DECISIONS_LISTENER'
const SETTING_DECISIONS_LISTENER_SUCCESS = 'SETTING_DECISIONS_LISTENER_SUCCESS'
const SETTING_DECISIONS_LISTENER_ERROR = 'SETTING_DECISIONS_LISTENER_ERROR'

function addDecision(decisionId, decision) {
  return {
    type: ADD_DECISION,
    decisionId,
    decision
  }
}

function settingDecisionsListener() {
  return {
    type: SETTING_DECISIONS_LISTENER
  }
}

function settingDecisionsListenerSuccess(data) {
  return {
    type: SETTING_DECISIONS_LISTENER_SUCCESS,
    data,
    timestamp: Date.now()
  }
}

function settingDecisionsListenerError() {
  return {
    type: SETTING_DECISIONS_LISTENER_ERROR,
    error: 'Error fetching decisions'
  }
}

export function handleDecisionsListener() {
  return function(dispatch, getState) {
    if (getState().listeners.decisions) return

    dispatch(addListener('decisions'))
    dispatch(settingDecisionsListener())

    listenToDecisionsFb((decisions) => {
      dispatch(settingDecisionsListenerSuccess(decisions))
      Object.keys(decisions).map((decisionId) => dispatch(addUser(decisions[decisionId].author)))
    }, (error) => dispatch(settingDecisionsListenerError()))
  }
}

export function handleSingleDecision(decisionId) {
  return function(dispatch) {
    fetchSingleDecisionFb(decisionId)
      .then((decision) => dispatch(addDecision(decisionId, decision)))
      .catch((error) => console.warn('Error fetching decision', error))
  }
}

const initialState = {
  lastUpdated: 0,
  isFetching: true,
  error: '',
  decisions: {}
}

export default function decisions(state = initialState, action) {
  switch(action.type) {
    case ADD_DECISION:
      return {
        ...state,
        isFetching: false,
        decisions: {
          ...state.decisions,
          [action.decisionId]: action.decision
        }
      }
    case SETTING_DECISIONS_LISTENER:
      return {
        ...state,
        isFetching: true
      }
    case SETTING_DECISIONS_LISTENER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: action.timestamp || state.lastupdated,
        error: '',
        decisions: {
          ...state.decisions,
          ...action.data
        }
      }
    case SETTING_DECISIONS_LISTENER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}
