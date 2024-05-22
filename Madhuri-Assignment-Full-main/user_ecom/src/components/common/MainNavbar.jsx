import React, { useState } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import { Link, Redirect } from "react-router-dom";
import FooterDesktop from "./FooterDesktop";


const MainNavbar = () => {
  const [sideNavState, setSideNavState] = useState("sideNavClose");
  const [contentOverState, setContentOverState] = useState(
    "ContentOverlayClose"
  );
  const [searchKey, setSearchKey] = useState("");
  const [searchRedirectStatus, setSearchRedirectStatus] = useState(false);


  const searchOnChange = (event) => {
    let searchKey = event.target.value;
    setSearchKey(searchKey);
  };


  const searchOnClick = () => {
    if (searchKey.length >= 2) {
      setSearchRedirectStatus(true);
    }
  };


  const searchRedirect = () => {
    if (searchRedirectStatus) {
      return <Redirect to={"/search/" + searchKey} />;
    }
  };


  const menuBarClickHandler = () => {
    sideNavOpenClose();
  };


  const contentOverlayClickHandler = () => {
    sideNavOpenClose();
  };


  const sideNavOpenClose = () => {
    let newSideNavState =
      sideNavState === "sideNavOpen" ? "sideNavClose" : "sideNavOpen";
    setSideNavState(newSideNavState);
    setContentOverState(
      newSideNavState === "sideNavOpen"
        ? "ContentOverlayOpen"
        : "ContentOverlayClose"
    );
  };


  return (
    <>
    {/* styling changes */}
      <div className="TopSectionDown">
      <Navbar fixed="top" className="custom-navbar">
      <Container fluid className="custom-navbar-container">
        <Row className="w-100 align-items-center">
          <Col lg={4} md={4} sm={12} xs={12} className="text-center text-lg-left">
            <Link to="/">
              <img className="nav-logo" src={Logo} alt="Logo" />
            </Link>
          </Col>
          <Col lg={8} md={8} sm={12} xs={12} className="text-center">
            <div className="d-flex justify-content-center align-items-center">
              <Link to="/home" className="nav-link mx-2">
                <h5 className="mb-0">Home</h5>
              </Link>
              <Link to="/about" className="nav-link mx-2">
                <h5 className="mb-0">About</h5>
              </Link>
              <Link to="/contact" className="nav-link mx-2">
                <h5 className="mb-0">Contact</h5>
              </Link>
              <Link to="/login" className="btn btn-primary btn-md mx-2">
                Login
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
      </div>


      <div className={sideNavState}></div>


      <div
        onClick={contentOverlayClickHandler}
        className={contentOverState}
      ></div>
    </>
  );
};


export default MainNavbar;
