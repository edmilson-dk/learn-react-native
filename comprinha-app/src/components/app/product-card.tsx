import { COLORS } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { Product } from "@/types/types";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Button } from "../ui/button";

type Props = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: Props) {
  const [quantity, setQuantity] = useState(0);

  return (
    <View
      className={cn(
        "flex-1 bg-white border-b border-r border-gray-200 max-h-[320px] p-1",
        {
          "border-l": index % 2 === 0,
          "border-t": index < 2,
        },
      )}
    >
      <View className='flex flex-col h-full pb-2'>
        <View className='w-full h-40'>
          <Image
            src={product.image}
            className='h-full w-full rounded'
            resizeMode='cover'
          />
        </View>

        <View className='flex-1 p-2 justify-between'>
          <View>
            <Text
              className='text-base font-medium text-gray-700 leading-5'
              numberOfLines={2}
            >
              {product.name}
            </Text>
            <Text className='text-lg font-bold text-gray-800 mt-1'>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </View>

          <View>
            {quantity === 0 ? (
              <Button
                onPress={() => setQuantity(1)}
                className='w-full h-10 bg-orange-500 active:bg-orange-600 rounded-xl'
              >
                <FontAwesome5 name='cart-plus' size={16} color='#fff' />
                <Text className='text-white font-medium ml-2'>Adicionar</Text>
              </Button>
            ) : (
              <View className='flex flex-row items-center justify-between bg-orange-50 rounded-xl p-1.5'>
                <Pressable
                  onPress={() => setQuantity((state) => Math.max(0, state - 1))}
                  className='w-9 h-9 flex items-center justify-center bg-white rounded-lg shadow-sm active:scale-95'
                >
                  <Feather name='minus' size={16} color={COLORS.orange[500]} />
                </Pressable>
                <Text className='font-bold text-orange-700 text-base'>
                  {quantity}
                </Text>
                <Pressable
                  onPress={() => setQuantity((state) => state + 1)}
                  className='w-9 h-9 flex items-center justify-center bg-orange-500 rounded-lg shadow-sm active:scale-95'
                >
                  <Feather name='plus' size={16} color='#fff' />
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
