import Home from "../pages/Home";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";

const sidebarItems = [
    {
        id: 'home',
        name: 'home',
        path: '/',
        element: <Home/>
    },
    {
        id: 'page1',
        name: 'page1',
        path: '/page1',
        element: <Page1/>
    },
    {
        id: 'page2',
        name: 'page2',
        path: '/page2',
        element: <Page2/>
    },
    {
        id: 'page3',
        name: 'page3',
        path: '/page3',
        element: <Page3/>
    }
]

export default sidebarItems