import React, { useState } from "react";

function Login({ childToParentFunction }) {
  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
    remember_me: false,
  });

  const onClickHandler = () => {
    childToParentFunction(formDetails);
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("working");
          onClickHandler();
        }}
      >
        <div className="flex flex-col justify-center items-center gap-5 p-8 bg-slate-400 rounded-[10px]">
          <div className="flex gap-5">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={formDetails.username}
              onChange={(event) => {
                const userNameValue = event.target.value;
                setFormDetails((previousData) => {
                  return { ...previousData, username: userNameValue };
                });
              }}
            />
          </div>
          <div className="flex gap-6">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={formDetails.password}
              onChange={(event) => {
                const userPassword = event.target.value;
                setFormDetails((previousData) => {
                  return { ...previousData, password: userPassword };
                });
              }}
            />
          </div>
          <div className="flex justify-center items-center gap-1">
            <label htmlFor="remember">Remember Me</label>
            <input
              type="checkbox"
              checked={formDetails.remember_me}
              onChange={(event) => {
                const checked = event.target.checked;
                setFormDetails((previousData) => {
                  return { ...previousData, remember_me: checked };
                });
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-5 py-1 rounded-[20px] hover:bg-gray-900 "
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
