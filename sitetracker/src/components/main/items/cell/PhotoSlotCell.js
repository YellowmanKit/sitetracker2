//import React from 'react';
import UI from 'components/UI';

class PhotoSlotCell extends UI {
  render(){
    this.init(this.props);
    const selected = this.props.index === this.store.main.photoIndex;
    const style = {...this.ui.styles.border, ...{
      width: this.bs.width * 0.1,
      height: this.bs.width * 0.1,
      backgroundColor: this.ui.colors.ultraLightGrey,
      borderWidth: '2px',
      borderColor: selected? this.ui.colors.blue: this.ui.colors.lightGrey
    }}
    const index = this.props.index;
    return this.buttons.button(style, '', this.store.main.photoUrl[index],
    ()=>{ this.actions.main.setPhotoIndex(index)}, 'slot' + index);
  }
}

export default PhotoSlotCell;
