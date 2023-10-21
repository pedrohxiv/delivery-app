import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useSelector } from "../hooks/use-redux";
import { StackNavigation } from "../App";

export const BasketButton = () => {
  const navigation = useNavigation<StackNavigation>();

  const items = useSelector(({ basket }) => basket.items);
  const total = useSelector(({ basket }) =>
    basket.items.reduce((total, item) => (total += item.price), 0)
  );

  if (!items.length) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1 mx-4 lg:mx-40"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(total)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
