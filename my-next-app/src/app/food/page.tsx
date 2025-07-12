"use client";
import { useState } from "react";
import { foodData } from "../lib/foodData";
import SearchBar from "./SearchBar";
import Image from "next/image";

export default function FoodPage() {
  const [filteredFood, setFilteredFood] = useState(foodData);

  const handleSearch = (query: string) => {
    const filteredFoodResult = foodData.filter(({ name }) => {
      return name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    });

    setFilteredFood(filteredFoodResult);
    console.log(filteredFoodResult, "filteredFood");
  };

  return (
    <main className="bg-[#424d5e] w-full h-screen text-white">
      <SearchBar onSearch={handleSearch} />
      <section className="flex justify-evenly flex-wrap">
        {filteredFood.length > 0 ? (
          filteredFood.map(({ id, name, image }) => (
            <div key={id} className="w-[50%]">
              <Image src={image} alt="Product Image" width={180} height={200} />
              <span className="item-name text-center block">{name}</span>
            </div>
          ))
        ) : (
          <p>No foods found111 :/</p>
        )}
      </section>
    </main>
  );
}
