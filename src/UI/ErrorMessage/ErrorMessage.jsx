import errorImg from "../../resources/images/error.gif";

const ErrorMessage = () => {
    return (
        <div className="errormessage" style={{margin: "30px auto", textAlign: "center"}}>
            <img src={errorImg} alt="error"  />
        </div>
    )
}

export default ErrorMessage;