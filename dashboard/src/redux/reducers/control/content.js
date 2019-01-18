const contentReducer = (
  state = {
    view: '',
    traces: [],
    subView: '',
    cachedUrl: {},
  }, action)=>{
  switch (action.type) {
    case 'cacheUrl':
      var newCachedUrl = state.cachedUrl;
      newCachedUrl[action.payload.filename] = action.payload.url;
     return {...state, cachedUrl: newCachedUrl}
    case 'setSubView':
      return {...state, subView: action.payload}
    case 'backToHome':
      return {...state, traces: state.traces.slice(0, 1), view: state.traces[0]};
    case 'clearView':
      return {...state, traces: [], view: ''};
    case 'pullView':
      if(state.traces.length === 0){ return state; }
      return {...state, traces: state.traces.slice(0, state.traces.length - 1), view: state.traces[state.traces.length - 2]};
    case 'pushView':
      return {...state, traces: [...state.traces, action.payload], view: action.payload};
    default:
      return state;
  }
}

export default contentReducer;
