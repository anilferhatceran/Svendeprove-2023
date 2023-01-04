import React from "react";
import DawaAutocomplete from "./DawaAutocomplete";

/*
**Todo**
Distance calculation
maybe autocomplete på postnr
vis distance til alle cases udfra postnr user indtaster
*/
export default function DistanceCalc(){
    const [byData, setByData] = React.useState({})
    const [postNr, setPostNr] = React.useState({postNr:"1550"})
    
    
    
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

    return(
        // <div className="flex flex-col justify-center items-center">
        //     <form onSubmit={handleSubmit}>
        //         <input 
        //         className="flex w-96 h-10 bg-slate-300 border-2"
        //         type="text" 
        //         placeholder={"Enter ZIP code"}
        //         onChange={handleChange}
        //         name="postNr"
        //         value={postNr.postNr}
        //         />
        //     </form>
        //     <h1>{distance(55.65420,55.65461,12.27386,12.27394) + " K.M"}</h1>
        //     {/* {console.log(distance(55.65420,55.65461,12.27386,12.27394) + " K.M")} */}
        // </div>
        <div>
            <DawaAutocomplete>
                {({ value, suggestions, handleChange }) => {
                    console.log(suggestions)
                    return (
                    <div className="flex flex-col justify-center items-center">
                        <input 
                        className="flex w-96 h-10 bg-slate-300 border-2"
                        type='text'
                        value={ value }
                        onChange={ handleChange } 
                        name="postNr"
                        placeholder="Enter postnummer or commune"
                        />
                        { suggestions.map(suggestion => (
                        <li key={ suggestion.postnummer.id }>{ suggestion.tekst }</li>
                        )) }
                        <h1>{distance(55.65420,55.65461,12.27386,12.27394) + " K.M"}</h1>
                    </div>
                    )
                }}
            </DawaAutocomplete>
      </div>
    )
}