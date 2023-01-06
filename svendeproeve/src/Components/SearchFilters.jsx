import { React,useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchFilters(){

    const[formData, setFormData] = useState(
        {
            searchParameter:"",
            forSale:"",
            houseType:"",
            minPrice:0,
            maxPrice:1000000,
            floorArea:60

        }
    )

    function handleChange(event){
        const{name,value,type,checked} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type === "checked" ? checked : value
            }
        })
    }
    console.log(formData)

    return(
        <form className="flex flex-row    pt-3 justify-between w-full">
            <div className="flex bg-slate-200 rounded-lg items-center p-1 mr-5 w-1/6">
                <FaSearch className="ml-1"/>
                <input
                className="bg-slate-200 rounded-md w-64"
                type="text"
                placeholder={"Enter an adress, city or ZIP code"}
                onChange={handleChange}
                name="searchParameter"
                value={formData.searchParameter}
                />
            </div>
            <div className=" flex items-center rounded-lg bg-slate-200 mr-5 w-1/6">
                <p className="font-semibold ml-1">For Sale</p>
                <select 
                    className="bg-slate-200 rounded-lg p-1"
                    id="forSale"
                    value={formData.forSale}
                    onChange={handleChange}
                    name="forSale"
                >
                    <option value="yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
             
             <div className=" flex items-center rounded-lg bg-slate-200 mr-5 w-1/6">
                <p className="font-semibold ml-1">Type:</p>
                <select
                    className="bg-slate-200 rounded-lg p-1"
                    id="houseType"
                    value={formData.houseType}
                    onChange={handleChange}
                    name="houseType"
                >
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                </select>
             </div>

            <div className=" flex items-center rounded-lg bg-slate-200 mr-5 w-1/6">
            <p className="font-semibold ml-1">Min Price:</p>
                <select
                    className="bg-slate-200 rounded-lg p-1"
                    id="minPrice"
                    value={formData.minPrice}
                    onChange={handleChange}
                    name="minPrice"
                >
                    <option value={0}>10</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>
            <div className=" flex items-center rounded-lg bg-slate-200 mr-5 w-1/6">
                <p className="font-semibold ml-1">Max Price:</p>
                <select
                    className="bg-slate-200 rounded-lg p-1"
                    id="maxPrice"
                    value={formData.maxPrice}
                    onChange={handleChange}
                    name="maxPrice"
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>
            <div className=" flex items-center rounded-lg bg-slate-200 w-1/6">
                <p className="font-semibold ml-1">Floor Area</p>
                <select
                    className="bg-slate-200 rounded-lg p-1"
                    id="floorArea"
                    value={formData.floorArea}
                    onChange={handleChange}
                    name="floorArea"
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </form>
    )
}