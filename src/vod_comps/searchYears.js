import React ,{useContext, useEffect ,useRef}from 'react';
import { arcontext } from '../context/arcontext';
import {searchContext} from '../context/searchContext';
import { yearcontext } from '../context/yearcontext';
import axios from 'axios';
import ListVod from './listVod';
import { useNavigate, useParams } from 'react-router-dom';

function SearchYears(props){

       let {setAr}  = useContext(arcontext);
       let {searchHome} = useContext(searchContext);
       let {searchByYears,setSearchByYears} = useContext(yearcontext)
       let selectRef = useRef();
       let params = useParams();
       let nav = useNavigate();

       useEffect(() => {
        nav("/years/"+searchByYears);
        doApiYears(searchHome?searchHome:"bank") ;
     }, [params.years])

 const doApiYears = async(_searchQ) => {    
       let  _yearsQ;
       let _yearsQ2 = params.years; 
        if(_yearsQ2){
          _yearsQ=_yearsQ2;
        } else if(searchByYears){
          _yearsQ2=searchByYears;
        }
         let url = `https://www.omdbapi.com/?s=${_searchQ}&y=${_yearsQ}&apikey=b2017b85`
         try{
         let resp = await axios.get(url);
         console.log(resp.data.Search);
         if(resp.data.Search)
          setAr(resp.data.Search);
         }
         catch(err){
           alert("There problem, come back later");
         }
       }

   const selectYears = () => {
        nav("/years/"+selectRef.current.value);
        setSearchByYears(selectRef.current.value);
      }
      
      let yearsar=[];
      for (var i = 0; i <60; ++i) {
        yearsar[i] = 2022-i;
    }
    
    return(

        <div className="container">
          <div className="row p-2">
         <div className="boxi">
            <select onChange={selectYears} ref={selectRef} className='select2 inp'>        
                <option value="o">chouse years</option>
              
                  {yearsar.map((item,i) => {
            return (
              <option key={i} value={item}>{item}</option>
            )
          })}
          
            </select>
          </div>
          </div>
          <ListVod/>
        </div> 
    )
}

export default SearchYears;