import axios from "axios";
import React, {useState, useEffect} from "react";
import dummyData from "../dummyData";
import Card from "./Card";
import MapTest from "./MapTest";
import SearchFilters from "./SearchFilters";
import DistanceCalc from "./distanceCalc"
import { FaChevronDown, FaEllipsisV} from "react-icons/fa";
import MinimumDistanceSlider from "./MultiRangeSlider";


export default function Frontpage(){

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [showPriceslider, setShowPriceslider] = useState(false)
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false)
  const [mutiRangeCounterVal, setMutiRangeCounterVal] = useState([0,10000])

  const[filterData, setFilterData] = useState(
    {
        searchParameter:"",
        minPrice:0,
        maxPrice:1000000,
        minFloorArea:"",
        location,
        aconto: false,
        petsAllowed: false,
        balcony: false,
        elevator: false,
        rooms:"",
        propertyType:"",

    }
)

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true)
  //     const res = await axios.get('') // Insert url go get data when api is ready 👍
  //     setPosts(res.data)
  //     setLoading(false)
  //   }
  //   fetchPosts();  
  // }, [])
  
  function toggleShowSlider(){
    setShowPriceslider(prevShown => !prevShown)
  }
  function toggleShowFilter(){
    setShowAdvancedFilter(prevShown => !prevShown)
  }

  const cardElement = dummyData.map(item =>{
      return(
        <Card
          key={item.id}
          item={item}
        />
      )
    })

    function handleChange(event){
      const{name,value,type,checked} = event.target
      setFilterData(prevFormData => {
          return{
              ...prevFormData,
              [name]: type === "checkbox" ? checked : value
          }
      })
      console.log(filterData);
  }
//aconto, petsAllowed, elevatorAvalible, balcony, rooms, areal
  const advancedSearchFilter = (
    <div className=" p-3 h-auto w-96 bg-white border border-gray rounded-lg">
      <h1>Ameneties</h1>
      <div className="">
        <ul className="grid grid-cols-2 pb-3">
          <li className="w-40">
            <div className="flex items-center">
              <input
                className="mr-1"
                type="checkbox"
                name="aconto"
                checked={filterData.aconto}
                onChange={handleChange}
                />
              <label>Aconto</label>
            </div>
          </li>
          <li className="w-40">
            <div className="flex items-center pl-3">
              <input
                className="mr-1"
                type="checkbox"
                name="petsAllowed"
                checked={filterData.petsAllowed}
                onChange={handleChange}
                />
              <label>Pets allowed</label>
            </div>
          </li>
          <li className="w-40">
            <div className="flex items-center">
              <input
                className="mr-1"
                type="checkbox"
                name="balcony"
                checked={filterData.balcony}
                onChange={handleChange}
                />
              <label>Balcony</label>
            </div>
          </li>
          <li className="w-44">
            <div className="flex items-center pl-3">
              <input
                className="mr-1"
                type="checkbox"
                name="elevator"
                checked={filterData.elevator}
                onChange={handleChange}
                />
              <label>Elevator available</label>
            </div>
          </li>
        </ul>
        <div className="grid gap-6 grid-cols-2">
          <div className="w-40">
            <input 
              className="flex pl-2 h-8  w-36 border border-gray-300 rounded-md items-center focus:outline-none"
              type="text"
              name="rooms"
              placeholder="Rooms"
              value={filterData.rooms}
              onChange={handleChange}
              />
          </div>
          <div className="w-40">
            <input
              className="flex pl-2 h-8 w-36 border border-gray-300 rounded-md items-center focus:outline-none"
              type="text"
              name="minFloorArea"
              placeholder="m3"
              value={filterData.minFloorArea}
              onChange={handleChange}
              />
          </div>
        </div>
      </div>
    </div>
  )

    return(
      <div className="  shadow-inner font-DMsans">
        <div className="h-screen bg-hero bg-cover select-none flex  w-full">


          {/* <img className="h-full w-full bg-cover select-none" src="src\assets\frontpageImage.jpg"/> */}
          <div className=" flex justify-center items-center w-screen">
            <div className="flex bg-white-rgba h-36 w-3/5 rounded-xl justify-center items-center">
              <div className="flex bg-white h-32 w-[98%] m-2 rounded-xl  items-center justify-between">
                <input 
                  className="flex ml-6 pl-2 mr-3 h-12 w-1/4 border border-gray-300 rounded-md items-center focus:outline-none"
                  placeholder="Enter keyword..."
                  type="text"
                  name="searchParameter"
                  onChange={handleChange}
                  value={filterData.searchParameter}
                  />
                <div className="flex mr-3 pl-2 h-12 w-1/5 border border-gray-300 rounded-md items-center relative">
                  {/* <label>Property Type</label> */}
                  <select 
                    className="w-full relative focus:outline-none"
                    id="propertyType"
                    value={filterData.propertyType}
                    onChange={handleChange}
                    name="propertyType"
                    >
                    <option value="">Property Type</option>
                    <option value="Hus">1</option>
                    <option value="Lejlighed">2</option>
                  </select>
                </div>
                <div className="w-1/6">
                  <DistanceCalc/>
                </div>
                <div className="flex flex-col w-1/6">              
                  <button onClick={toggleShowSlider} className="flex mr-3 pl-2 h-12 w-full border border-gray-300 rounded-md items-center focus:outline-none">Price</button>
                  <div className="absolute mt-14">
                    {showPriceslider && <MinimumDistanceSlider minVal={filterData.minPrice} maxVal={filterData.maxPrice} handleChange={handleChange}/>} 
                  </div>
                </div>
                <div className="flex flex-col">
                  <button onClick={toggleShowFilter} className="flex justify-between mr-3 pl-2 h-12 w-[10%]  rounded-md items-center focus:outline-none">
                    <p>Filtre</p>
                    <FaEllipsisV/>
                  </button>
                  <div className="absolute mt-14">
                    {showAdvancedFilter && advancedSearchFilter}
                  </div>
                </div>
                <button className="flex justify-center mr-3 h-12 w-1/6 border-2 text-white  bg-sky-500 border-sky-500 rounded-md items-center transition-all focus:outline-none hover:bg-white hover:text-sky-500 hover:transition-all">Søg</button>
              </div>
            </div>
            {/* <DistanceCalc/> */}
          </div>
        </div>
        
        <div className="flex flex-col p-5">
        <SearchFilters/>
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