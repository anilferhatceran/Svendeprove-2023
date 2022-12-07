import React from "react";
import dummyData from "../dummyData";
import Card from "./Card";
import MapTest from "./MapTest";
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
      <div className="bg-slate-100 m-5">
        <SearchFilters/>
        <div className="flex flex-col">
            <div className="flex flex-row h-screen w-full mt-5">
                <div className=" h-full w-1/2 flex flex-wrap ">
                    {cardElement}
                </div>
                <div className=" h-full w-1/2 pl-5 ">
                  <div className=" bg-black h-full w-full rounded-3xl">
                    <MapTest/>
                  </div>
                </div>
            </div>
        </div>
      </div>
    )
}