import { saveDecisionFb } from 'helpers/api'

export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const UPDATE_MODAL_TEXT = 'UPDATE_MODAL_TEXT'

export function openModal() {
  return {
    type: OPEN_MODAL
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function updateModalText(textType, text) {
  return {
    type: UPDATE_MODAL_TEXT,
    textType,
    text
  }
}

export function saveAndCloseModal(decision) {
  return function(dispatch) {
    saveDecisionFb(decision)
      .then(() => dispatch(closeModal()))
      .catch((error) => console.warn('Error saving decision.', error))
  }
}

const initialState = {
  isOpen: false,
  firstDecisionText: '',
  secondDecisionText: ''
}

export default function modal(state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true
      }
    case CLOSE_MODAL:
      return initialState
    case UPDATE_MODAL_TEXT:
      return {
        ...state,
        [action.textType]: action.text
      }
    default:
      return state
  }
}
