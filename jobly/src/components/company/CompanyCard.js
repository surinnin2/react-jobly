import React from "react"
import { Link } from "react-router-dom"

const CompanyCard = ({name, description, logoUrl, handle}) => {
    return (
        <Link className="CompanyCard card" to={`/companies/${handle}`}>
            <div className="card-body">
              <h4 className="card-title">
                {name}
              </h4>
              <p>{description}</p>
              {logoUrl ? <img src={logoUrl} alt={name} className="float-right ml-5"/> : null}
            </div>
        </Link>
    )
}

export default CompanyCard