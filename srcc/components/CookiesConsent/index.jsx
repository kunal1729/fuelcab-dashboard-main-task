import React from "react";
import CookieConsent from "react-cookie-consent";

export default function CookiesConsentModal() {
  return (
    <CookieConsent
      cookieName="name"
      cookieValue="Testing"
      location="bottom"
      buttonStyle={{
        backgroundColor: "#1D523B",
        padding: ".8em",
        fontWeight: "600",
        color: "white",
      }}
      buttonText="I Understand"
      // ButtonComponent={<Button />}
    >
      This website collects cookies to deliver better user experience. we never
      collect any personal data.
      <br />
      Cookies help us display personalized product recommendations and ensure
      you have great experience.
    </CookieConsent>
  );
}
