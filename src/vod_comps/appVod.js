import React, { useState } from 'react';
import InputVod from './inputVod';
import LayoutVod from './layoutVod';
import SearchYears from './searchYears';
import {searchContext} from '../context/searchContext';
import { yearcontext } from '../context/yearcontext';
import { arcontext } from '../context/arcontext';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import MoreInfo from './moreInfo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function AppVod(props){
    let [ar, setAr] = useState([]);
    let [searchHome, setSearchHome] = useState();
    let [searchByYears, setSearchByYears] = useState();

    return(
        <arcontext.Provider value={{ ar: ar, setAr: setAr }}>
           <searchContext.Provider value={{  searchHome, setSearchHome }}>
            <yearcontext.Provider value={{  searchByYears, setSearchByYears }}>
             <Router>
             <ToastContainer/>
               <Routes>
                 <Route path="/" element={<LayoutVod/> }>
                  <Route index element={ <InputVod/>} />              
                  <Route path="/search/:search" element={<InputVod/>} /> 
                  <Route path="/years/:years" element={<SearchYears/>} /> 
                  <Route path="/info/:id" element={<MoreInfo/>} />  
                </Route>
              </Routes>
            </Router>     
          </yearcontext.Provider>
         </searchContext.Provider>
        </arcontext.Provider> 
    )
}

export default AppVod