import React, { useEffect } from "react";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../store/useConversation.js";
import { useAuthContext } from "../../context/AuthContext.jsx";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && selectedConversation) {
        setSelectedConversation(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedConversation, setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center">
            <span className="label-text mr-2">To:</span>{" "}
            <span className="text-gray-900 font-semibold">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const {authUser}= useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄️</p>
        <p>Selelct a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center"></TiMessages>
      </div>
    </div>
  );
};

export default MessageContainer;

//CODE SNIPPET
// import React from "react";
// import Messages from "./Messages.jsx";
// import MessageInput from "./MessageInput.jsx";
// import { TiMessages } from "react-icons/ti";

// const MessageContainer = () => {
//   const noChatSelected = true;
//   return (
//     <div className="md:min-w-[450px] flex flex-col ">
//       {noChatSelected ? (
//         <NoChatSelected />
//       ) : (
//         <>
//           {/* Header */}
//           <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center">
//             <span className="label-text mr-2">To:</span>{" "}
//             <span className="text-gray-900 font-bold"> Hemant Kumar</span>
//           </div>

//           <Messages />
//           <MessageInput />
//         </>
//       )}
//     </div>
//   );
// };

// const NoChatSelected = () => {
//   return (
//     <div className="flex items-center justify-center w-full h-full">
//       <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
//         <p>Welcome 👋 Hemant Kumar ❄️</p>
//         <p>Selelct a chat to start messaging</p>
//         <TiMessages className="text-3xl md:text-6xl text-center"></TiMessages>
//       </div>
//     </div>
//   );
// };

// export default MessageContainer;
