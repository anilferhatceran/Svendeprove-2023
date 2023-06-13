import {React,useEffect} from "react";
import { FaPlus } from "react-icons/fa";
import MyCaseCard from "./MyCaseCard";
import { useDispatch, useSelector } from "react-redux";
import {getUserCases } from "../features/cases/caseSlice";



export default function MyCasesPage(){

    const dispatch = useDispatch();
    const { cases } = useSelector((state) => state.case);
  
    useEffect(() => {
      const fetchData = () => {
        dispatch(getUserCases());
        console.log(cases);
      };
      fetchData();
    }, []);
    

    const cardElement = cases.map((caseItem) => {
        return <MyCaseCard key={caseItem.id} case={caseItem} />;
      });

    return(
        <div className="font-Nunito">
            <div className='bg-sky-500 h-20'/>
            <div className="flex flex-col pl-40 pr-40 pt-20">
                <div className="flex flex-row justify-between items-center ">
                    <div>
                        <h1 className="font-semibold text-3xl text-g">My Cases</h1>
                    </div>
                    <div className="flex items-center">
                        <label className="pr-2">Add case</label>
                        <button className="rounded-full bg-sky-500 p-1 text-lg hover:text-white"><FaPlus/></button>
                    </div>
                </div>
                <div className="border border-slate-300  rounded-sm">
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
                {cardElement}
                
                
                </div>
            </div>
        </div>
    )
}
