//import React from 'react';
import UI from 'components/UI';

class PhotoSlotCell extends UI {
  render(){
    this.init(this.props);
    const style = {...this.ui.styles.border, ...{
      width: this.bs.width * 0.1,
      height: this.bs.width * 0.1,
      backgroundColor: this.ui.colors.ultraLightGrey
    }}
    const index = this.props.index;
    return this.buttons.button(style, '', this.store.main.photoUrl[index],
    ()=>{ this.actions.main.setPhotoIndex(index)}, 'slot' + index);
  }
}

export default PhotoSlotCell;
