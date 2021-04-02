import React,{useState, useEffect}  from 'react'
//import { getGif } from '../helpers/GetGif';
import { useGifFetch } from '../hooks/useGifFetch';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    /**Esta linea se cambia para usar los custom hooks */
    //const [images, setimages] = useState([]);
    /**Esta instrucción ayuda a que solo se nos ejecute una sola vez una función, en este caso lo
    * que se tenga como primer argumento.
    */

    //    useEffect(()=>{
    //        getGif(category)
    //        .then(setimages);
        
    //     },[]);
    /**Api_key para consumo end pont api de búsqueda */
   
    /**Metodo que genera la peticion al end point y obtiene la data solicitada */
    // const getGif=async()=>{    
        
    //     //const category='Rick and Morty';
    //     const limit=10;
    //     /**Url End Point */
    //     const ulr=`https://api.giphy.com/v1/gifs/search?q=${category}&limit=${limit}&api_key=${api_key}`;
    //     /**Se realiza la peticion al API */
    //     const respuesta= await fetch(ulr);
    //     /**Se convierte la respuesta a formato json */
    //     const {data}=await respuesta.json();       
    //     /**Se recorren los datos y se extrae la información que se necesita en un objeto */
    //     const gif=data.map(im=>{
    //         return{
    //             id: im.id,
    //             title: im.title,
    //             url:im.images.downsized_medium.url
    //         }
    //     });                
    //     setimages(gif);
    // }   
    // const {data,loading}=useGifFetch();
    // console.log(data);


    /**La linea anterior se cambia para usar los custom hooks */    
    const {data, loading}=useGifFetch(category);    
    return (
        <>
            <h3>{category}</h3> 
            {loading?'Cargando ...':'Fin de carga'}   
            <br/>
            <ol>
                {
                   data.map(imm=>   
                    <GifGridItem 
                    key={imm.id}
                    {...imm}/>                     
                   )
                }
            </ol>  
            <br/>         
        </>
    )
}
