

const MySpinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{margin: "50px auto", background: "rgb(255, 255, 255)", display: "block"}} width="250px" height="250px" viewBox="0 0 160 160" preserveAspectRatio="xMidYMid">
            <path d="M0 50A50 50 0 0 0 100 50A50 54 0 0 1 0 50" fill="#38415d" stroke="none">
            <animateTransform attributeName="transform" type="rotate" dur="1.1494252873563218s" repeatCount="indefinite" keyTimes="0;1" values="0 50 52;360 50 52"></animateTransform>
            </path>
        </svg>
    )
}

export default MySpinner;