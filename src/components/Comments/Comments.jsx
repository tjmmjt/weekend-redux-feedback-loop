import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import handleSubmit from "../handleSubmit/handleSubmit";

const Comments = () => {

    // return component div, container heading, input, and button
    // button, on click, dispatches input to store
    // then proceed to '/understanding'

    const [state, setState] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = () => {
        // console.log('handleSubmit()');
        dispatch({
            type: 'ADD_COMMENTS',
            payload: state
        })
        history.push('/review')
    }

    return(
        <>
        <div className="compContainer">
            <h1>Any Additional Comments?</h1>
            <div className="rating">
                <input 
                    data-testid="input"
                    onChange={(event) => setState(event.target.value)}
                    id='input' 
                    type="text" 
                    placeholder="Comments?"
                />
                <button data-testid="next" onClick={handleSubmit}>Next</button>
            </div>
        </div>
        </>
    )
}

export default Comments