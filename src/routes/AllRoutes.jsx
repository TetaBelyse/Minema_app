import { Route, Routes } from "react-router-dom";
import sidebarItems from "../utils/sidebarItems";
import SignIn from "../Authentications/SignIn"


const AllRoutes = () => {
  return (
    <Routes>
      {sidebarItems.map((item) => (
        <Route key={item.id} path={item.path} element={item.element} />
      ))}
      <Route
        path='/signIn'
        element={< SignIn />} />
    </Routes>
  );
};

export default AllRoutes;
