import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar, FaRegBookmark } from "react-icons/fa";
import "./JobsListItem.scss";
import PostedDate from "../../utils/PostedDate";

const JobsListItem = (props) => {

    const {id, name, title, address, pictures, createdAt} = props.job

    const [years, month, days] = PostedDate(createdAt)

    const yy = years ? `${years} years` : "";
    const mm = month ? `${month} months` : "";
    const dd = days ? `${days} days` : "";

    return (
        <div className="jobsListItem">
            <div className="jobsListItem__wrapper">
                <div className="jobsListItem__block">
                    <div className="jobsListItem__image">
                        <img src={pictures[0]} alt="icon" className="jobsListItem__icon"/>
                    </div>
                    <Link to={`/jobs/${id}`} className="jobsListItem__info">
                        <h2 className="jobsListItem__name">{name}</h2>
                        <h3 className="jobsListItem__title">{title}</h3>
                        <div className="jobsListItem__address">{address}</div>
                        <div className="jobsListItem__place"><FaMapMarkerAlt/> Vienna, Austria</div>
                    </Link>
                </div>
                <div className="jobsListItem__block jobsListItem__block-rate">
                    <div className="jobsListItem__rating">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <div className="jobsListItem__data">
                        <button className="jobsListItem__data-favorite"><FaRegBookmark/></button>
                        <div className="jobsListItem__data-posted">Posted {`${yy} ${mm} ${dd}`} ago</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobsListItem;