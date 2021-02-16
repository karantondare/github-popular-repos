import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LanguagesNav = ({ selected, onUpdateLanguage }) => {
  const languages = [
    "All",
    "JavaScript",
    "Java",
    "CSS",
    "Python",
    "Ruby",
    "PHP",
    "Go",
  ];

  return (
    <Navbar>
      <ul className="navbar">
        {languages.map((language) => (
          <li key={language}>
            <button
              className="nav-button"
              style={
                language === selected ? { color: "rgb(187, 46, 31)" } : null
              }
              onClick={() => onUpdateLanguage(language)}
            >
              {language}
            </button>
          </li>
        ))}
      </ul>
    </Navbar>
  );
};

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

const Navbar = styled.div`
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-button {
    border: none;
    background: transparent;
    font-size: 24px;
    font-family: inherit;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    /* border-bottom: 1px solid black; */
    margin: 10px;
    padding: 10px 10px;
  }

  .nav-button:hover {
    background-color: rgb(212, 83, 70);
    color: white;
    transition: 0.5s;
  }
`;
export default LanguagesNav;
