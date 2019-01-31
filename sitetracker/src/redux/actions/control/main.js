export const setGeoLocated = (geoLocated) =>{
  return {
    type: 'setGeoLocated',
    payload: geoLocated
  }
}

export const setSignature = (signature) =>{
  return {
    type: 'setSignature',
    payload: signature
  }
}

export const setPhotoIndex = (index) =>{
  return {
    type: 'setPhotoIndex',
    payload: index
  }
}

export const resetPhoto = () =>{
  return {
    type: 'resetPhoto'
  }
}

export const setPhoto = (photo) =>{
  return {
    type: 'setPhoto',
    payload: photo
  }
}

export const setStatus = (status) =>{
  return {
    type: 'setStatus',
    payload: status
  }
}
