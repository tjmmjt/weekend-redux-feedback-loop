import { useSelector } from "react-redux";

const ReviewFeedback = () => {
    // console.log("in ReviewFeedback()");

    // retrieve store data
    const feedback = useSelector(store => store.feedback)
    // console.log(feedback);

    // POST review
    const handlePOST = () => {
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
            <button>Submit</button>
        </div>
        </>
    )
}

export default ReviewFeedback