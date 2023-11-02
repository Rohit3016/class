import Navbar from './Navbar'
import React from 'react'
import FetchData from './FetchData'

const News_Home = () => {
  return (
    <div style={{minHeight:"150vh"}}>
      <Navbar/>
      {/* <h2>News_Home</h2> */}
      <FetchData/>
    </div>
  )
}

export default News_Home
