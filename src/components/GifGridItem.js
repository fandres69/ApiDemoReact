import React,{useState,useEffect} from 'react'

export const GifGridItem = ({title,url}) => {   

    return (
        <>
        <br/>
        <div className="cStyle card" >            
           <img className="imagenSize card-img-top " src={url} alt={title}/>
           <h5><p className="card-title">{title}</p></h5>
        </div>
        </>
    )
}
