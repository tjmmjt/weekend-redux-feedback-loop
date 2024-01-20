import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const handleSubmit = (type, payload, route) => {
    console.log('handleSubmit()');
    const history = useHistory()
    const dispatch = useDispatch()
    
    dispatch({
        type: type,
        payload: payload
    })
    history.push(route)
}

export default handleSubmit