import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import Fooddisplay from '../../components/fooddisplay/fooddisplay'
import Appdownload from '../../components/Appdownload/Appdownload'

const Home = () => {

const[category,setcategory]=useState("All")

  return (
    <div >
      <Header/>
      <Exploremenu category={category}  setcategory={setcategory}/>
      <Fooddisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home
