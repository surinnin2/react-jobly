import React, {useState, useEffect} from "react"
import JoblyApi from "../../api"
import SearchBar from "../SearchBar"
import JobListTemplate from "./JobListTemplate"

// list of jobs
const JobList = () => {
    const [jobs, setJobs] = useState([])

    // gets company list on first render
    useEffect(() => {
        getJobsList()
    }, [])

    // update company list function
    async function getJobsList(title) {
        let jobs = await JoblyApi.getJobs(title)
        setJobs(jobs)
    }

    if (!jobs) return <h4>LOADING...</h4>

    return (
        <div>
            <h1>
                Jobs
            </h1>
            <SearchBar submit={getJobsList} />
            {(jobs.length > 0) ? (
                <JobListTemplate jobs={jobs} />
            ) : (<h4>No such job found</h4>)}
        </div>
    )
}

export default JobList