import React from 'react';
import SubView from 'components/main/pages/home/views/SubView';
import ProgressBar from 'components/main/items/ProgressBar';

import ImagePicker from 'components/main/items/ImagePicker';
import ProblemSelector from './content/ProblemSelector';
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
        return <ImagePicker app={this.app}/>
      case 1:
        return <ProblemSelector app={this.app}/>
      case 2:
        return <GeoLocator app={this.app}/>
      case 3:
        return <Signature app={this.app} submit={this.submit.bind(this)}/>
      case 4:
        return <SubmittedPage app={this.app} />
      default:
        return null;
    }
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
        {this.gap('10%')}
        {this.reportContent(currentStage)}
      </div>
    )
  }

  parseProgress(report){
    return [
      {
        index: 0,
        key: 'takePicture',
        pending: this.store.main.photoBlob
      },
      {
        index: 1,
        key: 'selectProblem',
        pending: report.problem
      },
      {
        index: 2,
        key: 'recordGeoLocated',
        pending: report.geoLocated
      },
      {
        index: 3,
        key: 'signature',
        pending: report.email || report.signature
      }
    ]
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
