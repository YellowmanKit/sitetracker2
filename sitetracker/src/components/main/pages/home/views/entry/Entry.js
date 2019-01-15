import React from 'react';
import View from 'components/main/pages/home/views/View';

import SubNav from 'components/main/items/SubNav';
import Report from './subviews/Report.js';
import History from './subviews/History.js';

class Entry extends View {

  constructor(props){
    super(props);
    this.init(this.props);
    this.state = {};
  }

  componentDidMount(){
    this.init(this.props);
    this.actions.content.setSubView('report');
  }

  subView(subView, animatedStyle){
    const app = {...this.app, ...{ animatedStyle: animatedStyle}}

    switch (subView) {
      case 'report':
        return <Report app={app}/>;
      case 'history':
        return <History app={app}/>;
      default:
        return null;
    }
  }

  subNav(){
    const options = [
      {
        tag:['Report','回報','回报'],
        subView: 'report'
      },
      {
        tag:['History','歷史','历史'],
        subView: 'history'
      }
    ]
    return <SubNav app={this.app} options={options} />
  }

  render() {
    this.init(this.props);
    const deadView = this.state.deadView;
    const view = this.state.view;
    return(
      <div style={this.viewStyle()}>
        {this.subNav()}
        {this.animatedSubView(this.subView.bind(this), deadView? deadView: view, deadView? false: true)}
      </div>
    )
  }
}

export default Entry;
