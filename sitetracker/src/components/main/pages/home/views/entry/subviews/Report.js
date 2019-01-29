import React from 'react';
import SubView from 'components/main/pages/home/views/SubView';
import ProgressBar from 'components/main/items/ProgressBar';

import ImagePicker from 'components/main/items/ImagePicker';
import ProblemSelector from './content/ProblemSelector';
import Description from './content/Description';
import GeoLocator from './content/GeoLocator';
import Signature from './content/Signature';
import SubmittedPage from './content/SubmittedPage';

class Report extends SubView {

  constructor(props){
    super(props);
    this.init(props);
  }

  reportContent(currentStage){
    switch (currentStage) {
      case 0:
        return <Signature app={this.app}/>
      case 1:
        return <ImagePicker app={this.app}/>
      case 2:
        return <ProblemSelector app={this.app}/>
      case 3:
        return <Description app={this.app}/>
      case 4:
        return <GeoLocator app={this.app} submit={this.submit.bind(this)}/>
      case 5:
        return <SubmittedPage app={this.app} />
      default:
        return null;
    }
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
    const currentStage = this.store.report.currentStage;
    const progress = this.parseProgress(this.store.report.viewingReport);
    return(
      <div style={this.subViewStyle()}>
        <ProgressBar
        submitted={this.store.report.viewingReport.submitted}
        currentStage={currentStage}
        progress={progress} app={this.app}/>
        {this.gap('3%')}
        {this.reportContent(currentStage)}
        {this.gap('3%')}
        {currentStage === 4 && this.submitButton(()=>{ this.submit(); })}
      </div>
    )
  }

  parseProgress(report){
    return [
      {
        index: 0,
        key: 'signature',
        pending: report.email && this.store.main.signatureBlob
      },
      {
        index: 1,
        key: 'takePicture',
        pending: this.checkPhotoExist()
      },
      {
        index: 2,
        key: 'selectProblem',
        pending: report.catagory && report.problem
      },
      {
        index: 3,
        key: 'description',
        pending: report.description
      },
      {
        index: 4,
        key: 'recordGeoLocated',
        pending: report.geoLocated
      }
    ]
  }

  checkPhotoExist(){
    const photos = this.store.main.photoUrl;
    for(var i=0;i<photos.length;i++){
      if(photos[i]){ return true; }
    }
    return false;
  }

  submit(){
    const report = this.store.report.viewingReport;
    const photoBlob = this.store.main.photoBlob;
    const signatureBlob = this.store.main.signatureBlob;
    if(!photoBlob || !signatureBlob ||
    !report.problem || !report.geoLocated){
      return;
    }
    this.actions.report.submit(report, photoBlob, signatureBlob);
  }

}

export default Report;
