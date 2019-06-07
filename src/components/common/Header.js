import React from "react";
import { NavLink } from "react-router-dom";

const HeaderPage = () => {
  const activeStyle = { color: "Orange" };
  return (
    <nav> 
      <NavLink to="/" activeStyle={activeStyle} exact><b>Home</b></NavLink>{" | "}
      <NavLink to="/courses" activeStyle={activeStyle}><b>EMP Details </b></NavLink>{ " | "}
      <NavLink to="/about" activeStyle={activeStyle}><b>About</b></NavLink>{ " | "}
      <NavLink to="/ContactUs" activeStyle={activeStyle}><b>ContactUs</b></NavLink>
      <marquee behavior="scroll" direction="left">Please check your mail and verify PF account details..!</marquee>
    </nav>
  );
};
export default HeaderPage;
