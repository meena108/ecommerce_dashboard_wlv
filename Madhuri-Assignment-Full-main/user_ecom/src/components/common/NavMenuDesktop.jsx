import React, { useState } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const NavMenuDesktop = () => {
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
    if (sideNavState === "sideNavOpen") {
      setSideNavState("sideNavClose");
      setContentOverState("ContentOverlayClose");
    } else {
      setSideNavState("sideNavOpen");
      setContentOverState("ContentOverlayOpen");
    }
  };

  return (
    <>
      <div className="TopSectionDown">
        <Navbar fixed={"top"} className="bg-blue">
        <ToastContainer />
          <Container
            fluid={true}
            className="fixed-top d-flex justify-content-center  shadow-sm p-2 mb-0 bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Link to="/">
                  <img className="nav-logo mt-3" src={Logo} alt="Logo" />
                 
                </Link>
                <h4 className="ml-5 mt-2"><strong>E-Com Dashboard</strong></h4>
              </Col>

              <Col
                className="p-1 mt-1 diplay- align-items-center gap-8"
                style={{ display: "flex", alignItems: "center" }}
                lg={4}
                md={4}
                sm={12}
                xs={12}
              >
                <Link
                  to="/addproduct"
                  className="btn mt-1"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <i className="fa h4 fa-shopping-cart"></i>
                  <h5>Add </h5>
                </Link>

                <Link
                  to="/updatedeleteproduct/id"
                  className="btn"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <i className="fa h4 fa-edit "></i>
                  <h5 style={{ margin: 0, marginRight: "0.5rem" }}>Update</h5>
                </Link>

                <Link
                  to="/viewproduct"
                  className="btn mt-2"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <i className="fa h4 fa-eye"></i>
                  <h5>View</h5>
                </Link>
                <Link
                  to="/reports"
                  className="btn mt-2"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <i className="fa h4 fa-file"></i>
                  <h5 className="m-2">Reports</h5>
                </Link>
                <Link to="/" className="h4 btn mt-2">
                  Logout
                </Link>
              </Col>
            </Row>
            {searchRedirect()}
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

export default NavMenuDesktop;
