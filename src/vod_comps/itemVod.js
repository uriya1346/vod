import React from 'react';
import { useNavigate} from 'react-router-dom';

function ItemVod(props){
    let item = props.item;
    let nav = useNavigate();


    const onBtnClick = () => { 
        nav("/info/"+item.imdbID);
    }

    return(
        <div className=' col-md-4 col-lg-3 p-3'>
        <div className="box card shadow p-3" >
            <img src={item.Poster=="N/A"?"https://m.media-amazon.com/images/M/MV5BMTMyNzEyNjAzM15BMl5BanBnXkFtZTcwODY0ODQ0NQ@@._V1_SX300.jpg":item.Poster} className='card-img-top' />
             {/* <h3>{item.Title}</h3> */}
            <button onClick={onBtnClick}  target="_blank" className='raise'>INFORMATION</button>
          </div>
         </div>
    
    )
}

export default ItemVod