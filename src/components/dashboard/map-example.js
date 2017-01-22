import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer , GeoJSON} from 'react-leaflet';
import L from 'leaflet';
import {getMarkerSVGIcon} from '../../utils/svg-marker-gen';
import { color } from '../../utils'

import lodash, {filter, indexOf} from 'lodash'

const markerColors = {
  'بحري': {
    color: color.red
  },
  'بري': {
    color: color.blue
  },
  'جوي': {
    color: color.yellow
  }
}


export default class MapExample extends Component{

  constructor(props){
    super();
    this.state = {
      features: []
    }
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){
      setTimeout(() => {
        this.setState({
          tm:Date.now(),
          features:filter(nextProps.features, (o)=> indexOf(nextProps.ids,o.properties.Code)!== -1)
        })
      }, 200);
  }

  render(){
    const {features=[], tm} = this.state;
    const position = [21.586312, 57.104954];

    return(
      <div style={{height:400}}>
        <Map  style={{height:'100%'}} center={position} zoom={5} zoomControl={false}>
    <TileLayer
      url='https://api.mapbox.com/styles/v1/ihab/cixx2frxt003g2sl5b0ydkhq2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWhhYiIsImEiOiJZT19QbkJJIn0.ROWLhlTd-2mI94QvdzrH8g'
      attribution=''
    />
    {features.map((outlet, key)=>(
      <Marker key={key} position={outlet.geometry.coordinates.reverse()}
        icon={L.icon({
          iconUrl: getMarkerSVGIcon({fill:markerColors[outlet.properties.PointofEnt].color, icon:'star'}),
          iconSize: [25, 33],
          popupAnchor: [1, -10]
      })}>
        <Popup>
          <div style={{textAlign:'center'}}>
          <h2>{outlet.properties.NAME_AR}</h2>
          <h3>{outlet.properties.PointofEnt}</h3>
          </div>
        </Popup>
      </Marker>
    ))}

  </Map>
      </div>
    )
  }
}
