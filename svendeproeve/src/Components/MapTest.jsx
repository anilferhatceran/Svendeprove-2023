import {useState,useRef,useEffect} from "react";
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import dummyData from "../dummyData";
import { FaMapMarkerAlt } from "react-icons/fa";
import Map, {Marker, Popup} from 'react-map-gl';

export default function MapTest(){
   mapboxgl.accessToken = 'pk.eyJ1Ijoib2xpdmVyaGFuc2VuIiwiYSI6ImNsYXc3dWdmZDBkZ2wzbm1oZzV6ZTVxOXUifQ.tWutup-cpAISS3niRDRPoA';

   const [showPopup, setShowPopup] = useState(false)

   function OnClickHandler(event){
    event.preventDefault();
    
    setShowPopup(prevShowPopup => !prevShowPopup)
    console.log(showPopup)
  }
    return(
    <Map
    initialViewState={{
      longitude: 12.34409,
      latitude: 55.73320,
      zoom: 12
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/outdoors-v12"
  >

   {showPopup && (
    <Popup longitude={12.34} latitude={55.73}
      anchor="bottom"
      >
      Tec ballerup 👍
    </Popup>
   )}

    <Marker longitude={12.34} latitude={55.73} anchor="bottom">
      <button onClick={OnClickHandler}>

      <FaMapMarkerAlt className="text-xl text-red-600"/>
      </button>
    </Marker>
  </Map>
    )
}
