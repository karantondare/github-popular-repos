import React, { useState, useEffect } from "react";
import { fetchPopularRepos } from "../utils/api";
import ReposGrid from "./ReposGrid";
import LanguagesNav from "./LanguagesNav";

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateLanguage(selectedLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateLanguage(selectedLanguage) {
    setSelectedLanguage(selectedLanguage);
    setRepos(null);
    setError(null);

    fetchPopularRepos(selectedLanguage)
      .then((repos) => setRepos(repos))
      .catch(() => {
        console.warn("Error fetching repos: ", error);
        setError(`error: There was error fetching repositories`);
      });
  }

  function isLoading() {
    return repos === null && error === null;
  }

  return (
    <>
      <LanguagesNav
        selected={selectedLanguage}
        onUpdateLanguage={updateLanguage}
      />

      {isLoading() && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {repos && <ReposGrid repos={repos} />}
    </>
  );
};

export default Popular;
