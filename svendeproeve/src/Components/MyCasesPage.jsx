import React from "react";
import { FaPlus } from "react-icons/fa";
import MyCaseCard from "./MyCaseCard";



export default function MyCasesPage(){
    return(
        <div className="font-DMsans">
            <div className='bg-sky-500 h-20'/>
            <div className="flex flex-col pl-40 pr-40 pt-20">
                <div className="flex flex-row justify-between items-center ">
                    <h1 className="font-semibold text-3xl text-g">My Cases</h1>
                    <button className="rounded-full bg-sky-500 p-1 text-xl hover:text-white"><FaPlus/></button>
                </div>
                <div className="border border-slate-300 h- rounded-sm">
                    <div className="flex flex-row bg-sky-500 text-white h-12 w-full justify-between items-center pr-2 pl-2">
                        <div className="pl-4">
                            <label>Listing Title</label>
                        </div>
                        <div>
                            <label className="pr-40">Date published</label>
                            <label className="pr-32">Status</label>
                            <label className="pr-32">Action</label>
                        </div>
                    </div>
                <MyCaseCard/>
                </div>
            </div>
        </div>
    )
}
