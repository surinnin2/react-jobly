import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import JoblyApi from "../../api"
import JobList from "../job/JobList"
import JobListTemplate from "../job/JobListTemplate"

const CompanyDetail = () => {
    //handle used for company endpoint /companies/handle
    const [company, setCompany] = useState(null)
    const { handle } = useParams()

    
    //get company obj from api on first render and everytime handle is changed
    useEffect(() => {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle))
        }

        getCompany()
    }, [handle])

    if (!company) {
        return <h4>LOADING...</h4>
    }

    return (
        <div>
            <h1>
                Details
            </h1>
            <h4>
                {company.name}
            </h4>
            <p>
                {company.description}
            </p>
            <JobListTemplate jobs={company.jobs}/>
        </div>
    )
}

export default CompanyDetail