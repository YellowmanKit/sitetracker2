import React from 'react';
import UI from 'components/UI';
import GoogleMapReact from 'google-map-react';

class GeoLocator extends UI {

  componentDidMount(){
    this.actions.main.setGeoLocated(null);
  }

  pin(lat, lng){
    if(!lat || !lng){ return null; }
    const style = {
      width: '15px',
      height: '15px',
      background: this.ui.colors.blue,
      borderRadius: '100%'
    }
    return (
    <div style={style}
    lat={lat}
    lng={lng}/>)
  }

  render(){
    this.init(this.props);
    const style = {...this.bs, ...this.ui.styles.border, ...{
      width: this.bs.height * 0.45,
      height: this.bs.height * 0.55,
      backgroundColor: 'white',
      padding: '2%'
    }};
    const coords = this.store.main? this.store.main.geoLocated:
    this.props.report.geoLocated? this.props.report.geoLocated: null;
    return (
      <div style={style}>
        {!coords && this.textDisplay(this.func.multiLang('Loading...', '載入中...', '载入中...'))}
        {coords && this.textDisplay(this.func.multiLang('Longitude: ', '經度: ', '经度: ') + coords.longitude)}
        {coords && this.textDisplay(this.func.multiLang('Latitude: ', '緯度: ', '纬度: ') + coords.latitude)}
        {this.gap('10%')}
        {coords && <div style={{width: this.bs.height * 0.4, height: this.bs.height * 0.25}}>
          <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDwMEZzKV6ej1wGv8-X476AqJvY2QjjZF0' }}
          defaultCenter={{lat: coords.latitude, lng: coords.longitude}}
          defaultZoom={18}>
          {this.pin(coords.latitude, coords.longitude)}
          </GoogleMapReact>
        </div>}
      </div>
    )
  }
}

export default GeoLocator;
