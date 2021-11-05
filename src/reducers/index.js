export const initialState = {
    color:{
        green   : 0,
        red     : 0,
        blue    : 0,
        yellow  : 0,
    },
    teams       : [],
    teamColor   : null,
    results     : [],
    categories  : [],
    random      : 0,
    display     : false
}; 

function rootReducer(state, action) {
    switch (action.type) {
        case 'GREEN':
            return {
                ...state,
                color: {
                    ...state.color,
                    green: action.value
                }
            };
        case 'RED':
            return {
                ...state,
                color: {
                    ...state.color,
                    red: action.value
                }
            };
        case 'BLUE':
            return {
                ...state,
                color: {
                    ...state.color,
                    blue: action.value
                }
            };
        case 'YELLOW':
            return {
                ...state,
                color: {
                    ...state.color,
                    yellow: action.value
                }
            };
        case 'SET_TEAM_COLOR':
            return {
                ...state,
                teamColor: action.value
            };
        
        case 'TEAMS' :
            return{
                ...state,
                teams: action.teams
        };  
        case 'RESULTS' :
            return{
                ...state,
                results: action.results
            };
        case 'CATEGORIES' :
            return{
                ...state,
                categories: action.categories
            };
            
        case 'RANDOM' :
            return{
                ...state,
                random: action.random
            };
        case 'DISPLAY' :
            return{
                ...state,
                display: action.display
            };            
        default:
            return state;
    }
}

export default rootReducer;