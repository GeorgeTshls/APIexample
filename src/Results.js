import './styles/Results.css'
import { useState, useEffect } from 'react';
import MovieList from './MovieList';


const Results = ({query}) =>{
    const [results, setResults] = useState(null);


      useEffect(() =>{
        fetch('https://api.themoviedb.org/3/search/movie?api_key=6de482bc8c5768aa3648618b9c3cc98a&query='+query)
        .then(res => {
          return res.json()
        })
        .then((data) => {
          setResults(data.results)
        });
      },[query]);

    return(
        <div className='wrapmain'>
            {results && <MovieList results={results}/>}
            <div id='Details'></div>
            
        </div>
    );
}

export default Results;