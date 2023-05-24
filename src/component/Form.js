import React, {useState} from "react";
let DATA = []

function Form(props){
    const [name, setName] = useState('')

    function handleChange(e){
        setName(e.target.value)
    }
    
    function handleSubmit(e){
        if(name != ''){
            e.preventDefault()
            props.click(name, false)
            setName('')
        }else{
            e.preventDefault()
            console.log('empty text box')
        }

        
    }

    return(
        <form>
            <h1>Todo</h1>
            <label>What Needs to be done?</label>
            <br/>
            <input
                type="text"
                value={name}
                onChange={handleChange}
            >
                
            </input>
            <br></br>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form