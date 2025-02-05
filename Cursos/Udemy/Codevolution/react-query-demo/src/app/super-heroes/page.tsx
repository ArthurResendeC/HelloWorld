"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export interface Hero {
  id: string;
  name: string;
  alterEgo: string;
}

export default function superHeroesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Hero[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Super Heros Page</h2>
      {data.map((hero: Hero) => (
        <div key={hero.id} className="flex p-1 gap-2">
          <h3>{hero.name}:</h3>
          <p>{hero.alterEgo}</p>
        </div>
      ))}
    </>
  );
}
