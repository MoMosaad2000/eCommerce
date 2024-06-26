import React from "react";
import Announcement from "../components/Announcement";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
const  Home= ()=>{ 
    return(
        <div>
           <Announcement/>
           <Nav/>
           <Slider/>
           <Categories/>
           <Products/>
           <NewsLetter/>
           <Footer/>
        </div>
    )
}

export default Home;