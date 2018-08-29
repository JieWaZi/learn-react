const init_State = {
    number: 1,
    id:123,
}

export default (state = init_State, action) =>  {
    switch (action.type) {
    case "ADD":
        return {...state,number: state.number+action.number}
      default:
        return state
    }
  }