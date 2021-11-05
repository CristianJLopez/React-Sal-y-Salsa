import React, { Component } from 'react';
import {GoogleApiWrapper, Marker, Map} from 'google-maps-react';

export  class MapC extends Component {
    
    render() {
        const style = {
            width: '45vh',
            height: '35vh',
            margin: '5px'
          }
        return (
            
            <Map google={this.props.google} zoom={1}
            style={style}
            initialCenter={{
              lat: 40.854885,
              lng: -88.081807
            }}>
 
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
          </Map>
        )
    }
};
export default GoogleApiWrapper({
    apiKey: "AIzaSyDINRxQcIXUetigNcpa-n_a2An6xflbeiw"
  })(MapC)
