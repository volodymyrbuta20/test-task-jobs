import JobsListItem from "../JobsListItem/JobsListItem";
import "./JobsList.scss";

const JobsList = ({jobs}) => {
    return (
        <div className="jobsList">
            {jobs.map(job => (
                <JobsListItem
                    key={job.id}
                    job={job}/>
            ))}
        </div>
    )
}

export default JobsList;