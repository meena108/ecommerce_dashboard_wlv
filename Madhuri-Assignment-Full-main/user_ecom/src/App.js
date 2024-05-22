import React, { Fragment } from "react";
import "./input.css";
import { BrowserRouter } from "react-router-dom"; // Correct import statement
// import "./styles/tailwind.css"; // Import Tailwind CSS here
// import AppRoute from "./route/AppRoute";
// import HomeTop from "./components/home/HomeTop";
// import FooterDesktop from "./components/common/FooterDesktop";
// import HomeSlider from "./components/home/HomeSlider";
// import UserLoginPage from "./pages/UserLoginPage";
// import UserLogin from "./components/common/UserLogin";
// import HomeTop from "./components/home/HomeTop";

import AppRoute from "./route/AppRoute";
import { ToastContainer } from "react-toastify";
// import UserLoginPage from "./components/common/UserLoginPage";

class App extends React.Component {
  // Ensure you're extending React.Component instead of Component
  render() {
    return (
      <Fragment>
        <BrowserRouter>
        {/* Toast is Added globally to show on success and falure casess */}
        <ToastContainer /> 
          <AppRoute />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
