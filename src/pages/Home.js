import React, { useEffect } from 'react'
import Category from '../components/Category';
import Featuredcollection from '../components/Featuredcollection';
import Services from "../components/Services";
import Topmain from "../components/Topmain";
export default function Home() {

    return (
        <div>
            <Topmain />
            <Services />
            <Category/>
            <Featuredcollection/>
        </div>
    )
}
