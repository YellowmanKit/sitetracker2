import React from 'react';
import UI from 'components/UI';
import {Motion, spring}  from 'react-motion';

import Image from 'components/main/items/ui/Image';

class PhotoViewer extends UI {

  photoSelectBar(){
    const style = {...this.ui.styles.area, ...{
      width: this.bs.width,
      height: this.bs.height * 0.15
    }}
    const report = this.store.report.viewingReport;
    return(
      <div style={style}>
        {report.photo && report.photo.map((photo, i)=>{
          return <Image app={this.app} filename={photo} type={'photo'}
          scale={[this.bs.width * 0.25,this.bs.height * 0.15]}
          onClick={()=>{ this.actions.main.setPhotoViewer(i); }}/>
        })}
      </div>
    )
  }

  render() {
    this.init(this.props);
    const status = this.store.main.photoViewer;
    const isOpen = status !== 'off';
    const report = this.store.report.viewingReport;
    const index = status === 'off'? 0: status;

    const viewerStyle = {...this.bs, ...{
      position: 'absolute',
      width: this.bs.width,
      height: this.bs.height,
      minHeight: this.bs.minHeight,
      backgroundColor: 'rgba(0,0,0,0.9)',
      opacity: 1,
      pointerEvents: isOpen? 'auto': 'none'
    }}
    return(
      <Motion defaultStyle={{opacity: 0}}
      style={{opacity: isOpen? spring(1.5):spring(0)}}>
        {style=>(
          <div key={status + this.count} style={{...viewerStyle,
            ...{opacity: style.opacity}}}>
            {report.photo && <Image app={this.app} filename={report.photo[index]} type={'photo'}
            scale={[this.bs.width * 0.8,this.bs.height * 0.8]}/>}
            {this.photoSelectBar()}
            {this.buttons.absoluteClose(()=>{ this.actions.main.setPhotoViewer('off'); })}
          </div>
        )}
      </Motion>
    )
  }

}

export default PhotoViewer;
