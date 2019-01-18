import React from 'react';
import icon_cross from 'resources/images/icon/cross.png';

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

  absoluteClose(onClick){
    return this.button(this.dynamicStyles('absoluteClose'), ['',''], icon_cross, onClick)
  }

  absolute(text, onClick){
    const style = {
      position: 'absolute',
      bottom: '10%',
      backgroundColor: 'rgba(100, 100, 100, 0.5)',
      textAlign: 'center',
      borderRadius: '5px',
      width: this.bs.width * 0.3,
      height: this.bs.width * 0.1,
      fontSize: '150%'
    }
    return this.button(style, text, '', onClick)
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

  button(customStyle, text, imageUrl, onClick, key){
    var style = {...styles.button, ...customStyle }
    if(imageUrl && imageUrl !== ''){
      style = {...style, ...{ backgroundImage: 'url(' + imageUrl + ')' }}
    }
    return(
    <button style={style} key={key} onClick={onClick}>
    {this.func.multiLang(text[0],text[1], text[2])}</button>)
  }

  dynamicStyles(name){
    switch (name) {
      case 'absoluteClose':
        return {
          width: this.bs.height * 0.06,
          height: this.bs.height * 0.06,
          margin: this.bs.width * 0.015,
          position: 'absolute',
          top: 0,
          right: 0,
          opacity: 0.25
        }
      default:
        return {}
    }
  }
}

const styles = {
  button:{
    border: 'none',
    cursor: 'pointer',
    backgroundSize: '100% 100%',
    backgroundColor: 'transparent',
    fontWeight: 'normal',
    fontSize: '100%',
    color: 'white',
    flexShrink: 0,
    position: 'relative'
  }
}

export default Button;
