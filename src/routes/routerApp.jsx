import App from '../App'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Deshboard from '../pages/Dashboard'

let routerApp = [
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/deshboard",
        element: <Deshboard/>,
    },
]

export default routerApp