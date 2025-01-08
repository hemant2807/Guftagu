import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justfy-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-sky-500"> Guftagu</span>
        </h1>

        <form
          className="mt-4 w-full max-w-md mx-auto p-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="input input-bordered flex items-center gap-2 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-4">
            <label className="input input-bordered flex items-center gap-2 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                placeholder="Password"
                className="grow"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col items-center">
            <button className="btn btn-md mt-6 h-12 w-full" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
            <p className="text-sm mt-4">
              <span className="text-white">{"Don't"} have an account? </span>
              <Link to="/signup" className="text-blue-500 hover:underline">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//STARTER CODE FOR THE PAGE
{
  /* <div className="flex flex-col items-center justfy-center min-w-96 mx-auto">
  <div className="w-full p-6 bg-red-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
    <h1 className="text-3xl font-semibold text-center text-gray-300">
      Login
      <span className="text-red-600"> Guftagu</span>
    </h1>
    <form className="mt-4 w-full max-w-md mx-auto p-4">
      <div>
        <label className="input input-bordered flex items-center gap-2 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" placeholder="Username" />
        </label>
      </div>
      <div className="mt-4">
        <label className="input input-bordered flex items-center gap-2 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            placeholder="Password"
            className="grow"
          />
        </label>
      </div>
      <div className="flex flex-col items-center">
        <button className="btn btn-md mt-6 h-12 w-full">Login</button>
        <p className="text-sm mt-4">
          <span className="text-white">{"Don't"} have an account? </span>
          <a href="#" className="text-blue-500 hover:underline">
            Signup
          </a>
        /p>
      </div>
    </form>
  </div>
</div>; */
}
