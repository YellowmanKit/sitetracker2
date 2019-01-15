const mainReducer = (
  state = {
    status: 'init',

    photoUrl: null,
    photoBlob: null,

    language: 'english',
    version: 'v1.0.0',

  }, action)=>{
  switch (action.type) {
    case 'setPhoto':
      if(!action.payload){ return state; }
      return {...state, photoUrl: action.payload.url, photoBlob: action.payload.blob};
    case 'setStatus':
      return {...state, status: action.payload};
    default:
      return state;
  }
}

export default mainReducer;
