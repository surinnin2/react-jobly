import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
    <div>
        <h1>404: The Page You're Looking For Does Not Exist!</h1>
        <Link to="/">Home</Link>
    </div>
    )
}

export default NotFound