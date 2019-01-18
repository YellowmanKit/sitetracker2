import React from 'react';

class Button {

  constructor(app){
    this.init(app);
  }

  init(app){
    this.app = app;
    this.ui = app.store.ui;
    this.bs = this.ui.basicStyle;
    this.func = app.functions;
    this.actions = app.actions;
  }

  rectGreen(text, size, onClick){
    const style = {
      width: size[0],
      height: size[1],
      background: 'linear-gradient(to bottom, #008901 0%, #91c33b 100%)',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '100%',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#008901'
    }
    return this.button(style, text, '', onClick, 'rectGreen')
  }

  standard(color, text, onClick){
    const style = {
      width: this.bs.width * 0.125,
      height: this.bs.width * 0.045,
      background: color,
      color: 'white',
      fontWeight: 'normal',
      fontSize: this.bs.width * 0.02
    }
    return this.button(style, text, '', onClick, 'standard' + text)
  }

  button(customStyle, text, imageUrl, onClick, key){
    var style = {...styles.button, ...customStyle }
    if(imageUrl && imageUrl !== ''){
      style = {...style, ...{ backgroundImage: 'url(' + imageUrl + ')' }}
    }
    return(
    <button style={style} key={key} onClick={onClick}>
    {this.func.multiLang(text[0],text[1], text[2])}</button>)
  }

}

const styles = {
  button:{
    border: 'none',
    cursor: 'pointer',
    backgroundSize: '100% 100%',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '100%',
    color: 'white',
    flexShrink: 0,
    position: 'relative'
  }
}

export default Button;
