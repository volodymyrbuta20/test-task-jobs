import { FaMapMarkerAlt, FaStar, FaRegBookmark } from "react-icons/fa";
import "./JobsListItem.scss";

const JobsListItem = (props) => {

    const {name, title, address, pictures} = props.job

    return (
        <div className="jobsListItem">
            <div className="jobsListItem__wrapper">
                <div className="jobsListItem__block">
                    <div className="jobsListItem__image">
                        <img src={pictures[0]} alt="icon" className="jobsListItem__icon"/>
                    </div>
                    <a href="#" className="jobsListItem__info">
                        <h2 className="jobsListItem__name">{name}</h2>
                        <h3 className="jobsListItem__title">{title}</h3>
                        <div className="jobsListItem__address">{address}</div>
                        <div className="jobsListItem__place"><FaMapMarkerAlt/> Vienna, Austria</div>
                    </a>
                </div>
                <div className="jobsListItem__block">
                    <div className="jobsListItem__rating">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <div className="jobsListItem__data">
                        <button className="jobsListItem__data-favorite"><FaRegBookmark/></button>
                        <div className="jobsListItem__data-posted">Posted 2 days ago</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobsListItem;