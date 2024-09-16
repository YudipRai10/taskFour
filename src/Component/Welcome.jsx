import React from "react";

function Welcome({ logoutInWelcome, username }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Welcome {username}</h1>
      <button
        className="mt-5 px-5 rounded-[20px] text-white bg-red-500"
        onClick={() => {
          logoutInWelcome();
        }}
      >
        Log-out
      </button>
    </div>
  );
}

export default Welcome;
