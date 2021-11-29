import React, { useState } from "react"
import { Button } from "reactstrap"

const SearchBar = ({submit}) => {
    const [search, setSearch] = useState({searchQuery: ""})

    const handleChange = evt => {
        const { name, value } = evt.target
        setSearch(fData => ({
            ...fData,
            [name]: value
        }))
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        submit(search.searchQuery || undefined)
        setSearch(search)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="searchQuery" placeholder="Enter Company Name" value={search.searchQuery} onChange={handleChange}/>
                <Button type="submit">Search</Button>
            </form>
        </div>
    )


}

export default SearchBar