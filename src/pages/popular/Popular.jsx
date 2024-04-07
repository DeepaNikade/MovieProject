import React,{useState} from 'react';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import '../../pages/home/style.scss';
import SwitchTab from '../../components/switchTabs/SwitchTab';
import useFetch from '../../hooks/useFetch';
import Carousel from '../../components/carousel/Carousel';


const Popular = () => {

    const [endpoint,setEndpoint]=useState("movie");
    const {data,loading}=useFetch(`/${endpoint}/popular`);

    

 const onTabChange=(tab)=>{
    setEndpoint(tab === "Movies" ? "movie" :"tv");
  
 }

  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">What's Popular</span>
            <SwitchTab data={["Movies","Tv Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default Popular;