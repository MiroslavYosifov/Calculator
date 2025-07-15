"use client";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

export default function FoodPage() {
  let API_KEY = "b2svYKIPS7EGn94zTympZI58vbW8N2MuNjFS0MT2";

  const [products, setProducts] = useState([]);

  const handleSearch = async (query: string) => {
    try {
      if (query.length == 0) return;

      const res = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&dataType=Foundation&requireAllWords=true&api_key=${API_KEY}`
      );
      const resData = await res.json();

      setProducts(resData.foods);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="bg-[#424d5e] w-full h-screen text-white">
      <SearchBar onSearch={handleSearch} />
      <section className="flex justify-evenly flex-wrap">
        {products.map((product, key) => (
          <h1 key={key}>{key}</h1>
        ))}
      </section>
    </main>
  );
}
