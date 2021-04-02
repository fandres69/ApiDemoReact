import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//import PropTypes from 'prop-typed';

const GifExpertApp=()=>{
   // let categorias=['One Punch','Dragon Ball', 'Samurai X'];
    const [categorias, setCategorias] = useState(['One Punch']);

     return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategorias={setCategorias}/>

            <hr/>
            <ol>
                {
                    categorias.map(cat=>

                        /**Se llama componente GifGrid */
                        <GifGrid  key={cat} category={cat}/>
                        //(<li key={cat}>{cat}</li>))
                    )
                }
            </ol>
              
            
        </> 

    );
}
export default GifExpertApp;