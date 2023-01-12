import React from "react";
import DistanceCalc from "./distanceCalc";
import MultiRangeSlider from "./MultiRangeSlider";

export default function About(){
    return(
        <h1 className="flex justify-center items-center h-screen bg-slate-700">
            <div>
            {/* {DistanceCalc()} */}
            <MultiRangeSlider
                min={0}
                max={1000}
                onChange={({min, max}) => console.log(`min = ${min}, max = ${max}`)}
            />
            </div>
        </h1>
    )
}