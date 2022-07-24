import * as actions from "../actions";
const initialState={
    characters:[],
    characterDetails:{},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_ALL_CHARACTERS: //NO ESTOY TOMANDO EN CUENTA EL PAGINADO TODAVÍA,IR A ACTIONS
            return {
                ...state,
                characters: [...action.payload]
            }
        case actions.GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetails: action.payload,
            }
        
        default:
            return state;
    }
}


export default rootReducer