import React from 'react';
import Subpage1 from '../components/Subpage1'
import Subpage2 from '../components/Subpage2'
import Home from '../components/Home'
import Content2 from './Content2';
import Content3 from './Content3';

import {BrowserRouter, Routes, Route} from "react-router-dom"


function TodoList() {


  return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route path ="/subpage1" element={<Subpage1/>}/>
                <Route path ="/subpage2" element={<Subpage2 />}/>
                <Route  path="/content2/:id" element={<Content2/>}/>
                <Route path ="/content3" element={<Content3 />} />
            </Routes>
        </BrowserRouter>     
    );
}



export default TodoList;
