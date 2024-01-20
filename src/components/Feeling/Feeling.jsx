import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import handleSubmit from "../handleSubmit/handleSubmit";

const Feeling = () => {
    console.log("in Feeling()");
    // return component div, container heading, input, and button
    // button, on click, dispatches input to store
    // then proceed to '/understanding'

    const [feeling, setFeeling] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = () => {
        console.log('handleSubmit()');

        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        })
        history.push('/understanding')
    }

    return(
        <>
        <div className="compContainer">
            <h1>How are you feeling today?</h1>
            <div className="rating">
                <input 
                    onChange={(event) => setFeeling(event.target.value)}
                    id='input' 
                    type="number" 
                    placeholder="Feeling on scale: 1-10?"
                />
                <button onClick={handleSubmit}>Next</button>
            </div>
        </div>
        </>
    )
}

export default Feeling