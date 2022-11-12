import JobsListItem from "../JobsListItem/JobsListItem";
import "./JobsList.scss";

const JobsList = ({jobs}) => {
    return (
        <div className="jobsList">
            {jobs.length ? 
            jobs.map(job => (
                <JobsListItem
                    key={job.id}
                    job={job}/>
            )) :
            <h2 className="title jobslist__title">There is no jobs found</h2>}
        </div>
    )
}

export default JobsList;