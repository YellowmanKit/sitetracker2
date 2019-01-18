import UI from 'components/UI';

class SubView extends UI {

  subViewStyle(){
    const opacity = this.app.animatedStyle.opacity;
    return {...this.bs, ...{
      height: this.bs.height * 0.9,
      overflowY: 'auto',
      opacity: this.app.animatedStyle.opacity,
      pointerEvents: opacity === 1? '':'none'
    }}
  }

}

export default SubView;
