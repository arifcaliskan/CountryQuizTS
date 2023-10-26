import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { api } from "../api/api";
import SingleCountry from "./SingleCountry";

export type Countries = {
  name: string;
  capital: string;
  pop: number;
};
const Hero: React.FC = () => {
  const [countries, setCountries] = useState([] as any[]);
  const [countriesData, setCountriesData] = useState<Countries[]>();
  const fetchData = async () => {
    const response: AxiosResponse = await axios.get(api);
    setCountries(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(countries);
    if (countries) {
      for (let i = 0; i < countries?.length; i++) {
        setCountriesData({
          ...countriesData,
          name: countries?.[i]?.name.common,
          capital: countries?.[i].capital?.[0],
          pop: countries?.[i]?.population,
        });
      }
    }
  }, [countries]);

  return (
    <div>
      <h1>Countries</h1>
      {countriesData?.map((c)=>{
        return (<h2>{c.name}</h2>)
      })}
    </div>
  );
};

export default Hero;
