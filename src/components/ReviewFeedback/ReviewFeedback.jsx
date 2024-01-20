import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ReviewFeedback = () => {
    // console.log("in ReviewFeedback()");

    // retrieve store data
    const feedback = useSelector(store => store.feedback)
    const history = useHistory()

    // POST review
    const handlePOST = () => {
        axios.post('/api/feedback', feedback)
        .then(result => {
            console.log('Feedback Submitted');
        })
        .catch(err => {
            console.error('Feedback failed to submit:', err)
        })

        history.push('/thank_you')
    }
    
    // ! feeling, understanding, support, comments, review, thank you.
    
    return(
        <>
        <div className="compContainer">
            <h1>Review Your Feedback</h1>
            <div className="review">
                <ul>
                    <li><span id="reviewItems">Feeling:</span> {feedback.feeling}</li>
                    <li><span id="reviewItems">Understanding:</span> {feedback.understanding}</li>
                    <li><span id="reviewItems">Support:</span> {feedback.support}</li>
                    <li><span id="reviewItems">Comments:</span> {feedback.comments}</li>
                </ul>
            </div>
            <button data-testid="next" onClick={handlePOST}>Submit</button>
        </div>
        </>
    )
}

export default ReviewFeedback