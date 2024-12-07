import React from 'react';

const Login = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-slate-800 flex items-center justify-center">
      <div className="md:h-[60%] md:w-[25%] w-[90%] h-[50%] bg-slate-700 rounded-lg shadow-lg flex flex-col items-center">
        <div className="w-full h-[15%] bg-slate-600 rounded-t-lg flex justify-center items-center text-gray-100 text-md font-mono">
          LOGIN
        </div>
        <div className="w-[90%] flex flex-col md:gap-6 gap-10 mt-8">
          <input
            className="w-full bg-slate-600 text-gray-300 placeholder-gray-500 outline-none px-4 py-2 rounded-md focus:ring-2 focus:ring-slate-500 text-md font-mono"
            placeholder="Username"
          />
          <input
            type="password"
            className="w-full bg-slate-600 text-gray-300 placeholder-gray-500 outline-none px-4 py-2 rounded-md focus:ring-2 focus:ring-slate-500 text-md font-mono"
            placeholder="Password"
          />
          <button className="w-full bg-slate-500 text-gray-100 text-md font-mono py-2 rounded-md hover:bg-slate-600 transition-colors">
            Login
          </button>
        </div>
        <div className="w-[100%] flex items-center justify-center text-sm font-mono text-gray-100 md:mt-5 mt-8">Create Account? chick here</div>
      </div>
    </div>
  );
};

export default Login;
