import React from "react";
import Home from "./components/Home";
// import Trial from "./components/Trial";
const App = () => {
  return (
      
 <div>
  <div
        class="h-screen w-screen bg-indigo-400 overflow-hidden absolute flex items-center"
        z--1
      >
        <div class="w-screen h-64 absolute top-0 opacity-50 left-0 -my-40 -mx-64 bg-indigo-300 rounded-full"></div>
        <div class="w-64 h-64 -mx-32 bg-indigo-300 opacity-50 rounded-full"></div>
        <div class="w-64 h-64 ml-auto relative opacity-50 -mr-32 bg-indigo-300 rounded-full"></div>
        <div class="w-screen h-64 absolute opacity-50 bottom-0 right-0 -my-40 -mx-64 bg-indigo-300 rounded-full"></div>
      </div>
      <div class="fixed h-screen right-0 top-0 items-center flex">
        <div class="p-2 bg-white border-l-4 border-t-4 border-b-4 border-indigo-400 inline-flex items-center rounded-tl-lg shadow-2xl rounded-bl-lg z-10 flex-col">
          <button
            class="bg-gray-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none"
            theme-button="gray"
          ></button>
          <button
            class="bg-red-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none"
            theme-button="red"
          ></button>
          <button
            class="bg-orange-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none"
            theme-button="orange"
          ></button>
          <button
            class="bg-green-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none"
            theme-button="green"
          ></button>
          <button
            class="bg-teal-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none"
            theme-button="teal"
          ></button>
          <button
            class="bg-blue-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none"
            theme-button="blue"
          ></button>
          <button
            class="bg-indigo-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none"
            theme-button="indigo"
          ></button>
          <button
            class="bg-purple-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none"
            theme-button="purple"
          ></button>
          <button
            class="bg-pink-500 w-5 h-5 rounded-full outline-none focus:outline-none"
            theme-button="pink"
          ></button>
        </div>
      </div>
      <Home/>
      {/* <Trial/> */}
     
 
      </div>

  );
};

export default App;
