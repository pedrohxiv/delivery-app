import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { API_URL } from "@env";

import { CategoryCard } from "./CategoryCard";

interface Category {
  id: string;
  name: string;
  imageUrl: string;
}

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setCategories((await axios.get(`${API_URL}/categories`)).data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {!categories.length ? (
        <View className="h-20" />
      ) : (
        categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            imgUrl={category.imageUrl}
          />
        ))
      )}
    </ScrollView>
  );
};
