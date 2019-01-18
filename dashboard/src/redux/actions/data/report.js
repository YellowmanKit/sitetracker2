import axios from 'axios';
import * as actions from '../actions';

var to = actions.to;
var api = actions.api();

export function fetchReports(){
  return async function (dispatch){
    //console.log('fetching');
    let err, res;
    [err, res] = await to(axios.get(api + '/report/fetchAll'));
    if(err){actions.connectionError(dispatch); return;}

    if(res.data.result === 'succeed'){
      dispatch({type: 'updateReports', payload: res.data.reports});
    }else{
      actions.connectionError(dispatch);
    }
  }
}

export function submit (report, photoBlob, signatureBlob) {
  return async function (dispatch) {
    //console.log(report);
    actions.connecting(dispatch);

    var photoFile = new FormData();
    photoFile.append('files', photoBlob, 'photo.png');
    var signatureFile = new FormData();
    signatureFile.append('files', signatureBlob, 'signature.png');

    let err, photoRes, signatureRes, reportRes;
    [err, photoRes] = await to(axios.post(api + '/upload', photoFile, { headers: { type: 'photo'}}))
    if(err){actions.connectionError(dispatch); return;}
    [err, signatureRes] = await to(axios.post(api + '/upload', signatureFile, { headers: { type: 'signature'}}))
    if(err){actions.connectionError(dispatch); return;}

    const photo = photoRes.data.filenames[0];
    const signature = signatureRes.data.filenames[0];

    var reportToUpload = {...report, ...{photo: photo, signature: signature} };
    [err, reportRes] = await to(axios.post(api + '/report/add', { data: {
      report: reportToUpload, latitude: report.geoLocated.latitude, longitude: report.geoLocated.longitude} }));
    if(err){actions.connectionError(dispatch); return;}

    if(reportRes.data.result === 'succeed'){
      dispatch({type: 'hideModal'});
      dispatch({type: 'updateReports', payload: [reportRes.data.report]});
      dispatch({type: 'viewReport', payload: { submitted: true }});
      dispatch({type: 'setCurrentStage', payload: 4 });
    }else{
      console.log(reportRes.data.result);
      dispatch({type: 'message', payload: ['Submit failed! Please try again!', '提交失敗! 請再試一次!', '提交失败! 请再试一次!']});
    }
  }
}

export const setCurrentStage = (index) =>{
  return {
    type: 'setCurrentStage',
    payload: index
  }
}

export const viewReport = (report) =>{
  return {
    type: 'viewReport',
    payload: report
  }
}
