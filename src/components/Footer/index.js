import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <h2>Made by Dominique Garrett©</h2>
      <p>
        <ul>
          <a href="https://github.com/DominiqueGarrett">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/dominique-garrett-681331258/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
         
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
