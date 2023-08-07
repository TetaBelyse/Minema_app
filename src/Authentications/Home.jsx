// import gif from "./../assets/gif.gif"
// import logo from "./../assets/logo.png"
import logoo from "./../assets/logoo.png";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-gradient-to-r from-green-200 via-green-400 to-green-500 h-24 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <a href="/" className="">
                <img className="h-20 W-16 px-2" src={logoo} alt="logo" />
              </a>
            </div>
            <div>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="text-white hover:text-gray-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-white hover:text-gray-500">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/Message"
                    className="text-white hover:text-gray-500"
                  >
                    Warning Messages
                  </a>
                </li>
                <li>
                  <a
                    href="/signin"
                    className="bg-white rounded-full p-2 px-8 font-bold text-xs text-slate-700 cursor-pointer tracking-tight hover:tracking-wide"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <section className="flex-1 flex items-center justify-center bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-slate-300 to-slate-300">
            <div className="max-w-7xl">
              <div className="flex items-center justify-center">
              <h1 className="border-solid border-1 border-slate-900 bg-slate-700 text-3xl font-bold text-white text-center px-3  m-4">
                Disaster risk reduction and recovery
              </h1>
              </div>
              <div className=" h-96 w-full relative">
                <img
                  src="https://static.dw.com/image/65511709_1006.jpg"
                  className="w-full h-full object-cover absolute "
                />
              </div>
              <p className="text-gray-900 text-lg text-center m-4 p-6">
                Disasters can be caused by many different kinds of hazards and
                can have devastating impacts on people and communities. The
                frequency, complexity and severity of their impacts are likely
                to increase in the future due to factors such as climate change,
                landslides, windstorms, thunderstorm, hailstorms and rainstorms,
                But disasters can and should be prevented. We can prevent
                hazards from becoming disasters by helping communities to be
                prepared, reduce their risks, and become more resilient.
              </p>
            </div>
          </section>
          <section className="w-auto m-5 ">
            <div className="">
              <div className="flex items-center justify-center ">
              <h1 className=" border-solid border-1 border-slate-900 bg-slate-700 text-3xl font-bold text-white text-center px-3  m-4">
                Disasters in Rwanda
              </h1>
              </div>
              <div
                style={{ height: "85vh" }}
                className="col-span-1 overflow-scroll h-full"
              >
                <iframe
                  title="Dashboard"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  src={`https://esri-rw.maps.arcgis.com/apps/dashboards/11eafd200f994288934a523c41e4ceaa`}
                ></iframe>
              </div>
            </div>
          </section>
          <section className=" w-auto m-5 ">
            <div className="">
              <div className="flex items-center justify-center ">
              <h1 className=" border-solid border-1 border-slate-900 bg-slate-700 text-3xl font-bold text-white text-center px-3  m-4">
              Disaster Occurrence in Rwanda on Map
              </h1>
              </div>
              <div
                style={{ height: "85vh" }}
                className="col-span-1 overflow-scroll h-full"
              >
                <iframe
                  title="Dashboard"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  src={`https://esri-rw.maps.arcgis.com/apps/dashboards/786be13650154ef3a5ab7f47dc2bd783`}
                ></iframe>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gradient-to-r from-green-200 via-green-400 to-green-500 py-4">
          <div className="container mx-auto text-center">
            <p className="text-white">
              © 2023 ESRI Rwanda Ltd. All rights reserved.
            </p>
          </div>
        </footer>

        {/* <div className="fixed inset-0 z-0">
        <img
          src={gif}
          alt="Disaster GIF"
          className="bg-scroll w-full h-2/3"
        />
      </div> */}
      </div>
    </>
  );
};

export default Home;
