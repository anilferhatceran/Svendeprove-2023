import React from "react";
import dummyData from "../dummyData";
import ImageCarousel from "./ImageCarousel";


export default function CasePage(){

    return(
        <div className="pl-80 pr-80 shadow-inner">
            <div className="bg-white  flex flex-col items-center shadow-lg overflow-hidden">
                <div className="">
                    <ImageCarousel slides={dummyData} className=""/>
                </div>
                <div className="z-50 text-black">
                    hehe
                </div>
            </div>
        </div>
    )
}