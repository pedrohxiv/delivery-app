import { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";

import { StackNavigation } from "../App";
import { removeFromBasket, useDispatch, useSelector } from "../hooks/use-redux";

interface Basket {
  [key: string]: {
    image: string;
    name: string;
    price: number;
  }[];
}

export function BasketScreen() {
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<Basket>({});

  const navigation = useNavigation<StackNavigation>();
  const dispatch = useDispatch();

  const restaurant = useSelector(({ restaurant }) => restaurant.details);
  const items = useSelector(({ basket }) => basket.items);
  const total = useSelector(({ basket }) =>
    basket.items.reduce((total, item) => (total += item.price), 0)
  );

  useEffect(() => {
    const groupedItems = items.reduce((results: any, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-sm">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" size={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{ uri: items[0]?.image }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(items[0]?.price)}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-red-500 text-xs">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(total)}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-gray-400">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(5.99)}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="font-extrabold">Order Total</Text>
            <Text className="font-extrabold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(total + 5.99)}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Preparing")}
            className="rounded-lg bg-[#00CCBB] p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
