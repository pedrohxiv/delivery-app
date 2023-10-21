import axios from "axios";
import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { API_URL } from "@env";

import { Categories } from "../components/Categories";
import { FeaturedRow } from "../components/FeaturedRow";

interface Featured {
  id: string;
  name: string;
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

export function HomeScreen() {
  const [featureds, setFeatureds] = useState<Featured[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setFeatureds((await axios.get(`${API_URL}/featureds`)).data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 pb-8">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        {featureds.map((featured) => (
          <FeaturedRow
            key={featured.id}
            title={featured.name}
            description={featured.description}
            restaurants={featured.restaurants}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
