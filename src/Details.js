import './styles/Details.css';
import React from 'react';


const MovieList = ({showResults}) =>{


return(

    <div className='wd'>
     <img className="image" src={"https://image.tmdb.org/t/p/w500/"+showResults.poster_path}></img>
    <p style={{fontSize:'24px'}}>{showResults.original_title}</p>
    <p>{showResults.overview}</p>

    </div>
);
}

export default MovieList;
