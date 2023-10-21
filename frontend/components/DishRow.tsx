import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

import {
  addToBasket,
  removeFromBasket,
  useDispatch,
  useSelector,
} from "../hooks/use-redux";

interface DishRowProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const DishRow = ({
  id,
  name,
  description,
  price,
  image,
}: DishRowProps) => {
  const dispatch = useDispatch();

  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(({ basket }) =>
    basket.items.filter((item) => item.id === id)
  );

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (items.length <= 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 mr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(price)}
            </Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: image }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={items.length <= 0}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};
