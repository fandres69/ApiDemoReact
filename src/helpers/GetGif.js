export const getGif=async(category)=>{    
    const api_key='9frcGdGAqfuTkn6DkYXo1QOsz0lZpYgW';
    //const category='Rick and Morty';
    const limit=10;
    /**Url End Point */
    const ulr=`https://api.giphy.com/v1/gifs/search?q=${category}&limit=${limit}&api_key=${api_key}`;
    /**Se realiza la peticion al API */    
    const respuesta= await fetch(ulr);
    /**Se convierte la respuesta a formato json */
    const {data}=await respuesta.json();       
    /**Se recorren los datos y se extrae la información que se necesita en un objeto */
    const gif=data.map(im=>{
        return{
            id: im.id,
            title: im.title,
            url:im.images.downsized_medium.url
        }
    });                
    return gif;
}  