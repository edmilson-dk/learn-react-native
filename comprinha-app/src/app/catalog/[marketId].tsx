import { CartFooter } from "@/components/app/car-footer";
import CategoryFilters from "@/components/app/category-filters";
import { ProductCard } from "@/components/app/product-card";
import SupermarketCard from "@/components/app/supermarket-card";
import { Input } from "@/components/ui/input";
import { categoryLabels, products, supermarkets } from "@/data/mockData";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MarketCatalog() {
  const { marketId } = useLocalSearchParams();
  const market = supermarkets.find((item) => item.id === marketId);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null,
  );

  const categories: string[] = Object.values(categoryLabels);

  if (!market) {
    return (
      <View>
        <Text>Supermercado Não Encontrado!</Text>
      </View>
    );
  }

  const renderHeader = () => (
    <>
      <View className='w-full max-h-52 h-52 relative'>
        <View className='bg-emerald-500 w-full h-full'>
          <Image
            src={market.logo}
            className='absolute inset-0 w-full h-full object-cover opacity-30'
          />
        </View>
      </View>

      <View className='absolute top-12 w-full flex flex-row justify-between items-center px-5'>
        <Pressable
          onPress={() => router.back()}
          className='bg-white/20 backdrop-blur-sm rounded-full flex flex-row items-center justify-center z-40 w-10 h-10'
        >
          <Feather name='arrow-left' size={20} color='#fff' />
        </Pressable>

        <Pressable
          onPress={() => router.back()}
          className='bg-white/20 backdrop-blur-sm rounded-full flex flex-row items-center justify-center z-40 w-10 h-10'
        >
          <Feather name='info' size={20} color='#fff' />
        </Pressable>
      </View>

      <View className='px-5 mt-[-40px] mb-4'>
        <SupermarketCard supermarket={market} />
      </View>

      <View className='px-5 mb-5'>
        <View className='relative w-full'>
          <Input
            placeholder='Buscar produtos...'
            value=''
            onChangeText={(e) => console.log(e)}
            className='pl-10 pr-10 h-11 rounded-xl bg-white border-gray-200'
          />
        </View>

        <CategoryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          onCategoryChange={setSelectedCategory}
          onSubcategoryChange={setSelectedSubcategory}
        />
      </View>
    </>
  );

  return (
    <View className='flex-1'>
      <View className='bg-emerald-500'>
        <SafeAreaView edges={["top"]} />
      </View>

      <SafeAreaView edges={["left", "right", "bottom"]} className='flex-1'>
        <FlatList
          data={products.sort((a, b) => parseInt(a.id) - parseInt(b.id))}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderHeader}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
          columnWrapperStyle={{ gap: 0, paddingHorizontal: 0 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ProductCard product={item} index={index} />
          )}
        />
      </SafeAreaView>

      <CartFooter cartItemCount={3} cartTotal={45.9} />
    </View>
  );
}
