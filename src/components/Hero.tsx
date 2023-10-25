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
  const [data, setData] = useState();
  const [countriesData, setCountriesData] = useState<Countries>();
  const fetchData = async () => {
    const response: AxiosResponse = await axios.get(api);
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>Countries</h1>
      <SingleCountry name={"Japan"} capital={"Tokyo"} pop={124} />
    </div>
  );
};

export default Hero;
