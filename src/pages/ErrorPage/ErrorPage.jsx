import { Link } from "react-router-dom";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";

const ErrorPage = () => {
    return (
        <div className="errorpage">
            <p className="title" style={{textAlign: "center"}}>This page doesn't exist</p>
            <ErrorMessage/>
            <Link to="/jobs" className="btn btn__return">Back to main page</Link>
        </div>
    )
}

export default ErrorPage;