import { useContext } from "react"
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min"
import Context from "./Context"


const PrivateRoute = ({children, ...rest}) => {
    const { currentUser } = useContext(Context)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                currentUser ? (
                    children
                ) : (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: location }
                      }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute