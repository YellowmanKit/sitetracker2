import React from 'react';
import MediaQuery from 'react-responsive';

import UI from 'components/UI';
import Image from 'components/main/items/ui/Image';

import takephoto from 'resources/images/button/takephoto.png';

class ImagePicker extends UI {

  takePhotoButton(onClick, mobile){
    const style = {
      width: this.bs.height * 0.45,
      height: this.bs.height * 0.075,
      backgroundColor: this.ui.colors.blue,
      fontColor: 'white',
      fontWeight: 'normal',
      position: 'relative'
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

  render() {
    this.init(this.props);

    const pickerStyle = {...this.bs, ...{
      width: '100%',
      height: this.bs.height * 0.5,
      backgroundColor: 'transparent',
      flexShrink: 0
    }}
    const imgUrl =
    this.store.main.photoUrl? this.store.main.photoUrl:
    this.props.defaultUrl? this.props.defaultUrl:
    null;

    return(
      <div style={pickerStyle}>
        <Image app={this.app} photoUrl={imgUrl} size={this.bs.height * 0.45}/>
        {this.gap('10%')}
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
