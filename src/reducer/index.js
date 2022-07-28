import * as actions from "../actions";
const initialState={
    characters:[],
    characterDetails:{},
    search:'',
    error:'',
    filters:{
        status:'',
        type:'',
        species:'',
        gender:'',
        },
    next:'',
    prev:'',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_ALL_CHARACTERS: //NO ESTOY TOMANDO EN CUENTA EL PAGINADO TODAVÍA,IR A ACTIONS
            return {
                ...state,
                characters: [...action.payload.results],
                next: action.payload.info.next,
                error:'',
            }
        case actions.GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetails: action.payload,
            }
        case actions.GET_CHARACTER_BY_NAME:
            return {
                ...state,
                characters: [...action.payload.data.results],
                next: action.payload.data.info.next,
                prev: action.payload.data.info.prev,
                error:'',
            }
        case actions.SET_FILTER:
            return{
                ...state,
                filters:{...state.filters, [action.payload.filterType]:action.payload.filter}
            }
        case actions.SET_SEARCH:
            return{
                ...state,
                search: action.payload
            }
        case actions.RESET_PAGES:
            return{
                ...state,
                next: action.payload,
                prev:null,
            }
        case actions.GET_ERROR:
            return{
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
    
}


export default rootReducer