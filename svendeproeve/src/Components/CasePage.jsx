import React from "react";
import dummyData from "../dummyData";
import ImageCarousel from "./ImageCarousel";


export default function CasePage(){

    return(
        <div className="bg-white m-10 flex flex-col max-w-6xl h-screen">
            <div className="">
                <ImageCarousel slides={dummyData} className=""/>
            </div>
        </div>
    )
}