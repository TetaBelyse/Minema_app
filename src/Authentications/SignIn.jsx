import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logoo from "../assets/logoo.png";

const SignIn = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      toast.warn("Username and password should not be empty");
      return;
    }

    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);
    params.append("referer", "https://www.arcgis.com");
    params.append("client", "https://www.arcgis.com");
    params.append("expiration", "3600");

    const URL = "https://www.arcgis.com/sharing/generateToken?f=json";

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(URL, params, config)
      .then((response) => {
        if (response.data.error) {
          toast.error(response.data.error.message);
        } else {
          localStorage.setItem("token", response.data.token);
          toast.success("You have successfully login");
          navigate("/Desinventor", { replace: true });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-green-200 via-green-400 to-green-500 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className=" flex flex-row h-32 W-16 px-2"
              src={logoo}
              alt="logo"
            />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>
              <form onSubmit={submit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your username
                  </label>
                  <input
                    ref={usernameRef}
                    type="text"
                    id="FormControlInput1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your username"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    ref={passwordRef}
                    type={show ? "text" : "password"}
                    autoComplete="current-password"
                    id="FormControlInput2"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <label onClick={handleShow} className="flex p-2">
                    <input type="checkbox" />
                    Show Password
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
                <span className="flex items-center justify-center ">
                  <a className="underline decoration-solid" href="/">
                    {" "}
                    Go Back Home
                  </a>
                </span>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
