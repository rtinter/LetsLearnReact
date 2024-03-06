import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigation = useNavigate();

    return(
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That pange cannot be found</p>
            <button onClick={() => navigation("/")}>Back to Homepage..</button>
        </div>
    )
}

export default NotFound;