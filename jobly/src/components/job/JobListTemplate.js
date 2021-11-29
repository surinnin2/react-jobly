import React, {useState, useEffect} from "react"
import JobCard from "./JobCard"

// list of jobs
const JobListTemplate = ({jobs}) => {
    console.debug("JobCardList", "jobs=", jobs)

    return (
        <div>
            {jobs.map(job => (
                <JobCard key={job.id}
                         title={job.title}
                         salary={job.salary}
                         equity={job.equity}
                         companyName={job.companyName}
                         id={job.id}
                />
            ))}
        </div>
    )
}

export default JobListTemplate