import React ,{useContext, useEffect ,useRef}from 'react';
import { arcontext } from '../context/arcontext';
import {searchContext} from '../context/searchContext';
import { yearcontext } from '../context/yearcontext';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ListVod from './listVod';
import { toast } from 'react-toastify'; 
 

function InputVod(props){
    let {setAr}  = useContext(arcontext)
    let {searchHome,setSearchHome} = useContext(searchContext)
    let {searchByYears} = useContext(yearcontext)
    let inputRef = useRef();
    let params = useParams();
    let nav = useNavigate()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    useEffect(() => { 
        doApi() ;
     }, [params.search])
     
     const doApi = async() => {
       let searchQ;
      let searchQ2 = params.search; 
      if(searchQ2){
        searchQ=searchQ2;
      } else if(searchHome){
        searchQ=searchHome;
      }else{
        searchQ= "bank";
      }
      
      console.log(searchQ)
      let _yearsQ ;  
      if(searchByYears)_yearsQ=searchByYears;
         let url = `https://www.omdbapi.com/?s=${searchQ}&y=${_yearsQ}&apikey=b2017b85`
         try{
         let resp = await axios.get(url);
         console.log(resp.data.Search);
          setAr(resp.data.Search);        
         }
         catch(err){
          toast.info("There problem, come back later");
           nav("/")
           window.location.reload();
          }
       }


      const onBtnClick = () => {
        if(inputRef.current.value){
        setSearchHome(inputRef.current.value);
        nav("/search/"+inputRef.current.value);
        }
        else alert("Please enter a valid name")
      }

    return(
        <div className='container'>
        <div>
          <div className=" d-flex inp form__group field">
            <input className='form__field my-2' ref={inputRef} placeholder='Type name...' type="search" />
            <label for="name" class="form__label">Name</label>
            <button onClick={onBtnClick} className='btn text-white'><i class="fa fa-search" aria-hidden="true"></i></button>
          </div>
        </div>
        <ListVod/>
      </div> 
    )
}

export default InputVod