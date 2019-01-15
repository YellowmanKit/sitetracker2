import React, { Component } from 'react';
import URL from './URL';
import Button from 'components/main/items/ui/Button';
import Input from 'components/main/items/ui/Input';

class UI extends Component {
  url = new URL(this.props.app);
  buttons = new Button(this.props.app);
  inputs = new Input(this.props.app);

  componentWillReceiveProps(newProps){
    this.init(newProps);
    this.checkUrl();
  }

  checkUrl(){
    if(this.state && this.state.filename){
      //console.log('getting url: ' + this.state.filename);
      this.url.getUrl(this.state.filename, this.state.type);
    }else{
      //console.log('no filename in state');
    }
  }

  init(props){
    this.app = props.app;
    this.ui = this.app.store.ui;
    this.bs = this.ui.basicStyle;
    this.store = this.app.store;
    this.func = this.app.functions;
    this.db = this.app.database;
    this.actions = this.app.actions;

    this.url.init(props.app);
  }

  textDisplay(text, scale, fontSize, textAlign, color, key){
    const style = {
      width: scale? scale[0]: '100%',
      height: scale? scale[1]: '',
      margin: '1%',
      fontSize: fontSize? fontSize: '100%',
      fontWeight: 'normal',
      textAlign: textAlign? textAlign: 'left',
      overflow: 'hidden',
      overflowWrap: 'break-word',
      color: color? color: 'black',
      flexShrink: 0
    }
    return <div key={key? key:'defaultKey'} style={style}>{text}</div>
  }

  gap(height){
    return <div style={{height: height, width: '100%', flexShrink: 0}} />
  }

  sep(){
    return <div style={{height: '1px', width: '100%', backgroundColor:'black', opacity: 0.15, flexShrink: 0}} />
  }

  verGap(width){
    return <div style={{minWidth: width, height: '100%', flexShrink: 0}}/>
  }

  verSep(color, height){
    return <div style={{backgroundColor: color, width: '1px', height: height, flexShrink: 0}}/>
  }
}

export default UI;
