import { cn } from "@/lib/utils";
import { Supermarket } from "@/types/types";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

type Props = {
  supermarket: Supermarket;
};

export default function SupermarketCard({ supermarket }: Props) {
  return (
    <Link
      href={`/catalog/${supermarket.id}`}
      className=' bg-white rounded-2xl border border-gray-100 w-full p-4 my-2'
    >
      <View className='flex flex-row justify-start items-center  gap-4'>
        {/* Logo */}
        <View className='w-20 h-20'>
          {supermarket.logo ? (
            <Image
              src={supermarket.logo}
              alt={supermarket.name}
              className='w-full h-full object-cover rounded-xl'
            />
          ) : (
            <Text className='text-3xl font-bold text-emerald-600'>
              {supermarket.name?.charAt(0)}
            </Text>
          )}
        </View>

        <View className=''>
          <Text className='font-semibold text-gray-900 truncate text-lg'>
            {supermarket.name}
          </Text>

          <View className='flex flex-row items-center gap-1 mt-1'>
            <AntDesign name='star' size={16} color='#fbbf24' />
            <Text className='text-sm font-medium text-gray-700'>
              {supermarket.rating?.toFixed(1) || "0.0"}
            </Text>
            <Text className='text-sm text-gray-400'>
              ({supermarket.totalRating || 0} avaliações)
            </Text>
          </View>

          <View className='flex flex-row items-center gap-3 mt-2'>
            <View
              className={cn(
                "flex flex-row justify-start items-center gap-1 px-2 py-0.5 rounded-full ",
                {
                  "bg-emerald-50": supermarket.isOpen,
                  "bg-red-50 ": !supermarket.isOpen,
                },
              )}
            >
              <View
                className={cn("w-1.5 h-1.5 rounded-full", {
                  "bg-emerald-500": supermarket.isOpen,
                  "bg-red-500": !supermarket.isOpen,
                })}
              />
              <Text
                className={cn("text-xs font-medium ", {
                  " text-emerald-700": supermarket.isOpen,
                  " text-red-600": !supermarket.isOpen,
                })}
              >
                {supermarket.isOpen ? "Aberto" : "Fechado"}
              </Text>
            </View>

            {supermarket.minimumOrder > 0 && (
              <Text className='text-xs text-gray-500'>
                Mín. R$ {supermarket.minimumOrder?.toFixed(2)}
              </Text>
            )}
          </View>
        </View>
      </View>
    </Link>
  );
}
