import React from 'react'
import Navbar from './Navbar'
import Homepage from './Homepage'
import Client from './Client'
import Details from './Details'
import Helpingpage from './Helpingpage'
import Designidea from './Designidea'
import Review from './Review'
import CommunityUpdate from './CommunityUpdate'
import Footerframe from './Footerframe'
import Footer from './Footer'


 const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Client></Client>
      <Details></Details>
     <Helpingpage></Helpingpage>
     <Designidea></Designidea>
     <Review></Review>
     <CommunityUpdate></CommunityUpdate>
     <Footerframe></Footerframe>
     <Footer></Footer>
    </>
  )
}

export default App
