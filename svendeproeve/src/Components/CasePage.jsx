import React from "react";
import dummyData from "../dummyData";
import ImageCarousel from "./ImageCarousel";

export default function CasePage(){
    return(
        <div className="bg-white h-screen mt-10">
            <div className="w-full bg-slate-300">
                <ImageCarousel slides={dummyData}/>
            </div>
        </div>
    )
}