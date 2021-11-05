export const initialState = {
    color:{
        green   : 0,
        red     : 0,
        blue    : 0,
        yellow  : 0,
    },
    teamColor: null
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
        default:
            return state;
    }
}

export default rootReducer;