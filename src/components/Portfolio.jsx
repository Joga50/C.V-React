import React from "react";

function Portfolio(props) {
  const { theme } = props;
  return (
    <div className={theme ? "portFolioContainer" : "portFolioContainerDark"}>
      hola
    </div>
  );
}

export default Portfolio;
