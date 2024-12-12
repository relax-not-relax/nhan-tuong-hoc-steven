import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

PrivateRootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function PrivateRootLayout({ children }) {
  const accessToken = sessionStorage.getItem("accessTokenNths");

  if (accessToken) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PrivateRootLayout;
