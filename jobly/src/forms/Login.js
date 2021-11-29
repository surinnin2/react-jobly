import React, {useContext, useState} from "react"
import { useHistory } from "react-router-dom"
import { useFormik } from "formik"
import validateLogin from "./validate"
import Context from "../components/Context"

const Login = () => {
    const {login, currentUser} = useContext(Context)
    const history = useHistory()
    //formik form control
    const formik = useFormik({
        initialValues: {
            username: "", 
            password: ""
        },
        //validate.js checks username and password is not blank
        validateLogin,
        onSubmit: async values => {
            let res = await login(values)

            if (res.success) {
                console.log(res.success)
                history.push("/companies")
            } else {
                alert(res.err)
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
                Login
            </h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    name="username"
                    type="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default Login