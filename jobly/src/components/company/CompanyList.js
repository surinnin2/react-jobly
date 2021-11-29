import React, {useState, useEffect} from "react"
import SearchBar from "../SearchBar"
import CompanyCard from "./CompanyCard"
import JoblyApi from "../../api"


// list of companies
const CompanyList = () => {
    const [companies, setCompanies] = useState([])

    // gets company list on first render
    useEffect(() => {
        getCompaniesList()
    }, [])

    // update company list function
    async function getCompaniesList(name) {
        let companies = await JoblyApi.getAllCompanies(name)
        setCompanies(companies)
    }

    return (
        <div>
            <h1>
                Companies
            </h1>
            <SearchBar submit={getCompaniesList} />
            {(companies.length > 0) ? (
                <div>
                    {companies.map(comp => (
                        <CompanyCard key={comp.handle}
                                     handle={comp.handle}
                                     name={comp.name}
                                     description={comp.description}
                                     logoUrl={comp.logoUrl}
                        />
                    ))}
                </div>
            ) : (<h4>No such company found</h4>)}
        </div>
    )
}

export default CompanyList