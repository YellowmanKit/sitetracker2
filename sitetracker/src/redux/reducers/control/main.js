const mainReducer = (
  state = {
    status: 'init',

    photoUrl: null,
    photoBlob: null,

    signatureUrl: null,
    signatureBlob: null,

    geoLocated: 'init',

    language: 'english',
    version: 'v1.0.0',
  }, action)=>{
  switch (action.type) {
    case 'setGeoLocated':
      return {...state, geoLocated: action.payload};
    case 'setSignature':
      if(!action.payload){ return state; }
      return {...state, signatureUrl: action.payload.url, signatureBlob: action.payload.blob};
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
