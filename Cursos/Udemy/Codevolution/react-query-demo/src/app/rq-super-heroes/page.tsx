"use client";
import { Hero } from "@/app/super-heroes/page";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function rqSuperHeroesPage() {
  const { isLoading, data } = useQuery({
    queryKey: ["super-heroes"],
    queryFn: () => {
      return axios.get<Hero[]>("http://localhost:4000/superheroes");
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero, index) => (
        <div key={index} className="flex p-1 gap-2">
          <h3>{hero.name}</h3>
        </div>
      ))}
    </div>
  );
}
