const initialState = {
    b: 2
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_B':
        return {
            ...state,
            b: state.b + 1
        }
    }
    return state
}

export default reducer