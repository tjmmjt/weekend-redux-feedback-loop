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

    const handleSubmit = (event) => {
        event.preventDefault()
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
            <form className="rating" onSubmit={handleSubmit} data-testid="next">
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
                <button>Next</button>
            </form>
        </div>
        </>
    )
}

export default Feeling