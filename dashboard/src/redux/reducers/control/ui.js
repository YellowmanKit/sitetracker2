const uiReducer = (
  state = {
    minWidth: 360,
    maxWidth: 2048,
    minHeight: 540,
    maxHeight: 1440,
    windowWidth: 0,
    windowHeight: 0,
    basicStyle: {
      width: 0,
      height: 0,
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center'
    },
    styles: {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: '100% 100%',
        flexShrink: 0
      },
      area: {
        width: '100%',
        display: 'flex',
        flexFlow: 'row warp'
      },
      border: {
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#dddddd'
      },
      button: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        backgroundSize: '100% 100%'
      }
    },
    colors: {
      green: '#91c33b',
      blue: '#2359a3',
      deepBlue: '#0a2647',
      textGrey: '#4a4a4a',
      lightGrey: '#dddddd',
    }
  }, action)=>{
  switch (action.type) {
    case 'setDimension':
      const windowWidth = action.payload.width;
      const windowHeight = action.payload.height;
      const basicStyle =
      {...state.basicStyle,
        width:
        windowWidth < state.minWidth? state.minWidth:
        windowWidth > state.maxWidth? state.maxWidth:
        windowWidth * 0.9999,
        height:
        windowHeight < state.minHeight? state.minHeight:
        windowHeight > state.maxHeight? state.maxHeight:
        windowHeight * 0.9999};
      return {...state,
              windowWidth: windowWidth,
              windowHeight: windowHeight,
              basicStyle: basicStyle};
    default:
      return state;
  }
}

export default uiReducer;
