
import { useState, useEffect } from "react";
import JobService from "./API/JobService";
import JobFilter from "./components/JobFilter/JobFilter";
import JobsList from "./components/JobsList/JobsList";
import SingleJobPage from "./pages/SingleJobPage/SingleJobPage";

import MySpinner from "./UI/MySpinner/MySpinner";

function App() {

    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchJobs();
    }, [])

    const fetchJobs = async () => {
        setIsLoading(true)
        const jobs = await JobService.getAllJobs()
        setJobs(jobs)
        setIsLoading(false)
    }

    return (
        <div className="App">
            <JobFilter/>
            {isLoading ? <MySpinner/> : <JobsList jobs={jobs}/>}
            {/* <SingleJobPage/> */}
        </div>
    );
}

export default App;
