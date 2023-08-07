import { Route, Routes } from "react-router-dom";
import sidebarItems from "../utils/sidebarItems";
import SignIn from "../Authentications/SignIn";
import Home from "../Authentications/Home";
import About from "../Authentications/About";
import Message from "../Authentications/Message"

const AllRoutes = () => {
  return (
    <Routes>
      {sidebarItems.map((item) => (
        <Route key={item.id} path={item.path} element={item.element} />
      ))}
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Message" element={<Message />} />

    </Routes>
  );
};

export default AllRoutes;
