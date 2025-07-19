"use client";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import FoodForm from "../components/food/FoodForm";

interface Nutrient {
  nutrientId: number;
  nutrientName: string;
  value: number;
  unitName: string;
}

interface Product {
  fdcId: number;
  description: string;
  foodNutrients: Nutrient[];
  defaultImage: string;
}

const wantedNutrients = [
  "Protein",
  "Total Sugars",
  "Total lipid (fat)",
  "Carbohydrate, by difference",
];

export default function FoodPage() {
  const API_KEY_FOOD = "b2svYKIPS7EGn94zTympZI58vbW8N2MuNjFS0MT2";
  const IMG_API_KEY = `51393893-de189c10310f7bf0a1d9f0cdc`;

  const maxLength = 70;

  const [products, setProducts] = useState<Product[]>([]);
  const [images, setImages] = useState<{ [key: string]: string }>({});

  const handleSearch = async (query: string) => {
    try {
      if (query.length == 0) return;

      const res = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&dataType=Foundation&requireAllWords=true&api_key=${API_KEY_FOOD}`
      );
      const resData = await res.json();

      setProducts(resData.foods);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchImages = async (productName: string) => {
    try {
      const searchName =
        productName.length > maxLength
          ? productName.slice(0, maxLength)
          : productName;

      const res = await fetch(
        `https://pixabay.com/api/?key=${IMG_API_KEY}&q=${searchName}+food&image_type=photo&category=food&per_page=3`
      );
      const resData = await res.json();

      if (resData.hits && resData.hits.length >= 3) {
        setImages((prev) => ({
          ...prev,
          [productName]: resData.hits[2].largeImageURL,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    products.forEach((product) => {
      const name = product.description;
      if (!images[name]) {
        fetchImages(name);
      }
    });
  }, [products]);

  return (
    <main className="bg-[#424d5e] w-full h-screen text-white">
      <SearchBar onSearch={handleSearch} />
      <FoodForm />

      <section className="flex justify-evenly flex-wrap gap-4 mt-4">
        {products.map((product) => {
          const productName = product.description;
          const productImage = images[productName];
          product.defaultImage = "food_default.jpg";

          console.log(product, productImage, "<< ---------productImage");

          const filteredNutrients = product.foodNutrients.filter((n) =>
            wantedNutrients.includes(n.nutrientName)
          );

          return (
            <div
              key={product.fdcId}
              className="w-[47%] border-2 border-black bg-white text-black p-4 rounded-xl shadow"
            >
              <h2 className="text-xl font-semibold mb-2">
                {product.description}
              </h2>
              <img
                src={productImage ? productImage : product.defaultImage}
                alt="Product Image"
              />
              <ul className="text-sm list-disc pl-5">
                {filteredNutrients.map((n) => (
                  <li key={n.nutrientId}>
                    {n.nutrientName}: {n.value} {n.unitName}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
    </main>
  );
}
