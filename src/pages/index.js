import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@/components/card";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://www.theboysapi.com/api/character"
    );
    setCharacters(response.data.results);
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {characters.map((a) => (
        <Card
          name={a.name}
          key={a.id}
          gender={a.gender}
          image={a.image}
          citizenship={a.citizenship}
        />
      ))}
    </div>
  );
}
