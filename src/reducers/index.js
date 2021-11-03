const initialState = {

/* ********************COLOR ******************** */

colors:{
    1: {id:1, color:"green", is_used:0},
    2: {id:2, color:"red", is_used:0},
    3: {id:3, color:"blue", is_used:0},
    4: {id:4, color:"yellow", is_used:0}
}

}

function reducer(state, action) {
    switch (action.type) {
      case 'green':
        return {color: state.color[1]};
      case 'red':
        return {color: state.color[2]};
      case 'blue':
        return {color: state.color[3]};
      case 'yellow':
        return {color: state.color[4]};   
      case 'used':
        return {is_used: state.is_used=1};
      default:
        throw new Error();
    }
  }