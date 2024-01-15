import React from 'react';

import Navbar from "./NavBar";
import Table from "./Table";
import Form from "./Form";


const Home = () => {
  return (
    <div className='flex flex-wrap justify-evenly '>
       
      <Navbar/>
        <Form/>
        <Table/>
    </div>
  )
}

export default Home