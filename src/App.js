import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import { Toaster } from "./components/ui/toaster";
import Navbar from "./components/custom/Navbar";
import Dashboard from "./components/custom/Dashboard";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="flex flex-col">
          <Navbar />
          <div className="flex w-full py-10 sm:px-5 px-4">
          <Dashboard />
          </div>
        </div>
      </Provider>
      <Toaster  />
    </>
  );
}

export default App;
