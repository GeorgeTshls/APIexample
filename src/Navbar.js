import { useState } from 'react';
import './styles/Navbar.css';
import Results from './Results';

const Navbar = () =>{

    const [query, setResults] = useState(null);


    const handlesearch = () =>{
        let query = document.getElementById("name").value;
        setResults(query);
}

    return(

        <div>
        <div className='wrapmain'>
            <div className='wrap'>
                <input type="text" id="name" placeholder='Search for Movies'/>
                <input type="submit" value='Search' onClick={() => handlesearch()}/>
            </div>
        </div>

        <div className='ResultsWrap' >

        {query && <Results query={query} />}

        </div>
        </div>
        
    );
}

export default Navbar;