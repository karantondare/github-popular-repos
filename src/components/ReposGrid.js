import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from "react-icons/fa";

function ReposGrid({ repos }) {
  return (
    <Grid>
      <ul className="grid space-around">
        {repos.map((repo, index) => {
          const {
            owner,
            html_url,
            stargazers_count,
            forks,
            open_issues,
          } = repo;
          const { login, avatar_url } = owner;

          return (
            <li key={html_url} className="repo">
              <div className="header-content">
                <h4 className="header center-text">#{index + 1}</h4>
                <h2 className="center-text">
                  <a className="link" href={html_url}>
                    {login}
                  </a>
                </h2>
              </div>

              <div className="flex-content">
                <img
                  className="avatar"
                  src={avatar_url}
                  alt={`Avatar for ${login}`}
                />
                <ul className="card-list">
                  <li>
                    <FaUser color="rgb(255, 191, 116)" size={22} />
                    <a href={`https://github.com/${login}`}>{login}</a>
                  </li>
                  <li>
                    <FaStar color="rgb(255, 215, 0)" size={22} />
                    {stargazers_count.toLocaleString()} stars
                  </li>
                  <li>
                    <FaCodeBranch color="rgb(129, 195, 245)" size={22} />
                    {forks.toLocaleString()} forks
                  </li>
                  <li>
                    <FaExclamationTriangle
                      color="rgb(241, 138, 147)"
                      size={22}
                    />
                    {open_issues.toLocaleString()} open
                  </li>
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </Grid>
  );
}

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

const Grid = styled.div`
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .header {
    font-size: 35px;
    font-weight: 300;
    margin: 20px;
  }

  .repo {
    margin: 15px 0;
    padding: 20px;
    width: 330px;
    background: rgba(0, 0, 0, 0.09);
    border-radius: 3px;
  }

  .flex-content,
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .header-content {
    justify-content: flex-start;
    height: 50px;
    font-size: 20px;
  }

  .repo a {
    text-decoration: none;
    font-weight: bolder;
  }

  .repo img {
    margin-bottom: 8px;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 3px;
    display: block;
  }
  .center-text {
    text-align: center;
  }

  .link {
    color: rgb(187, 46, 31);
    text-decoration: none;
    font-weight: bold;
  }

  .card-list {
    margin: 20px 0;
    font-size: 20px;
  }

  .card-list li {
    display: flex;
    align-items: center;
    margin: 10px;
  }

  .card-list svg {
    margin-right: 10px;
  }

  .card-list a {
    font-weight: 500;
    color: inherit;
  }
`;

export default ReposGrid;
