import React from 'react';
import UI from 'components/UI';
import SignatureCanvas from 'react-signature-canvas'

class Signature extends UI {

  signatureCanvas(){
    const style = {...this.bs, ...this.ui.styles.border, ...{
      width: '100%',
      height: this.bs.height * 0.35,
      backgroundColor: 'white',
      flexShrink: 0,
      padding: '2%',
      position: 'relative'
    }};
    return (
      <div style={style}>
        {this.textDisplay(this.func.multiLang('Signature','簽名','签名'))}
        <SignatureCanvas ref={(ref) => { this.sigCanvas = ref; }}
        canvasProps={{width: this.bs.height * 0.45, height: this.bs.height * 0.3}}/>
      </div>
    )
  }

  submitButton(onClick){
    const style = {
      width: this.bs.height * 0.45,
      height: this.bs.height * 0.075,
      backgroundColor: this.ui.colors.green,
      fontColor: 'white',
      fontWeight: 'normal'
    }
    return this.buttons.button(style,['Submit', '提交', '提交'], '', onClick)
  }

  render(){
    this.init(this.props);

    const style = {...this.bs, ...{
      width: this.bs.height * 0.45,
      height: this.bs.height * 0.6,
      backgroundColor: 'white'
    }};
    const viewingReport = this.store.report.viewingReport;
    return (
      <div style={style}>
        {this.inputs.inputField('email', 'text', ['Email address','電郵地址','电邮地址'],
        ['100%', this.bs.height * 0.05], viewingReport.email,
        ()=>{ this.actions.report.viewReport({...viewingReport, ...{ email: document.getElementById('email').value }}) })}
        {this.gap('5%')}
        {this.signatureCanvas()}
        {this.gap('5%')}
        {this.submitButton(()=>{ this.saveSignature(); })}
      </div>
    )
  }

  async saveSignature(){
    const url = this.sigCanvas.toDataURL();
    const blob = await this.url.urlToBlob(url)
    this.actions.main.setSignature({url ,blob});

    this.props.submit();
  }
}

export default Signature;
