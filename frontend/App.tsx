import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeWindStyleSheet } from "nativewind";

import { store } from "./store";

import { HomeScreen } from "./screens/HomeScreen";
import { RestaurantScreen } from "./screens/RestaurantScreen";
import { BasketScreen } from "./screens/BasketScreen";
import { PreparingScreen } from "./screens/PreparingScreen";
import { DeliveryScreen } from "./screens/DeliveryScreen";

export type RootStackParamList = Record<
  "Home" | "Restaurant" | "Basket" | "Preparing" | "Delivery",
  | undefined
  | {
      id: string;
      imgUrl: string;
      title: string;
      rating: number;
      genre: string;
      address: string;
      short_description: string;
      dishes: object[];
      long: number;
      lat: number;
    }
>;

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              statusBarStyle: "dark",
              statusBarColor: "white",
            }}
          />
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{
              headerShown: false,
              presentation: "modal",
              statusBarStyle: "dark",
              statusBarColor: "white",
            }}
          />
          <Stack.Screen
            name="Preparing"
            component={PreparingScreen}
            options={{
              headerShown: false,
              presentation: "fullScreenModal",
              statusBarStyle: "light",
              statusBarColor: "#00CCBB",
            }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{
              headerShown: false,
              presentation: "fullScreenModal",
              statusBarStyle: "light",
              statusBarColor: "#00CCBB",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
