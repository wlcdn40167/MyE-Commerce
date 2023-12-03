import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get notified for exclusive offers</h1>
      <p>Subscribe to our newsletter and keep posted</p>
      <div>
        <input type="email" placeholder="Your email ID" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
export default NewsLetter;
