import React,{useState} from 'react'
import ProTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange=(e)=>{
        //console.log(e.target.value);
        setinputValue(e.target.value);
    }

    const handleForm=(e)=>{
        e.preventDefault();
        if (inputValue.trim().length>=2) {            
            setCategorias(cat=>[inputValue.trim(),...cat]); 
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleForm}>
            <h2>Add Category</h2>
            <div className="input-group flex-nowrap" >               
                <input placeholder="New Category" type="text" onChange={handleInputChange} value={inputValue}/>
            </div>
        </form>
    )
}

AddCategory.propTypes={
    setCategorias:ProTypes.func.isRequired,
}
