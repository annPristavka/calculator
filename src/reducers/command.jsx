const ALL_HISTORY = 'GET_ALL_HISTORY'

const initialState = {
    history: []
}

export const historyReducer = (state = initialState, action) => {
    switch (action.type){
        case ALL_HISTORY: 
            return {...state, books: [...action.payload]}

        default:
            return state;
    }

}

export const allHistory = (payload) => ({type: ALL_HISTORY}, payload)