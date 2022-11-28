import React from "react";
import { FaBed, FaBath, FaRuler } from "react-icons/fa";

export default function Card(props){
    return(
        <div className="flex flex-col max-w-[20em]  mr-5 grow-0 shrink-0 relative h-max bg-white rounded-t-3xl rounded-b-2xl shadow-sm">
            <img src={(`${props.item.image}`)} className="object-cover rounded-2xl grow-0 w-full h-52"></img>
            <p className="ml-5 font-bold text-xl max-w-sm">$ {props.item.price}</p>
            <p className="ml-5 max-w-sm"> {props.item.adress}</p>
            <div className="flex flex-row mb-3 justify-evenly mt-2 font-semibold">
                <div className="flex flex-row justify-center items-center bg-slate-200 rounded-lg h-8 w-16  mr-2"><FaBed className="text-orange-500 mr-2"/>{props.item.bedrooms}</div>
                <div className="flex flex-row justify-center items-center bg-slate-200 rounded-lg h-8 w-16 mr-2"><FaBath className="text-sky-500 mr-2"/>{props.item.bathrooms}</div>
                <div className="flex flex-row justify-center items-center bg-slate-200 rounded-lg h-8 w-20"><FaRuler className="text-emerald-500 mr-2"/>{props.item.squareMeters}²</div>
            </div>
        </div>
    )
}