import axios from "axios";
import React, {useState, useEffect} from "react";
import dummyData from "../dummyData";
import Card from "./Card";
import MapTest from "./MapTest";
import SearchFilters from "./SearchFilters";
import DistanceCalc from "./distanceCalc"


export default function Frontpage(){

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true)
  //     const res = await axios.get('') // Insert url go get data when api is ready 👍
  //     setPosts(res.data)
  //     setLoading(false)
  //   }
  //   fetchPosts();  
  // }, [])
  

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
        <div className="h-screen bg-hero bg-cover select-none ">


          {/* <img className="h-full w-full bg-cover select-none" src="src\assets\frontpageImage.jpg"/> */}
          <div className="">
            <DistanceCalc/>
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