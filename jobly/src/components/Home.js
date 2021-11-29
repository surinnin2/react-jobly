import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle} from "reactstrap"
import Context from "./Context"

const Home = () => {
    const { currentUser } = useContext(Context)

    if (!currentUser) {
      return (
          <section className="col-md-8">
              <Card>
                <CardBody className="text-center">
                  <CardTitle>
                    <h3 className="font-weight-bold">
                      Jobly
                    </h3>
                  </CardTitle>
                  <p>All the jobs in one, convenient place.</p>
                  <Link to="/login">Log in</Link>
                  <Link to="/signup">Sign up</Link>
                </CardBody>
              </Card>
          </section>
      )
    } else {
      return (
        <div>
          <h4>
            Welcome {currentUser.firstName}
          </h4>
        </div>
      )
    }
  
}

export default Home