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
