import React,{useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import './style.scss';
import useFetch from '../../../hooks/useFetch';
import Img from "../../../components/lazyLoadingImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"

const HeroBanner = () => {
    const [background,setbackground]=useState("");
    const [query,setQuery]=useState("");
    const navigate=useNavigate();
    const {url}= useSelector((state)=>state.home)
    const {data,loading}=useFetch("/movie/upcoming");

//  for background image at top
    useEffect(()=>{

        const bg=url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
        setbackground(bg);

    },[data])

    const searchQueryHandeler=(event)=>{
        if(event.key === "Enter" && query.length>0){
           navigate(`/search/${query}`)
        }

    }

  return (
    <div className="heroBanner">
        {!loading && <div className="backdrop-img">
         <Img src={background}/>


        </div>}
            
            <div className="opacity-layer"></div>
        <ContentWrapper>

     
            <div className="heroBannerContent">
                <span className="title">Welcome</span>
                <span className="subTitle">Millions of movies,Tv shows and people to discover.
                Explore now.</span>
                <div className="searchInput">
                    <input type="text" placeholder='Search for a movie or tv show.' onChange={(e)=>setQuery(e.target.value)} onKeyUp={searchQueryHandeler} />
                    <button>Search</button>
                </div>
            </div>
       
        </ContentWrapper>
    </div>
  )
}

export default HeroBanner