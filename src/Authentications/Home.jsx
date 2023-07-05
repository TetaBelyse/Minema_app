// import gif from "./../assets/gif.gif"
// import logo from "./../assets/logo.png"
import logoo from "./../assets/logoo.png"


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
              <li><a href="/" className="text-white hover:text-gray-200">Home</a></li>
              <li><a href="/about" className="text-white hover:text-gray-200">About</a></li>
              <li><a href="/services" className="text-white hover:text-gray-200">Services</a></li>
              <li><a href="/signin" className="bg-white rounded-full p-2 px-8 font-bold text-xs text-slate-700 cursor-pointer tracking-tight hover:tracking-wide">SignIn</a></li>
          
            </ul>
          </div>
        </div>
      </nav>

      <section className="flex-1 flex items-center justify-center bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-sky-500 to-sky-500">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Disaster Awareness</h1>
          <p className="text-gray-700 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at leo ac tellus bibendum lacinia.
            Vestibulum id arcu ac ligula elementum interdum vel ac nunc. Mauris aliquet enim in neque auctor,
            ac ullamcorper ex consequat. Curabitur et semper turpis, sit amet sollicitudin massa. Quisque
            maximus metus a est consectetur consequat. Donec gravida, urna vel dapibus vulputate, lorem magna
            condimentum neque, sit amet varius est justo sit amet eros.
          </p>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-green-200 via-green-400 to-green-500 py-4">
        <div className="container mx-auto text-center">
          <p className="text-white">© 2023 ESRI Rwanda Ltd. All rights reserved.</p>
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
