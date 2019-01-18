const mainReducer = (
  state = {
    status: 'init',
    language: 'english',
    version: 'v1.0.0'
  }, action)=>{
  switch (action.type) {
    case 'setStatus':
      return {...state, status: action.payload};
    default:
      return state;
  }
}

export default mainReducer;
