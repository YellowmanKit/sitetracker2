import reducer from '../reducer';

const reportReducer = (
  state = {
    reports: [],
    viewingReport: {},
    currentStage: 0
  }, action)=>{
  const viewingReport = state.viewingReport;
  switch (action.type) {
    case 'setCurrentStage':
      const index = action.payload;
      if(index < 0 || index > 5){ return state; }
      return {...state, currentStage: action.payload};
    case 'updateReport':
      return {...state, viewingReport: {...viewingReport, ...action.payload} };
    case 'viewReport':
      return {...state, viewingReport: action.payload};
    case 'updateReports':
      return {...state, reports: reducer.updateElements(state.reports, action.payload)};
    default:
      return state;
  }
}

export default reportReducer;
