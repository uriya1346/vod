import React,{useContext} from 'react';
import { arcontext } from '../context/arcontext';
import ItemVod from './itemVod';

function ListVod(props){
    let {ar,setAr}  = useContext(arcontext)
    
    
    return(
        <div className='container'>
        <div className="row p-3">
          {ar.map(item => {
            return (
             <ItemVod key={item.imdbID} item={item}/>
            )
          })}
        </div>
      </div>
    )
}

export default ListVod