import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from "react-redux";
import axios from 'axios';

import * as main from './redux/actions/control/main';
import * as ui from './redux/actions/control/ui';
import * as modal from './redux/actions/control/modal';
import * as content from './redux/actions/control/content';

import * as user from './redux/actions/data/user';
import * as report from './redux/actions/data/report';

import Main from './components/main/Main';

class App extends Component {

  api(){ return this.isDev()? process.env.REACT_APP_API_DEV: process.env.REACT_APP_API; }

  isDev(){ return process.env.REACT_APP_DEV === 'true'; }

  addZeroIfSingle(num){
    if(num < 10){
      return '0' + String(num);
    }else{
      return '' + String(num);
    }
  }

  dateString(date) {
    let year = date.getFullYear();
    let monthIndex = date.getMonth() + 1;
    let day = date.getDate();

    let dateStr = year + '-' + this.addZeroIfSingle(monthIndex) + '-' + this.addZeroIfSingle(day);
    //return '2018-02-08';
    return dateStr;
  }

  multiLang(english, chinese, simplified_chinese){
    switch (this.props.store.main.language) {
      case 'english':
        return english;
      case 'chinese':
        return chinese;
      case 'simplified_chinese':
        return simplified_chinese;
      default:
        return english;
    }
  }

  async url(filename, type){
    const actions = this.props.actions.content;
    if(!filename){ /*console.log('no filename');*/ return ''};
    const cachedUrl = this.props.store.content.cachedUrl[filename];
    if(cachedUrl){
      /*console.log(type + ' use cached url: ' + cachedUrl);*/
      if(cachedUrl === 'processing...'){ return ''; }
      return cachedUrl;
    }
    //console.log(filename + '- create url: processing...');
    actions.cacheUrl(filename, 'processing...');
    const localFile = await this.props.db.get(filename);
    if(localFile){
      //console.log(type + ' use localFile');
      const url = URL.createObjectURL(localFile);
      //console.log(filename + '- create url: ' + url);
      actions.cacheUrl(filename, url);
      return url;
    }else{
      //console.log(type + ' downloading...');
      var downloadUrl = this.api() + '/download/'+ type + '/' + filename;
      let err, res;
      [err, res] = await to(axios.get(downloadUrl, {responseType: 'blob'}));
      if(err || !res.data){ console.log('file download error!'); return '';}
      this.props.db.set(filename, res.data);
      const url = URL.createObjectURL(res.data);
      actions.cacheUrl(filename, url);
      return url;
    }
  }

  render() {
    const app = {
      store: this.props.store,
      actions: this.props.actions,
      database: this.props.db,
      functions: {
        url: this.url.bind(this),
        multiLang: this.multiLang.bind(this),
        dateString: this.dateString.bind(this)
      }
    }
    return (
      <Main app={app}/>
    );
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    this.props.actions.ui.setDimension({width: window.innerWidth,height: window.innerHeight});
  }
}

function mapStateToProps(state, props) {
  return { store: state }
}

function mapDispatchToProps(dispatch){
  return {
    actions: {
      main: Action(main, dispatch),
      ui: Action(ui, dispatch),
      modal: Action(modal, dispatch),
      content: Action(content, dispatch),

      user: Action(user, dispatch),
      report: Action(report, dispatch)
    }
  }
}

function Action(action, dispatch){
  return bindActionCreators(action, dispatch)
}

function to(promise) {
   return promise.then(data => {
      return [null, data];
   })
   .catch(err => [err]);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
