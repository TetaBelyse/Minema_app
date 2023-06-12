import { Route, Routes } from "react-router-dom"
import Page1 from "../pages/Page1"
import Page2 from "../pages/Page2.jsx"
import Page3 from "../pages/Page3.jsx"
import Home from "../pages/Home.jsx"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
        </Routes>
    )
}

export default AllRoutes