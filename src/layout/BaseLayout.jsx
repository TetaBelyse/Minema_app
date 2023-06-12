import { useLocation, useNavigate } from "react-router-dom"


const MenuItem = ({title, path}) => {
    const navidate = useNavigate()
    const location = useLocation()

    return (
        <div onClick={() => navidate(path)} className={`cursor-pointer hover:underline underline-offset-4 ${path == location.pathname ? 'underline' : ''}`}>{title}</div>
    )
}

const BaseLayout = ({ children }) => {

    const navidate = useNavigate()

    return (
        <div className="w-screen min-h-screen bg-cyan-700">
            <nav className="w-screen bg-cyan-700 sticky top-0 text-gray-200 flex justify-between items-center px-2 md:px-24 font-semibold text-sm py-2">
                <div onClick={() => navidate('/')} className="cursor-pointer">Logo</div>
                <div className="flex gap-6 items-center uppercase">
                    <MenuItem title={'home'} path={'/'} />
                    <MenuItem title={'page1'} path={'/page1'} />
                    <MenuItem title={'page2'} path={'/page2'} />
                    <MenuItem title={'page3'} path={'/page3'} />
                </div>
                <div className="bg-white rounded-full p-2 px-8 font-semibold text-sm text-gray-900 cursor-pointer">Login</div>
            </nav>
            <div className="w-full text-center">{children}</div>
        </div>
    )
}

export default BaseLayout