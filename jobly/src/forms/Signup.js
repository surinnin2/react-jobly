import React, {useContext, useState} from "react"
import { useHistory } from "react-router-dom"
import { useFormik } from "formik"
import validateSignup from "./validate"
import Context from "../components/Context"

const Signup = () => {
    const {signup, currentUser} = useContext(Context)
    const history = useHistory()
    //formik form control
    const formik = useFormik({
        initialValues: {
            username: "", 
            password: "",
            firstName: "",
            lastName: "",
            email: ""
        },
        //validate.js checks username and password is not blank
        validateSignup,
        onSubmit: async values => {
            alert(JSON.stringify(values, null, 2))
            let res = await signup(values)

            if (res.success) {
                history.push("/companies")
            } else {
                console.log(res.errors)
                alert(res.errors)
            }
        }
    })

    //if already logged in, redirect to /companies
    if (currentUser) {
        history.push("/companies")
    }

    return (
        <div>
            <h1>
                Sign Up
            </h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                    {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                </div>
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
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )

}

export default Signup