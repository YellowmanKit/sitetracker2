import React from 'react';
import UI from 'components/UI';
import {Motion, spring}  from 'react-motion';

import no_image from 'resources/images/general/no_image.png';

class Row extends UI {

  alertTag(){
    const style = {
      width: this.bs.height * 0.04,
      height: this.bs.height * 0.04
    }
    return <div style={style}>{this.animatedAlert()}</div>
  }

  rowContent(title, rowInfo){
    const infoStyle = {...this.bs, ...{
      width: '75%',
      height: this.bs.height * 0.12,
      marginLeft: this.bs.height * 0.02
    }}
    return(
      <div style={infoStyle}>
        {this.rowTitle(title)}
        {rowInfo()}
      </div>
    )
  }

  rowTitle(title){
    if(!title){
      return null;
    }
    const nameStyle = {
      width: '100%',
      height: this.bs.height * 0.06,
      fontWeight: 'bold',
      fontSize: this.bs.width * 0.04,
      textAlign: 'left',
      color: this.ui.colors.textGrey
    }
    return <div style={nameStyle}>{title}</div>
  }

  rowIcon(defaultUrl, onClick){
    const size = this.bs.height * 0.12;
    const iconSize = this.bs.height * 0.11;
    const containerStyle = {...this.ui.styles.button , ...this.ui.styles.container,
      ...this.ui.styles.border, ...{
      width: size,
      height: size,
      backgroundColor: 'white',
      position: 'relative',
      borderRadius: 5
    }}
    const iconStyle = {...this.ui.styles.border, ...{
      maxWidth: iconSize,
      maxHeight: iconSize,
      backgroundColor: 'white'
    }}
    const url = defaultUrl? defaultUrl: this.url.url? this.url.url: no_image;
    return(
      <div style={containerStyle} onClick={onClick}>
        <img key={url} style={iconStyle} src={url} alt=''/>
      </div>
    )
  }

  animatedRow(content, height, onDead){
    const ani = true;
    const option = {stiffness: onDead? 200: 300, damping: 26, precision: 1.2}
    return(
      <Motion defaultStyle={{height: (!ani || onDead)? height: 0, opacity: (!ani || onDead)? 1.1:0}}
      style={{height: spring(onDead? 0:height, option), opacity: spring(onDead?0: 1.1, option)}}>
        {style=>content(style)}
      </Motion>
    )
  }

  animatedFadingRow(content, selected){
    const option = {stiffness: 1000, damping: 50, precision: 2}
    return(
      <Motion defaultStyle={{opacity:0 }}
      style={{opacity: spring(selected? 1: 0.25, option)}}>
        {style=>content(style)}
      </Motion>
    )
  }

  rowStyle(){
    return(
      {...this.ui.styles.area, ...this.ui.styles.border, ...{
        flexShrink: 0,
        width: '98%',
        alignItems: 'center',
        position: 'relative',
        borderRadius: 5,
        margin: '1%'
      }}
    )
  }

}

export default Row;
