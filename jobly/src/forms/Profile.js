import React, {useContext, useState} from "react"
import { useHistory } from "react-router-dom"
import { useFormik } from "formik"
import Context from "../components/Context"
import validateProfile from "./validate"

const Profile = () => {
    const history = useHistory()
    const {updateProfile, currentUser, setCurrentUser} = useContext(Context)
    const formik = useFormik({
        initialValues: {
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            email: currentUser.email,
            password: ""
        },
        validateProfile,
        onSubmit: async values => {
            console.log(currentUser)
            let res = await updateProfile(currentUser.username, values)

            if (res.success) {
                console.log(res.success)
                history.push("/companies")
            } else {
                alert(res.err)
            }
        } 
    })

    return (
        <div>
            <h1>
                {currentUser.username}'s Profile
            </h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        id="lastName"
                        name="lastName"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
                <div>
                    <label htmlFor="password">Enter Password to Update:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default Profile