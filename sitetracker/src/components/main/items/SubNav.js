import React from 'react';
import UI from 'components/UI';

class SubNav extends UI {

  subNavOptions(){
    const areaStyle = {...this.ui.styles.area, ...{
      height: '100%',
      alignItems: 'center',
      flexGrow: 1
    }}
    const optionStyle = {...this.ui.styles.basicStyle, ...this.ui.styles.button, ...this.ui.styles.border, ...{
      width: '100%',
      height: '100%',
      color: this.ui.colors.textGrey,
      position: 'relative'
    }}
    const tagStyle = {
      width: '100%',
      fontSize: this.bs.width * 0.05,
      textAlign: 'center'
    }

    //const length = this.props.options.length;
    return this.props.options.map((option,i)=>{
      const selected = option.subView === this.store.content.subView;
      return(
        <div key={i} style={{...areaStyle, ...{backgroundColor: selected? 'white': 'transparent'}}}>
          <button style={optionStyle}
          onClick={()=>{
            this.actions.content.setSubView(option.subView);
            setTimeout(()=>{ this.actions.main.setStatus('ready'); }, 100)
          }}>
            <div style={tagStyle}>{this.func.multiLang(option.tag[0],option.tag[1],option.tag[2])}</div>
            {this.selectedFooter(selected)}
          </button>
        </div>
      )
    })
  }

  selectedFooter(selected){
    const style = {
      width: '100%',
      height: '10%',
      position: 'absolute',
      bottom: -1,
      left: 0,
      backgroundColor: selected? this.ui.colors.blue: 'transparent'
    }
    return <div style={style}/>
  }

  render(){
    this.init(this.props);
    const style = {...this.ui.styles.area, ...{
      height: this.bs.height * 0.1,
      backgroundColor: 'white'
    }};
    return (
      <div style={style}>
        {this.subNavOptions()}
      </div>
    )
  }
}

export default SubNav;
