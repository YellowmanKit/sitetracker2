const userReducer = (
  state = {
    id: '',
    pw: '',
    type: '',
    createdAt: ''
  }, action)=>{
  switch (action.type) {
    case 'setUser':
      return action.payload;
    default:
      return state;
  }
}

export default userReducer;
