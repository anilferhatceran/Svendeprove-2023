import React from "react";
import dummyData from "../dummyData";
import Card from "./Card";
import SearchFilters from "./SearchFilters";

export default function Frontpage(){
    const cardElement = dummyData.map(item =>{
        return(
          <Card
            key={item.id}
            item={item}
          />
        )
      })
    return(
      <div className=" ">
        <SearchFilters/>
        <div className="flex flex-col">
            <div className="flex flex-row h-screen w-full">
                <div className=" h-full w-1/2 flex flex-wrap m-5 ">
                    {cardElement}
                </div>
                <div className=" h-full w-1/2 p-5">
                  <div className=" bg-black h-full w-full rounded-3xl">

                  </div>
                </div>
            </div>
        </div>
      </div>
    )
}