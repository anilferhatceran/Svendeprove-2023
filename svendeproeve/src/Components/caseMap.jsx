import React,{useState,useEffect, useRef, useCallback} from "react";
 import DawaAutocomplete from "./DawaAutocomplete";
 import axios from 'axios';
 import { Map } from "react-map-gl";
 import mapboxgl from "mapbox-gl";
 import 'mapbox-gl/dist/mapbox-gl.css';

 
/*
**Todo**
Distance calculation
maybe autocomplete på postnr
vis distance til alle cases udfra postnr user indtaster
*/
export default function CaseMap(){
    const [byData, setByData] = React.useState({})
    const [postNr, setPostNr] = React.useState({postNr:"1550"})
    const [longitudeX, setLongitude] = useState("")
    const [latitudeY, setLatitude] = useState("")
    const [users, setUsers] = useState([])
    const [text, setText] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const intialViewState ={
        latitude: 55.752594,
        longitude: 10.847750,
        zoom: 5
    }

    mapboxgl.accessToken = 'pk.eyJ1Ijoib2xpdmVyaGFuc2VuIiwiYSI6ImNsYXc3dWdmZDBkZ2wzbm1oZzV6ZTVxOXUifQ.tWutup-cpAISS3niRDRPoA';


     const mapRef = useRef()

    useEffect(() => {
      const loadData = async()=>{
        // const response = await axios.get('https://api.dataforsyningen.dk/postnumre/autocomplete?q');
        const response = await axios.get(`https://api.dataforsyningen.dk/adresser/autocomplete?q=${text}`);
        console.log(`https://api.dataforsyningen.dk/adresser/autocomplete?q=${text}`);
        setUsers(response.data)
    }
    loadData()
    
    console.log(text)
}, [text])
    
    const onLonLatChange = useCallback((longitudeX,latitudeY) =>{
        mapRef.current?.flyTo({center:[longitudeX,latitudeY], duration:2000})
    }, [])

    useEffect(() => {
     console.log("Longitude (x value):"+longitudeX);
     console.log("Latitude (y value):"+latitudeY);
    }, [longitudeX, latitudeY])
    
    // window.onload = function(){

    //     dawaAutocomplete.dawaAutocomplete( document.getElementById("adresse"), {
    //         select: function(selected) {
    //             document.getElementById("valgtadresse").innerHTML= selected.tekst;
    //         }
    //       });
    // }

    // React.useEffect(function(){
    //     console.log("Effect ran")
    //     fetch(`https://api.dataforsyningen.dk/postnumre/${postNr.postNr}`)
    //         .then(res => res.json())
    //         .then(data => setByData(data.visueltcenter))
        
    // },[postNr])


    React.useEffect(function(){
        fetch(`https://api.dataforsyningen.dk/postnumre/${postNr.postNr}`)
            .then((res) =>{
                if(!res.ok) throw new Error(res.status)
                else return res.json()
            })
            .then(data => setByData(data.visueltcenter))
    },[postNr])
    

    function distance(lat1,lat2,lon1,lon2){
        if(byData == null)
        {
            return console.log("empty");
        }
        else{
            lon1 = lon1 * Math.PI / 180
            //lon2 is the longitude of the postNr the user entered
            lon2 = byData[0] * Math.PI / 180
            lat1 = lat1 * Math.PI / 180
            //lat2 is the latitude of the postNr the user entered
            lat2 = byData[1] * Math.PI / 180
    
            let dLon = lon2 - lon1
            let dLat = lat2 - lat1
            let a = Math.pow(Math.sin(dLat / 2),2)
                        + Math.cos(lat1) * Math.cos(lat2)
                        * Math.pow(Math.sin(dLon / 2),2)
            let c = 2 * Math.asin(Math.sqrt(a))
    
            // Radius of earth in kilometers
            let r = 6371
    
            // calculate the result
    
            return(c * r)
        }
    }

    const onSuggestHandler = (text)=>{
        setText(text)
        setSuggestions([])
    }
    
    const onChangeHandler = (text)=>{
        let matches = []
        if(text.length>0){
            matches = users.filter(user=>{
                const regex = new RegExp(`${text}`,"gi");
                return user.tekst.match(regex)
            })
        }
        console.log("matches", matches)

        setSuggestions(matches)
        setText(text)
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setPostNr(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(byData)
    }


    // function onSuggestHandler(suggestion,i){

    // }

    return(
    <div className="flex flex-col justify-center items-center">
        {/*  */}
        <input
        className="flex mr-3 pl-2 h-12 w-full border border-gray-300 rounded-md items-center relative focus:outline-none"
        type="text" 
        placeholder="Location"
        onChange={e=>onChangeHandler(e.target.value)}
        value={text}
        />
        {suggestions && suggestions.map((suggestion,i)=>
            <div className="cursor-pointer bg-white border-b-2 border-r-2 border-l-2 border-black hover:bg-sky-500 w-96" key={i}
            onClick={() => {
                onSuggestHandler(suggestion.tekst)
                setLongitude(suggestion.adresse.x)
                setLatitude(suggestion.adresse.y)
                onLonLatChange()
            }}>{suggestion.tekst}</div>
        )}
        <div className=" w-full h-96 mt-2 rounded-lg">
            <Map
                id="map"
                initialViewState={intialViewState}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                mapboxAccessToken="pk.eyJ1Ijoib2xpdmVyaGFuc2VuIiwiYSI6ImNsYXc3dWdmZDBkZ2wzbm1oZzV6ZTVxOXUifQ.tWutup-cpAISS3niRDRPoA"
            />
        </div>
    </div>
    )
}