import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";

import { RestaurantCard } from "./RestaurantCard";

interface FeaturedRowProps {
  title: string;
  description: string;
  restaurants: {
    restaurant: {
      id: string;
      imageUrl: string;
      name: string;
      rating: number;
      category: {
        name: string;
      };
      address: string;
      description: string;
      dishes: object[];
      longitude: number;
      latitude: number;
    };
  }[];
}

export const FeaturedRow = ({
  title,
  description,
  restaurants,
}: FeaturedRowProps) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants.map(({ restaurant }) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            imgUrl={restaurant.imageUrl}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.category.name}
            address={restaurant.address}
            short_description={restaurant.description}
            dishes={restaurant.dishes}
            long={restaurant.longitude}
            lat={restaurant.latitude}
          />
        ))}
      </ScrollView>
    </View>
  );
};
