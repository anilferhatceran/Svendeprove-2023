import React from "react";
import dummyData from "../dummyData";
import ImageCarousel from "./ImageCarousel";

export default function CasePage(){
    const carouselElement = dummyData.map((item, index) =>{
        return(
          <ImageCarousel
            key={item.id}
            id={item.id}
            image={item.image}
          />
        )
      })
      
    return(
        <div className="bg-white h-screen mt-10">
            <div className="w-full bg-slate-300">
                {carouselElement}
            </div>
        </div>
    )
}