import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import "./footer.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <div class="about-us">
        <div class="summary">
          <ul>
            <p> Get to Know Us</p>
            <li> Careers</li>
            <li> Blog</li>
            <li> About Amazon</li>
            <li> Investor Relations</li>
            <li> Amazon Devices </li>
            <li> Amazon Science</li>
          </ul>
        </div>
        <div class="summary">
          <ul>
            <p>Make Money with Us </p>
            <li> Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li> Sell apps on Amazon</li>
            <li> Become an Affiliate</li>
            <li> Advertise Your Products</li>
            <li> Self-Publish with Us</li>
            <li> Host an Amazon Hub</li>
            <li>›See More Make Money with Us</li>
          </ul>
        </div>

        <div class="summary">
          <ul>
            <p> Amazon Payment Products</p>
            <li> Amazon Business Card</li>
            <li> Shop with Points</li>

            <li> Reload Your Balance</li>
            <li> Amazon Currency Converter</li>
          </ul>
        </div>

        <div class="summary last">
          <ul>
            <p> Let Us Help You</p>
            <li> Amazon and COVID-19</li>
            <li> Your Account </li>
            <li> Your Orders</li>
            <li> Shipping Rates & Policies</li>
            <li> Returns & Replacements</li>
            <li> Manage Your Content and Devices</li>
            <li> Amazon Assistant</li>
            <li> Help</li>
          </ul>
        </div>
      </div>

      <div className="footer">
        <div className="intro">
          <h4>Created by Amar Kumar</h4>
          <p>@Anandraj All Right Reserve,{date}</p>
        </div>
        <div className="footer_icons">
          <a
            href="https://github.com/amaranand360"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <li>
              {" "}
              <AiFillGithub />
            </li>{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/amar-kumar-nb0030/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <li>
              {" "}
              <AiFillLinkedin />
            </li>{" "}
          </a>
          <a
            href="https://www.instagram.com/amaranand_371/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <li>
              {" "}
              <AiFillInstagram />
            </li>{" "}
          </a>
          <a
            href="https://twitter.com/amarengcs0030"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <li>
              {" "}
              <AiOutlineTwitter />{" "}
            </li>{" "}
          </a>
          <a
            href="https://www.facebook.com/AMARKUMAR0030/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <li>
              {" "}
              <AiFillFacebook />{" "}
            </li>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
