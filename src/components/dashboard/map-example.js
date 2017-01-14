import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer , GeoJSON} from 'react-leaflet';
import outlets from '../../../mock/oman/outlets.json';

export default class MapExample extends Component{

  componentDidMount(){

  }

  render(){
    const position = [21.586312, 57.104954];

    return(
      <div style={{height:400}}>
        <Map  style={{height:'100%'}} center={position} zoom={5} zoomControl={false}>
    <TileLayer
      url='https://api.mapbox.com/styles/v1/ihab/cixx2frxt003g2sl5b0ydkhq2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWhhYiIsImEiOiJZT19QbkJJIn0.ROWLhlTd-2mI94QvdzrH8g'
      attribution=''
    />
    <GeoJSON data={outlets} />
  </Map>
      </div>
    )
  }
}
