import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Feeling = () => {
    console.log("in Feeling()");

    return(
        <>
        <div className="compContainer">
            <h1>How are you feeling today?</h1>
            <h3>Feeling?</h3>
            <div className="rating">
                <input type="number" placeholder="Feeling on scale: 1-10?"/>
                <Link to='/understanding'><button>Next</button></Link>
            </div>
        </div>
        </>
    )
}

export default Feeling