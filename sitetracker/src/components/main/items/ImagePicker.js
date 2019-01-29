import React from 'react';
import MediaQuery from 'react-responsive';

import UI from 'components/UI';
import Image from 'components/main/items/ui/Image';
import PhotoSlotCell from 'components/main/items/cell/PhotoSlotCell';

import takephoto from 'resources/images/button/takephoto.png';

class ImagePicker extends UI {

  takePhotoButton(onClick, mobile){
    const style = {
      width: this.bs.height * 0.45,
      height: this.bs.height * 0.075,
      backgroundColor: this.ui.colors.blue
    }
    if(mobile){
      const inputStyle = {...style, ...this.ui.styles.fileInput, ...{
        paddingTop: this.bs.height * 0.075,
        backgroundImage: 'url(' + takephoto + ')',
        backgroundSize: '100% 100%'
      }}
      return(
        <input type="file" accept="image/*" capture="camera" style={inputStyle} alt=''
        onChange={event=>{this.actions.main.setPhoto({blob: event.target.files[0], url: URL.createObjectURL(event.target.files[0])})}}/>)
    }
    return this.buttons.button(style,['Take Photo', '拍照', '拍照'],'',onClick)
  }

  photoSlotSelectBar(){
    const style = {...this.ui.styles.area, ...{
      width: this.bs.width * 0.5,
      height: this.bs.width * 0.1,
      justifyContent: 'space-around'
    }}
    return(
      <div style={style}>
        {this.store.main.photoUrl.map((url, i)=>{
          return <PhotoSlotCell app={this.app} url={url} index={i} key={"slotCell" + i}/>
        })}
      </div>
    )
  }

  render() {
    this.init(this.props);

    const pickerStyle = {...this.bs, ...{
      width: '100%',
      height: this.bs.height * 0.65,
      backgroundColor: 'transparent',
      flexShrink: 0
    }}

    const photoIndex = this.store.main.photoIndex;
    const imgUrl =
    this.store.main.photoUrl? this.store.main.photoUrl:
    this.props.defaultUrl? this.props.defaultUrl:
    null;

    return(
      <div style={pickerStyle}>
        <Image app={this.app} photoUrl={imgUrl[photoIndex]} size={this.bs.height * 0.35}/>
        {this.gap('5%')}
        {this.photoSlotSelectBar()}
        {this.gap('5%')}
        <MediaQuery minDeviceWidth={1224}>
          {this.takePhotoButton(()=>{this.actions.main.setStatus('capture')})}
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          {this.takePhotoButton(()=>{}, true)}
        </MediaQuery>
      </div>
    )
  }

}

export default ImagePicker;
