
function test() {
  return {
    type: 'test'
  }
}

const initialState = {}

export default function users(state = initialState, action) {
  switch(action.type) {
    case 'test':
      return {
        ...state
      }
    default:
      return state
  }
}

// const AUTH_USER = 'AUTH_USER'

// function authUser() {
//   return {
//     type: AUTH_USER
//   }
// }

// function unauthUser() {
//   return {
//     type: UNAUTH_USER
//   }
// }


// function users(state, action) {
//   switch(action.type) {
//     case AUTH_USER:
//       return {
//         ...state,
//         isAuthed
//       }
//     default:
//       return state
//   }
// }
