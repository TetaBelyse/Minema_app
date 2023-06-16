import { useLocation, useNavigate } from "react-router-dom"
import logo from "./../assets/logo.png"


const MenuItem = ({ title, path }) => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div onClick={() => navigate(path)} className={`cursor-pointer hover:underline underline-offset-4 ${path == location.pathname ? 'underline' : ''}`}>{title}</div>
    )
}

const BaseLayout = ({ children }) => {

    const navigate = useNavigate()

    return (
        <div className="w-screen min-h-screen bg-green-500">
            <nav className="w-screen bg-green-600 sticky top-0 text-gray-200 flex justify-between items-center px-2 md:px-24 font-semibold text-sm py-2">
                <div onClick={() => navigate('/')} className="cursor-pointer">
                <img className="h-12 W-8" src={logo} alt="logo" />
                </div>
                <div className="flex gap-10">
                    <div className="flex gap-6 items-center uppercase">
                   
                        <MenuItem title={'desinventor'} path={'/desinventor'} />
                        <MenuItem title={'landslides'} path={'/landslides'} />
                        <MenuItem title={'rainstorms'} path={'/rainstorms'} />
                        <MenuItem title={'windstorms'} path={'/windstorms'} />
                        <MenuItem title={'hailstorms'} path={'/hailstorms'} />
                        <MenuItem title={'thunderstorms'} path={'/thunderstorms'} />



                    </div>
                    <div className="bg-white rounded-full p-2 px-8 font-bold text-xs text-slate-700 cursor-pointer">Logout</div>
                </div>
            </nav>
            <div className="w-full text-center text-white">{children}</div>
        </div>
    )
}

export default BaseLayout