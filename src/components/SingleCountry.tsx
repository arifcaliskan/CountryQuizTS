import React from "react";
import { Countries } from "./Hero";
const SingleCountry: React.FC = ({ name, capital, pop }: Countries) => {
  return (
    <div key={pop}>
      <h3>{name}</h3>
      <h3>{capital}</h3>
    </div>
  );
};

export default SingleCountry;
