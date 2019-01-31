const mainReducer = (
  state = {
    status: 'init',

    photoUrl: [null, null, null, null],
    photoBlob: [null, null, null, null],
    photoIndex: 0,

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
    case 'setPhotoIndex':
      return {...state, photoIndex: action.payload }
    case 'resetPhoto':
      return {...state, photoUrl: [null, null, null, null], photoBlob: [null, null, null, null]}
    case 'setPhoto':
      if(!action.payload){ return state; }
      var newPhotoUrl = state.photoUrl;
      newPhotoUrl[state.photoIndex] = action.payload.url;
      var newPhotoBlob = state.photoBlob;
      newPhotoBlob[state.photoIndex] = action.payload.blob;
      return {...state, photoUrl: newPhotoUrl, photoBlob: newPhotoBlob};
    case 'setStatus':
      return {...state, status: action.payload};
    default:
      return state;
  }
}

export default mainReducer;
