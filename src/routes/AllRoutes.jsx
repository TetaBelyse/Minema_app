import { Route, Routes } from "react-router-dom";
import sidebarItems from "../utils/sidebarItems";
import SignIn from "../Authentications/SignIn";
import Home from "../Authentications/Home";

const AllRoutes = () => {
  return (
    <Routes>
      {sidebarItems.map((item) => (
        <Route key={item.id} path={item.path} element={item.element} />
      ))}
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
