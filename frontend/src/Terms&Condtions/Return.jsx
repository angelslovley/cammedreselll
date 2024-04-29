import React from "react";
import { Link } from "react-router-dom";
import "./Return.css"
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/tc.jpg";
const ReturnPolicyPage = () => {
  return (
    <div className="container__0">
      <MetaData title="Return Policy" />
      <div className="image-container">
        <img
          src={TermsImage}
          alt="Background"
        />
        <h1 className="policy-text">RETURN POLICY</h1>
      </div>
      <div className="content-container">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
       
      </div>
    </div>
  );
};

export default ReturnPolicyPage;
