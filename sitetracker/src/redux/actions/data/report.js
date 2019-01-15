export const setCurrentStage = (index) =>{
  return {
    type: 'setCurrentStage',
    payload: index
  }
}

export const viewReport = (report) =>{
  return {
    type: 'viewReport',
    payload: report
  }
}
