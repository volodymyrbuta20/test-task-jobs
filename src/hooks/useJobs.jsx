import { useMemo } from "react";

export const useSortedJobs = (jobs, sort) => {
    const sortedJobs = useMemo(() => {
        if (sort) {
            return [...jobs].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return jobs;
    }, [sort, jobs])

    return sortedJobs
}

const useJobs = (job, sort, query) => {

    const sortedJobs = useSortedJobs(job, sort);

    const sortedAndSearchedJobs = useMemo(() => {
        return sortedJobs.filter(job => job.name.toLowerCase().includes(query))
    }, [query, sortedJobs])

    return sortedAndSearchedJobs
}

export default useJobs;