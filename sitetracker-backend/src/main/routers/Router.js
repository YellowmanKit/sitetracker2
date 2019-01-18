class Router {

  getAppend(type){
    return(
    type === 'photo'? 'photo/':
    type === 'signature'? 'signature/':
    type);
  }

  outDated(date){
    const today = new Date();
    const endDate = new Date(date);
    return date < today;
  }

  to(promise) {
     return promise.then(data => {
        return [null, data];
     }).catch(err => [err]);
  }


}

export default Router;
