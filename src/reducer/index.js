import * as actions from "../actions";
const initialState={
    characters:[],
    characterDetails:{},
    filters:{
        status:'',
        type:'',
        species:'',
        gender:'',
    }
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
        case actions.GET_CHARACTER_BY_NAME:
            return {
                ...state,
                characters: [...action.payload]
            }
        case actions.SET_FILTER:
            return{
                ...state,
                filters:{...state.filters, [action.payload.filterType]:action.payload.filter}
            }
        default:
            return state;
    }
    
}


export default rootReducer