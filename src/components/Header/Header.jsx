import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h2 className="title">Job Details</h2>
                <div className="header__links">
                    <button className="header__btn">
                        <FaRegBookmark/> 
                        Save to my list
                    </button>
                    <button className="header__btn">
                        <FaShareAlt/>
                        Share
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;