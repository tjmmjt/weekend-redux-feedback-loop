import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import handleSubmit from "../handleSubmit/handleSubmit";

const Support = () => {

    // return component div, container heading, input, and button
    // button, on click, dispatches input to store
    // then proceed to '/understanding'

    const [state, setState] = useState(5)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('handleSubmit()');
        dispatch({
            type: 'ADD_SUPPORT',
            payload: state
        })
        history.push('/comments')
    }

    return(
        <>
        <div className="compContainer">
            <h1>Do you feel supported this week?</h1>
            <form className="rating" onSubmit={handleSubmit}>
                <input
                    min={1}
                    max={10}
                    data-testid="input"
                    onChange={(event) => setState(Number(event.target.value))}
                    id='numInput' 
                    type="number"
                    placeholder="1-10?"
                    required
                />
                <button data-testid="next">Next</button>
            </form>
        </div>
        </>
    )
}

export default Support