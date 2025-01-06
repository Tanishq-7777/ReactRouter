import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export function Movie() {
  const moivesData = useLoaderData();
  console.log(moivesData);
  return (
    <>
      <ul>
        {moivesData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
      </ul>
    </>
  );
}
