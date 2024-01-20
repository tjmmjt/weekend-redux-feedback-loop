import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import handleSubmit from "../handleSubmit/handleSubmit";

const Feeling = () => {

    // return component div, container heading, input, and button
    // button, on click, dispatches input to store
    // then proceed to '/understanding'

    const [state, setState] = useState(5)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = () => {
        // console.log('handleSubmit()');
        dispatch({
            type: 'ADD_FEELING',
            payload: state
        })
        history.push('/understanding')
    }

    return(
        <>
        <div className="compContainer">
            <h1>How are you feeling?</h1>
            <div className="rating">
                <input 
                    data-testid="input"
                    onChange={(event) => setState(Number(event.target.value))}
                    id='input' 
                    type="number" 
                    placeholder="1-10?"
                />
                <button data-testid="next" onClick={handleSubmit}>Next</button>
            </div>
        </div>
        </>
    )
}

export default Feeling