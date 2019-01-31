import React from 'react';
import icon_cross from 'resources/images/general/cross.png';

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

  absoluteClose(onClick){
    const style = {
      width: this.bs.height * 0.04,
      height: this.bs.height * 0.04,
      margin: this.bs.width * 0.015,
      position: 'absolute',
      top: 0,
      right: 0,
      opacity: 0.25
    }
    return this.button(style, ['',''], icon_cross, onClick)
  }

  standard(color, text, onClick){
    const style = {
      width: this.bs.height * 0.135,
      height: this.bs.height * 0.065,
      background: color,
      color: 'white',
      fontWeight: 'normal',
      fontSize: '100%'
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
