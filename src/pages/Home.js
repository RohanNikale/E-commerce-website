import React from 'react'
import Category from '../components/Category';
import Services from "../components/Services";
import Topmain from "../components/Topmain";
export default function Home() {
    return (
        <div>
            <Topmain />
            <Services />
            <Category/>
        </div>
    )
}
