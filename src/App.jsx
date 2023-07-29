import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AppRoutes from "./routes/routes";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
