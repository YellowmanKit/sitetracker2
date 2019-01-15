class Router {

  getAppend(type){
    return(
    type === 'courseIcon'? 'courses/icons/':
    type);
  }

  outDated(date){
    const today = new Date();
    const endDate = new Date(date);
    return date < today;
  }

}

export default Router;
