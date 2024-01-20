import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import handleSubmit from "../handleSubmit/handleSubmit";

const Understanding = () => {
    console.log("in Understanding()");
    // return component div, container heading, input, and button
    // button, on click, dispatches input to store
    // then proceed to '/understanding'

    const [understanding, setUnderstanding] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = () => {
        console.log('handleSubmit()');

        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        })
        history.push('/support')
    }

    return(
        <>
        <div className="compContainer">
            <h1>How are you understanding this weeks material?</h1>
            <div className="rating">
                <input 
                    onChange={(event) => setUnderstanding(Number(event.target.value))}
                    id='input' 
                    type="number" 
                    placeholder="1-10?"
                />
                <button onClick={handleSubmit}>Next</button>
            </div>
        </div>
        </>
    )
}

export default Understanding