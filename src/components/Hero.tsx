import { useEffect, useState, FC } from "react";
import axios from "axios";
import { api } from "../api/api";
// import SingleCountry from "./SingleCountry";

type Name = {
  common: string;
};
interface QuizDataType {
  Quizzes?: Countries[];
  [others: string]: any;
}
export type Countries = {
  name?: Name | string | any;
  capital?: string;
  pop?: number;
  id?: string;
  [others: string]: any;
};
const Hero: FC = () => {
  const [countries, setCountries] = useState<Countries[] | null>(null);
  const [quizData, setQuizData] = useState<QuizDataType[] | null>(null);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    axios.get(api).then((response) => {
      setCountries(response.data);
      // setQuizData(response.data)
    });
    countries
      ? countries.forEach((c, i) => {
          let Quizzes:Countries[] = {
            capital: c.capital,
            name: c.name.common,
            id: i,
            pop: c.pop,
          };
          setQuizData(Quizzes)
        })
      : null;
  }, []);
  console.log(quizData)
  const countryLength = countries?.length;
  // console.log(countryLength);
  quizData ?? console.log(quizData);

  return (
    <div key={Math.random()}>
      <h1>Countries</h1>
      {countries ? (
        countries?.map((c) => {
          return (
            <div key={c.id}>
              <p>
                {c.name.common} - {c.capital}
              </p>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Hero;
