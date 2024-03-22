
export const todoReducer = (initialState = [] , action = {} ) => {
    switch (action.type) {
        case 'ABC':
            throw new Error('Action.type = ABC not implemented');
        case 'ADD_TODO':
            return [...initialState, action.payload];
        default:
            return initialState;
    }


}

