import React from "react"

const validateLogin = values => {
    const errors = {}
    if (!values.username) {
        errors.username = "Required"
    }
    if (!values.password) {
        errors.password = "Required"
    }

    return errors
}

const validateSignup = values => {
    const errors = {}
    if (!values.username) {
        errors.username = "Required"
    }
    if (!values.password) {
        errors.password = "Required"
    }
    if (!values.firstName) {
        errors.firstname = "Required"
    }
    if (!values.lastName) {
        errors.lastName = "Required"
    } 
    if (!values.email) {
        errors.email = "Required"
    }

    return errors
}

const validateProfile = values => {
    const errors = {}
    if (!values.password) {
        errors.password = "Required"
    }
    if (!values.firstName) {
        errors.firstname = "Required"
    }
    if (!values.lastName) {
        errors.lastName = "Required"
    } 
    if (!values.email) {
        errors.email = "Required"
    }

    return errors
}

export default {validateLogin, validateSignup, validateProfile}