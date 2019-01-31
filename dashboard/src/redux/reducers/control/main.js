const mainReducer = (
  state = {
    status: 'init',
    language: 'english',
    photoViewer: 'off',
    version: 'v1.0.0'
  }, action)=>{
  switch (action.type) {
    case 'setPhotoViewer':
      return {...state, photoViewer: action.payload};
    case 'setStatus':
      return {...state, status: action.payload};
    default:
      return state;
  }
}

export default mainReducer;
