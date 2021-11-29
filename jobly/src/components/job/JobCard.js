import React, { useContext, useEffect, useState } from "react"
import Context from "../Context"

const JobCard = ({id, title, salary, equity, companyName}) => {
    const { appliedToJob, applyToJob } = useContext(Context)
    const [ applied, setApplied ] = useState()

    useEffect(() => {
        setApplied(appliedToJob(id))
    }, [id, appliedToJob])

    async function handleApply(evt) {
        if (appliedToJob(id)) return;
        applyToJob(id)
        setApplied(true)
    }

    return (
        <div>
            <h4>{title}</h4>
            <p>
                {companyName}
            </p>
                {salary ? <div><small>Salary: {salary}</small></div> : <div><small>"No Salary Listed"</small></div>}
                {equity ? <div><small>Equity: {equity}</small></div> : <div><small>"No Equity Listed"</small></div>}
            <button
                className="btn btn-danger font-weight-bold text-uppercase float-right"
                onClick={handleApply}
                disabled={applied}
            >
                {applied ? "Applied" : "Apply"}
            </button>
        </div>
    )
}

export default JobCard