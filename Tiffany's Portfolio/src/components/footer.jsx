import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {
  const GitHubUrl = "https://github.com/pereztb02";
  const LinkedInUrl =  "https://www.linkedin.com/in/tiffany-perez-441114192/#:~:text=www.linkedin.com/in/tiffany%2Dperez%2D441114192";
  const StackOFUrl = "https://stackoverflow.com/users/22990744/t-perezdev"

  return (
    <div className="footer">
        <a className="icon" href={GitHubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} color="#FFFFFF" />
        </a>
         <a className="icon" href={LinkedInUrl} target="_blank" rel="noopener noreferrer">
         <FaLinkedin size={30} color="#FFFFFF" />
           </a>
           <a className="icon" href={StackOFUrl} target="_blank" rel="noopener noreferrer">
         <FaStackOverflow  size={30} color="#FFFFFF" />
           </a>
    </div>
  );
}

export default Footer;
