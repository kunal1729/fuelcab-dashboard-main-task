import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Corrected LinkedIn icon import
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      {/* Section 1 */}
      <div style={section1Style}>
        <div style={logoContainerStyle}>
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_144,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648471968852-1f2b01.png"
            alt="Logo"
            style={logoStyle}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div style={section2Style}>
        {/* Subsection 1 */}
        <div style={subsectionStyle}>
          <div style={ssheadings}>
            <h3>Company</h3>
          </div>
          <div style={sspara}>
            <Link to="">About us </Link>
            <Link to="/fuelcab/Terms">Terms & conditions </Link>
            <Link to="/fuelcab/Privacy">Privacy policy </Link>
            <Link to="">Anti-discrimination policy </Link>
            <Link to="">UC impact </Link>
            <Link to="">Careers </Link>
          </div>
        </div>
        {/* Subsection 2 */}
        <div style={subsectionStyle}>
          <div style={ssheadings}>
            <h3>For customers</h3>
          </div>
          <div style={sspara}>
            <Link to="">UC reviews </Link>
            <Link to="">Categories for you </Link>
            <Link to="">Blog </Link>
            <Link to="">Contact us </Link>
          </div>
        </div>
        {/* Subsection 3 */}
        <div style={subsectionStyle}>
          <div style={ssheadings}>
            <h3>For partners</h3>
          </div>
          <div style={sspara}>
            <Link to="">Register as a professional </Link>
          </div>
        </div>
        {/* Subsection 4 */}
        <div style={subsectionStyle}>
          <div style={ssheadings}>
            <h3>Social links</h3>
          </div>
          <div style={iconsets}>
            {" "}
            <div style={socialIconsContainerStyle}>
              <div style={iconset}>
                <FaTwitter style={iconStyle} />
              </div>
              <div style={iconset}>
                <FaFacebook style={iconStyle} />
              </div>
              <div style={iconset}>
                <FaInstagram style={iconStyle} />
              </div>
              <div style={iconset}>
                <FaLinkedin style={iconStyle} />
              </div>
            </div>
            <div style={downloadLinksContainerStyle}>
              <a href="link-to-iphone-app-download" style={downloadLinkStyle}>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648463870745-38fece.png"
                  alt="Download for iPhone"
                  style={downloadIconStyle}
                />
              </a>
              <a href="link-to-android-app-download" style={downloadLinkStyle}>
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696419732772-28cd3d.jpeg"
                  alt="Download for Android"
                  style={downloadIconStyle}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <hr style={{ border: "0.5px solid rgba(227, 227, 227, 1.00)" }}></hr>
      <div style={section3Style}>
        <div style={copyrightContainerStyle}>
          <div style={copyrightStyle}>
            <Link to="">
              &copy; Copyright 2022 Urban Company. All rights reserved.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer styles
const footerStyle = {
  paddingLeft: "8rem",
  paddingRight: "8rem",
  backgroundColor: "#f4f4f4",
  marginTop: "96px",
};

// Section 1 styles
const section1Style = {
  height: "104px",
  paddingLeft: "10px",
  padding: "24px 24px 0",
};

// Logo container styles
const logoContainerStyle = {
  height: "80px",
  paddingLeft: "4px",
  display: "flex",
  alignItems: "center",
};

// Logo styles
const logoStyle = {
  width: "144px",
  height: "40px",
  paddingLeft: "5px",
};

// Section 2 styles
const section2Style = {
  paddingLeft: "8rem",
  paddingRight: "8rem",
  height: "290px",
  padding: "16px 24px 32px",
  display: "flex",
};

// Subsection styles
const subsectionStyle = {
  height: "240px",
  width: "25%",
  padding: "0 16px",
  paddingLeft: "10px",
};
const ssheadings = {
  height: "22px",
  fontSize: "20px",
  fontWeight: "600",
};
const sspara = {
  paddingTop: "14px",
  lineHeight: "28px",
  fontWeight: "400",
  color: "rgba(84, 84, 84, 1.00)",
  height: "180px",
  fontSize: "15px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
};

// Section 3 styles
const section3Style = {
  paddingLeft: "8rem",
  paddingRight: "8rem",
  height: "80px",
  padding: "8px 24px",
};
const socialIconsContainerStyle = {
  display: "flex",
  padding: "4px",

  alignItems: "center",
};
const iconStyle = {
  fontSize: "35px",
  borderRadius: "50%",
  backgroundColor: "white",
  padding: "8px",
};
const iconset = {
  fontSize: "1000px",
  paddingRight: "14px",
  paddingTop: "15px",
  color: "rgba(84, 84, 84, 1.00)",
};
const iconsets = {
  paddingTop: "14px",
  color: "rgba(84, 84, 84, 1.00)",
};
const downloadLinksContainerStyle = {
  paddingTop: "20px",
  paddingLeft: "7px",

  justifyContent: "center",
};

// Download link styles
const downloadLinkStyle = {
  marginRight: "20px",
};

// Download icon styles
const downloadIconStyle = {
  width: "108px",
  height: "32px",
};
// Copyright container styles
const copyrightContainerStyle = {
  paddingLeft: "8rem",
  paddingRight: "8rem",
  height: "64px",
  padding: "0 16px",
  display: "flex",
  alignItems: "center",
};

// Copyright text styles
const copyrightStyle = {
  height: "16px",
  fontSize: "12px",
  lineHeight: "16px",
  color: "rgba(84, 84, 84, 1.00)",
};

export default Footer;
