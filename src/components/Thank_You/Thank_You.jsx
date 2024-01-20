import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Thank_You = () => {
    console.log("in Thank_You()");

    const history = useHistory()
    const dispatch = useDispatch()

    const handleReset = () => {
        dispatch({
            type: 'RESET_FEEDBACK',
        })

        history.push('/')
    }

    return(
        <>
            <h1>Thank You!</h1>
            <h3>Your Feedback was Recorded</h3>

            <button data-testid="next" onClick={handleReset}>Take Another Survey</button>
        </>
    )
}

export default Thank_You