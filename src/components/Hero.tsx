import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../api/api";
// import SingleCountry from "./SingleCountry";

export type Countries = {
  name: string;
  capital: string;
  pop: number;
};
const Hero: React.FC = () => {
  const [countries, setCountries] = useState<Countries[] | null>(null);

useEffect(() => {
    axios.get(api).then((response)=>{
      setCountries(response.data);
    })
    countries?console.log(countries):'';
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      {countries
        ? countries.map((c)=>{
          return <div key={c.pop}>{c.name.common + ' - '+c.capital}</div>
        }) 
        : null}
    </div>
  );
};

export default Hero;
