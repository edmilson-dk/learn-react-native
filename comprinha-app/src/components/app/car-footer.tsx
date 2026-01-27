import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type CartFooterProps = {
  cartItemCount: number;
  cartTotal: number;
};

export function CartFooter({ cartItemCount, cartTotal }: CartFooterProps) {
  const translateY = useSharedValue(100);

  useEffect(() => {
    translateY.value = withSpring(0, {
      damping: 15,
      stiffness: 100,
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View
      style={animatedStyle}
      className='absolute bottom-20 left-4 right-4 z-40'
    >
      <Pressable
        onPress={() => router.push("/cart")}
        className='bg-emerald-500 rounded-2xl p-4 shadow-lg flex-row items-center justify-between active:opacity-90'
        style={{
          shadowColor: "#10b981",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        }}
      >
        <View className='flex-row items-center gap-3'>
          <View className='w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center'>
            <Feather name='shopping-cart' size={20} color='#fff' />
          </View>
          <View>
            <Text className='text-white/80 text-xs'>
              {cartItemCount} {cartItemCount === 1 ? "item" : "itens"}
            </Text>
            <Text className='text-white font-bold text-base'>
              R$ {cartTotal.toFixed(2).replace(".", ",")}
            </Text>
          </View>
        </View>
        <Text className='text-white font-semibold'>Ver carrinho →</Text>
      </Pressable>
    </Animated.View>
  );
}

// Exemplo de uso:
// <CartFooter cartItemCount={3} cartTotal={45.90} />
