import React, { Component } from 'react'
import NewsInfo from '../Components/NewsInformation';
import Navbar2 from '../Components/navbar-2';
import Footer from '../Components/footer';

const NewsData = () => {
  return (
    <div>
        <Navbar2 />
        <NewsInfo />
        <Footer />
    </div>
  )
}

export default NewsData;