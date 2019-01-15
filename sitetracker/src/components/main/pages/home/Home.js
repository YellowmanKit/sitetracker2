import React from 'react';
import View from 'components/main/pages/home/views/View';

import Entry from './views/entry/Entry';

class Home extends View {

  componentDidMount(){
    this.actions.content.pushView('entry');
  }

  componentWillReceiveProps(newProps){
    this.setState({
      view: newProps.app.store.content.view,
      deadView: this.state.view !== newProps.app.store.content.view? this.state.view: this.state.deadView
    });
  }

  views(view, animatedStyle){
    const app = this.app;
    app.animatedStyle = animatedStyle;
    if(view === ''){
      return null;
    }
    switch (view) {
      case 'entry':
        return <Entry app={app}/>;
      default:
        return null;
    }
  }

  render() {
    this.init(this.props);
    const pageStyle = {...this.ui.basicStyle, ...{
      justifyContent: 'flex-start',
      background: 'transparent',
      backgroundSize: '100% 100%',
      position: 'relative',
      backgroundColor: 'white'
    }}
    const deadView = this.state.deadView;
    const view = this.state.view;

    return(
      <div style={pageStyle}>
        {this.animatedView(this.views.bind(this), deadView? deadView: view, deadView? false: true)}
      </div>
    )
  }
}


export default Home;
