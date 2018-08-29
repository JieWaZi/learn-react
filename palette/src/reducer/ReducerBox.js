import * as types from '../action/ActionBox';


const init_State = {
    'r' : 0,
    'g' : 0,
    'b' : 0,
}

export default  function chageRGB (state = init_State, action)  {
    switch (action.type) {
    case types.CHANGE_R:
        return {...state,r:action.value}
    case types.CHANGE_G:
        return {...state,g:action.value}
    case types.CHANGE_B:
        return {...state,b:action.value}
      default:
        return state
    }
  }