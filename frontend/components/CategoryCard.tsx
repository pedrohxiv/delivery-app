import { Text, TouchableOpacity, Image } from "react-native";

interface CategoryCardProps {
  title: string;
  imgUrl: string;
}

export const CategoryCard = ({ title, imgUrl }: CategoryCardProps) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
