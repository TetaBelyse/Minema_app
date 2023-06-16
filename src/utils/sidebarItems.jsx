import Desinventor from "../pages/Desinventor";
import Landslides from "../pages/Landslides";
import Rainstorms from "../pages/Rainstorms";
import Windstorms from "../pages/Windstorms";
import Hailstorms from "../pages/Hailstorms";
import Thunderstorms from "../pages/Thunderstorms";


const sidebarItems = [

  {
    id: "desinventor",
    name: "desinventor",
    path: "/desinventor",
    element: <Desinventor />,
  },
  {
    id: "landslides",
    name: "landslides",
    path: "/landslides",
    element: <Landslides />,
  },
  {
    id: "rainstorms",
    name: "rainstorms",
    path: "/rainstorms",
    element: <Rainstorms />,
  },
  {
    id: "windstorms",
    name: "windstorms",
    path: "/windstorms",
    element: <Windstorms />,
  },
  {
    id: "hailstorms",
    name: "hailstorms",
    path: "/hailstorms",
    element: <Hailstorms />,
  },
  {
    id: "thunderstorms",
    name: "thunderstorms",
    path: "/thunderstorms",
    element: <Thunderstorms />,
  },
];

export default sidebarItems;
