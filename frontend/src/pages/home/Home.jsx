import React from "react";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/message/MessageContainer.jsx";

const Home = () => {
  return (
    <>
      <div className="flex sm:h-[450px] md:h-[550px] bg-gray-900 rounded-md overflow-hidden text-sky-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
        <Sidebar />
        <MessageContainer />
      </div>
    </>
  );
};

export default Home;



//CODE SNIPPET
// const Home = () => {
//   return (
//     <>
//       <div className="flex sm:h-[450px] md:h-[550px] bg-gray-900 rounded-md overflow-hidden text-sky-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
//         <Sidebar />
//         <MessageContainer />
//       </div>
//     </>
//   );
// };

// export default Home;
