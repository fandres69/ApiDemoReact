import {useState,useEffect} from 'react';
import { getGif } from '../helpers/GetGif';

export const useGifFetch=(category)=>{

   
    const [state, setState] = useState({
        data:[],
        loading:true
    });
    
    useEffect(() => {
       getGif(category)
       .then(img=>{
           setState({
               data:img,
               loading:false
           });
       })
       ;
    }, [])

    return state; //retorna data, loading:true 
}