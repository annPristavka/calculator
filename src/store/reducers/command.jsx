export const ADD = 'ADD'
export const RESET = 'RESET'

const initialState = {
  history: [],
}

export function historyReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        history: [...state.history, action.payload],
      }
    case RESET:
      return { history: [] }

    default:
      return state
  }
}

export const allHistory = (payload) => ({
  type: ADD,
  payload,
})
export const resetHistory = (payload) => ({
  type: RESET,
  payload,
})
