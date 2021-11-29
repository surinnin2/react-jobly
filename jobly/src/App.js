import React, { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom";
import './styles/App.css';
import NavBar from "./components/NavBar"
import Routes from "./components/Routes"
import JoblyApi from "./api";
import useLocalStorage from "use-local-storage"
import jwt from "jsonwebtoken"
import Context from "./components/Context";

export const tokenID = "joblyToken"

function App() {
  const [token, setToken] = useLocalStorage(tokenID)
  const [currentUser, setCurrentUser] = useState(null)
  const [applicationIds, setApplicationIds] = useState(new Set([]))
  
  useEffect(() => {
    
    async function getCurrentUser() {
      if(token) {
        try {
          let { username } = jwt.decode(token)
          JoblyApi.token = token
          let currUser = await JoblyApi.getCurrentUser(username)
          setCurrentUser(currUser)
        } catch (err) {
          console.log(err)
          setCurrentUser(null)
        }
      }
    }

    getCurrentUser()
  }, [token])

  //signup function
  async function signup(creds) {
    try {
      let token = await JoblyApi.signup(creds)
      setToken(token)
      return {success: true}
    } catch (err) {
      console.log(err)
      return {success:false, err}
    }

  }

  //login function
  async function login(creds) {
    try {
      let token = await JoblyApi.login(creds)
      setToken(token)
      return {success:true}
    } catch (err) {
      console.log(err)
      return {success:false, err}
    }
  }

  //logout function
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  //update profile function
  async function updateProfile(username, creds) {
    try {
      let usr = await JoblyApi.updateProfile(username, creds)
      setCurrentUser(usr)
      return {success:true}
    } catch (err) {
      console.log(err)
      return {success:false, err}
    }
  }

  /** Checks if a job has been applied for. */
  function appliedToJob(id) {
    return applicationIds.has(id);
  }

  //Apply to Job
  function applyToJob(id) {
    if (appliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id)
    setApplicationIds(new Set([...applicationIds, id]))
  }

  return (
    <Context.Provider value={{currentUser, setCurrentUser, login, signup, logout, updateProfile, appliedToJob, applyToJob}}>
      <div className="App">
        <NavBar />
        <main>
          <Routes />
        </main>
      </div>
    </Context.Provider>
  );
}


export default App;
