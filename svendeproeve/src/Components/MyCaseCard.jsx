import React from "react";
import { FaTrash, FaPencilAlt} from "react-icons/fa";




export default function MyCaseCard(){
    return(
        <div className="font-DMsans h-40 ">
            <div className="flex flex-row justify-between items-center h-full">
                <div className="itm">
                    <div className="flex flex-row pl-4">
                        <div>
                            <img className="h-32 max-w-lg object-contain rounded-3xl" src="https://images.pexels.com/photos/4469136/pexels-photo-4469136.jpeg"/>
                        </div>
                        <div className="flex flex-col justify-evenly">
                            <p>Luxury Family HOme</p>
                            <p>Murskeen 37 2 tv</p>
                            <p>$10000/mo</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="pr-40">
                        <p> 30 august, 2023</p>
                    </div>
                    <div className="pr-32">
                        <div className="bg-sky-500 text-white rounded-md p-1">
                            <p>Pending</p>
                        </div>
                    </div>
                    <div className="flex pr-32">
                        <div className="flex items-center">
                            <button className="text-lg bg-slate-200 rounded-md p-1 mr-2 text-sky-500"><FaTrash/></button>
                            <button className="text-lg bg-slate-200 rounded-md p-1 text-sky-500"><FaPencilAlt/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
