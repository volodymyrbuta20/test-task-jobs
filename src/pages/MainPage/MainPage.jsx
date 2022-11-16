import { useState, useEffect } from "react";
import JobService from "../../API/JobService";
import JobFilter from "../../components/JobFilter/JobFilter";
import JobsList from "../../components/JobsList/JobsList";
import useFetch from "../../hooks/useFetch";
import useJobs from "../../hooks/useJobs";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import MySpinner from "../../UI/MySpinner/MySpinner";

const MainPage = () => {

    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState({sort: "", query: ""});
    const sortedAndSearchedJobs = useJobs(jobs, filter.sort, filter.query);
    const [fetchJobs, isLoading, isError] = useFetch(async () => {
        const jobs = await JobService.getAllJobs()
        setJobs(jobs)
    })

    useEffect(() => {
        fetchJobs();
    }, [])

    const spinner = isLoading ? <MySpinner/> : <JobsList jobs={sortedAndSearchedJobs}/>

    return (
        <>
            <JobFilter filter={filter} setFilter={setFilter}/>
            {isError ? <ErrorMessage/> : spinner}
        </>
    )
}

export default MainPage;