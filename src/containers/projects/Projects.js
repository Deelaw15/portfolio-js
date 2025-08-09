import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Projects.scss";
import { bigProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  // todo: remove useContex because is not supported
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then((response) => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    bigProjects.display // Changed from openSource.display to bigProjects.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="Featured projects">
          <div>
            <h1 className="skills-heading">{bigProjects.title}</h1>
            <p className="projects-subtitle">{bigProjects.subtitle}</p>
            <div className="projects-container">
              {repo.map((v, i) => (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              ))}
            </div>

            {/* Add this debug div to check if we reach this point */}
            <div
              style={{
                padding: "20px",
                backgroundColor: "red",
                color: "white",
              }}
            >
              Debug marker
          </div>

            {/* Direct button implementation */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
                marginBottom: "2rem",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  backgroundColor: "#55198b",
                  padding: "15px 30px",
                  borderRadius: "6px",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
                href="https://github.com/Deelaw15"
                target="_blank"
                rel="noreferrer"
              >
                View More Projects
              </a>
            </div>
          </div>
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
