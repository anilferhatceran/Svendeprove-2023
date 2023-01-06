import axios from "axios";
import React, {useState, useEffect} from "react";
import dummyData from "../dummyData";
import Card from "./Card";
import MapTest from "./MapTest";
import SearchFilters from "./SearchFilters";

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
      <div className="bg-slate-100 p-5 shadow-inner font-DMsans">
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