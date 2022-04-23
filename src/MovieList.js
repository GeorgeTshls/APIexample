import './styles/MovieList.css';
import React from 'react';
import Details from './Details';
import { motion } from "framer-motion";


const MovieList = ({ results }) =>{

    const [showResults, setShowResults] = React.useState(false)
    const Show = (index) => setShowResults(index)

    const childVariants ={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1
        }
    }

    const childVariants2={
        hidden:{
            scale:0
        },
        visible:{
            scale:1
        },
    }

    const containerVariants={
        
        hidden:{
            x:-100,
            opacity:0
        },
        visible:{
            x:0,
            opacity:1
        },
        transition:{
            duration:0.2, 
            when:"beforeChildren",
            staggerChildren:0.6
        }

    }

    
return(
    
    results.map((items, index, array)=>(

        <motion.div variants={containerVariants} transition={{delay:index*0.05}} initial="hidden" animate="visible" className='mainwrap'>
        
        

        <div className="wraplist" onClick={() => Show(array[index])} >
                    <motion.img variants={childVariants} className="poster" src={"https://image.tmdb.org/t/p/w500/"+items.poster_path}/>
                <div className="wrapdetails">
                    <div className="name">{items.original_title}</div>
                    <br />
                    <motion.div variants={childVariants2}transition={{delay:results.length*0.05}} className="date">{items.release_date}</motion.div>
                </div>
        </div>

        
        
        {showResults.id == array[index].id && <motion.div variants={childVariants}><Details showResults={showResults} /></motion.div>}
        </motion.div>


    ))



);
}



export default MovieList;