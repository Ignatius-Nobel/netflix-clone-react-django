import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <FaFacebookF className="logo" />
        <FaInstagram className="logo" />
        <FaXTwitter className="logo" />
        <FaYoutube className="logo" />
      </div>
      <table>
        <tbody>
          <tr>
            <td>Audio Description</td>
            <td>Help Centre</td>
            <td>Gift Cards</td>
            <td>Media Centre</td>
          </tr>
          <tr>
            <td>Investor Relations</td>
            <td>Jobs</td>
            <td>Terms of Use</td>
            <td>Privacy</td>
          </tr>
          <tr>
            <td>Legal Notices</td>
            <td>Cookie Preferences</td>
            <td>Corporate Information</td>
            <td>Contact Us</td>
          </tr>
        </tbody>
      </table>
      <p>Service Code</p>
      <span>&#xa9; 1997-2024 Netflix, Inc.</span>
    </div>
  );
};

export default Footer;
