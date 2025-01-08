import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignUp();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 min-h-screen mx-auto">
      <div className="h-full w-full p-6 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup<span className="text-sky-500"> Guftagu</span>
        </h1>
        <form
          className="mt-4 w-full max-w-md space-y-4 mx-auto p-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="input input-bordered flex items-center gap-2 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="#ffffff"
                className="h-5 w-5 opacity-70"
              >
                <path d="M15.992 2c3.396 0 6.998 2.86 6.998 4.995v4.997c0 1.924-0.8 5.604-2.945 7.293-0.547 0.43-0.831 1.115-0.749 1.807 0.082 0.692 0.518 1.291 1.151 1.582l8.703 4.127c0.068 0.031 0.834 0.16 0.834 1.23l0.001 1.952-27.984 0.002v-2.029c0-0.795 0.596-1.045 0.835-1.154l8.782-4.145c0.63-0.289 1.065-0.885 1.149-1.573s-0.193-1.37-0.733-1.803c-2.078-1.668-3.046-5.335-3.046-7.287v-4.997c0.001-2.089 3.638-4.995 7.004-4.995zM15.992-0c-4.416 0-9.004 3.686-9.004 6.996v4.997c0 2.184 0.997 6.601 3.793 8.847l-8.783 4.145s-1.998 0.89-1.998 1.999v3.001c0 1.105 0.895 1.999 1.998 1.999h27.986c1.105 0 1.999-0.895 1.999-1.999v-3.001c0-1.175-1.999-1.999-1.999-1.999l-8.703-4.127c2.77-2.18 3.708-6.464 3.708-8.865v-4.997c0-3.31-4.582-6.995-8.998-6.995v0z"></path>
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Full Name"
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
              />
            </label>
          </div>
          <div className="mt-4">
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
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
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
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
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
                placeholder="Confirm Password"
                className="grow"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </label>
          </div>

          <GenderCheckBox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />

          <div className="flex flex-col items-center">
            <button className="btn btn-md mt-4 h-12 w-full" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Signup"
              )}
            </button>
            <p className="text-sm mt-4">
              <span className="text-white">Have an account? </span>
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;

//STARTER CODE FOR USE
// import React from "react";
// import GenderCheckBox from "./GenderCheckBox";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 min-h-screen mx-auto">
//       <div className="h-full w-full p-6 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Signup<span className="text-sky-500"> Guftagu</span>
//         </h1>
//         <form className="mt-4 w-full max-w-md space-y-4 mx-auto p-4">
//           <div>
//             <label className="input input-bordered flex items-center gap-2 h-12">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 32 32"
//                 fill="#ffffff"
//                 className="h-5 w-5 opacity-70"
//               >
//                 <path d="M15.992 2c3.396 0 6.998 2.86 6.998 4.995v4.997c0 1.924-0.8 5.604-2.945 7.293-0.547 0.43-0.831 1.115-0.749 1.807 0.082 0.692 0.518 1.291 1.151 1.582l8.703 4.127c0.068 0.031 0.834 0.16 0.834 1.23l0.001 1.952-27.984 0.002v-2.029c0-0.795 0.596-1.045 0.835-1.154l8.782-4.145c0.63-0.289 1.065-0.885 1.149-1.573s-0.193-1.37-0.733-1.803c-2.078-1.668-3.046-5.335-3.046-7.287v-4.997c0.001-2.089 3.638-4.995 7.004-4.995zM15.992-0c-4.416 0-9.004 3.686-9.004 6.996v4.997c0 2.184 0.997 6.601 3.793 8.847l-8.783 4.145s-1.998 0.89-1.998 1.999v3.001c0 1.105 0.895 1.999 1.998 1.999h27.986c1.105 0 1.999-0.895 1.999-1.999v-3.001c0-1.175-1.999-1.999-1.999-1.999l-8.703-4.127c2.77-2.18 3.708-6.464 3.708-8.865v-4.997c0-3.31-4.582-6.995-8.998-6.995v0z"></path>
//               </svg>
//               <input type="text" className="grow" placeholder="Full Name" />
//             </label>
//           </div>
//           <div className="mt-4">
//             <label className="input input-bordered flex items-center gap-2 h-12">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 16 16"
//                 fill="currentColor"
//                 className="h-5 w-5 opacity-70"
//               >
//                 <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//               </svg>
//               <input type="text" className="grow" placeholder="Username" />
//             </label>
//           </div>
//           <div className="mt-4">
//             <label className="input input-bordered flex items-center gap-2 h-12">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 16 16"
//                 fill="currentColor"
//                 className="h-4 w-4 opacity-70"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="grow"
//               />
//             </label>
//           </div>
//           <div className="mt-4">
//             <label className="input input-bordered flex items-center gap-2 h-12">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 16 16"
//                 fill="currentColor"
//                 className="h-4 w-4 opacity-70"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 className="grow"
//               />
//             </label>
//           </div>

//           <GenderCheckBox/>

//           <div className="flex flex-col items-center">
//             <button className="btn btn-md mt-6 h-12 w-full">
//               Signup
//             </button>
//             <p className="text-sm mt-4">
//               <span className="text-white">Have an account? </span>
//               <a href="#" className="text-blue-500 hover:underline">
//                 Login
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default SignUp;
