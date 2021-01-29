import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { logout } from "./Login/actions";
import { useAuthDispatch, useAuthState } from "./Login/useAuthContext";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const authDispatch = useAuthDispatch();
  const authState = useAuthState();

  const handleLogout = (e) => {
    logout(authDispatch);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">freeMarkable</Navbar.Brand>
      <Navbar.Toggle />
      {authState.user && (
        <>
          <Navbar.Collapse>
            <Nav>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/filelist">
                  FileList
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/filelistFunctional">
                  FileList Functional
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

          <Navbar>
            <Nav>
              <Nav.Item>
                <Button onClick={handleLogout}>Logout</Button>
              </Nav.Item>
            </Nav>
          </Navbar>
        </>
      )}
    </Navbar>
  );
};

export default NavigationBar;