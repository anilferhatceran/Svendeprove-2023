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

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true)
  //     const res = await axios.get('') // Insert url go get data when api is ready 👍
  //     setPosts(res.data)
  //     setLoading(false)
  //   }
  //   fetchPosts();  
  // }, [])
  
  function toggleShown(){
    setShowPriceslider(prevShown => !prevShown)
  }

    const cardElement = dummyData.map(item =>{
        return(
          <Card
            key={item.id}
            item={item}
          />
        )
      })
    return(
      <div className="  shadow-inner font-DMsans">
        <div className="h-screen bg-hero bg-cover select-none flex  w-full">


          {/* <img className="h-full w-full bg-cover select-none" src="src\assets\frontpageImage.jpg"/> */}
          <div className=" flex justify-center items-center w-screen">
            <div className="flex bg-white-rgba h-36 w-3/5 rounded-xl justify-center items-center">
              <div className="flex bg-white h-32 w-[98%] m-2 rounded-xl  items-center justify-between">
                <input placeholder="Enter keyword..." type="text" className="flex ml-6 pl-2 mr-3 h-12 w-1/4 border border-gray-300 rounded-md items-center focus:outline-none"/>
                <div className="flex mr-3 pl-2 h-12 w-1/5 border border-gray-300 rounded-md items-center relative">
                  {/* <label>Property Type</label> */}
                  <select className="w-full relative focus:outline-none">
                    <option>Property Type</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div className="w-1/6">
                  <DistanceCalc/>
                </div>
                <button onClick={toggleShown} className="flex mr-3 pl-2 h-12 w-1/6 border border-gray-300 rounded-md items-center focus:outline-none">Price</button>
                {showPriceslider && <MinimumDistanceSlider/>} 
                <button className="flex justify-between mr-3 pl-2 h-12 w-[10%]  rounded-md items-center focus:outline-none">
                  <p>Filtre</p>
                  <FaEllipsisV/>
                 </button>
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