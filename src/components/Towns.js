import React from "react";

const Towns = (props) => {
  return props.show
    ? props.city.towns.map((town, index) => {
        return <li id={`town${index + 1}`}>{town.name}</li>;
      })
    : null;
};

export default Towns;
