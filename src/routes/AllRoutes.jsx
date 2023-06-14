import { Route, Routes } from "react-router-dom"
import Page1 from "../pages/Page1"
import Page2 from "../pages/Page2"
import Page3 from "../pages/Page3"
import Home from "../pages/Home"
import navItems from "../utils/navItems"

const AllRoutes = () => {
    return (
        <Routes>

            {
                navItems.map( item => (<Route key={item.id} path={item.path} element={item.element} />))
            }
        </Routes>
    )
}

export default AllRoutes