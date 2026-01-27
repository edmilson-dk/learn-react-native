import SupermarketCard from "@/components/app/supermarket-card";
import { supermarkets } from "@/data/mockData";
import { COLORS } from "@/lib/theme";
import { Feather, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect } from "react";
import { SectionList, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeInDown,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export default function Home() {
  const featured = supermarkets.filter((item) => item.featured);
  const allSorted = [...supermarkets].sort((a, b) => b.rating - a.rating);

  const headerOpacity = useSharedValue(0);
  const headerTranslateY = useSharedValue(-20);

  useEffect(() => {
    headerOpacity.value = withTiming(1, { duration: 600 });
    headerTranslateY.value = withSpring(0, {
      damping: 15,
      stiffness: 100,
    });
  }, []);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: headerOpacity.value,
      transform: [{ translateY: headerTranslateY.value }],
    };
  });

  const sections = [
    {
      title: "Destaques",
      icon: (
        <FontAwesome6
          name='ranking-star'
          size={20}
          color={COLORS.orange[500]}
        />
      ),
      data: featured,
    },
    {
      title: "Todos os Supermercados",
      icon: <FontAwesome5 name='store' size={18} color={COLORS.emerald[600]} />,
      data: allSorted,
    },
  ];

  return (
    <View className='h-screen w-full'>
      {/* Header com animação */}
      <Animated.View
        style={headerAnimatedStyle}
        className='bg-emerald-500 w-full px-5 pt-14 pb-6'
      >
        <Animated.View
          entering={FadeInUp.delay(200).springify()}
          className='w-full flex flex-row justify-between items-center mb-4'
        >
          <View className='flex flex-row justify-start items-center gap-2'>
            <View className='w-10 h-10 rounded-full bg-white/20 flex justify-center items-center'>
              <Feather color='#fff' size={20} name='map-pin' />
            </View>

            <View className='flex flex-col justify-start items-start'>
              <Text className='text-sm text-emerald-100 font-medium'>
                Entregar em
              </Text>
              <TouchableOpacity>
                <Text className='text-white font-semibold text-sm underline'>
                  Adicionar endereço
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <AnimatedTouchableOpacity
            entering={FadeInDown.delay(300).springify()}
            className='w-10 h-10 rounded-full bg-white/20 flex justify-center items-center'
          >
            <Feather color='#fff' size={20} name='bell' />
          </AnimatedTouchableOpacity>
        </Animated.View>

        <View className='w-full flex gap-5'>
          <Animated.View
            entering={FadeInUp.delay(400).springify()}
            className='flex flex-col justify-start items-start'
          >
            <Text className='text-sm text-emerald-100 font-medium'>
              Boa Tarde,
            </Text>
            <Text className='text-white text-2xl font-bold'>Edmilson! 👋</Text>
          </Animated.View>

          <Animated.View entering={FadeInUp.delay(500).springify()}>
            <Link href='/(tabs)/search' className='w-full'>
              <View className='bg-white/20 rounded-2xl px-4 py-2 h-12 flex items-center gap-3 w-full flex-row'>
                <Feather size={24} name='search' color='#fff' />
                <Text className='text-white/80 text-sm'>
                  Buscar supermercados ou produtos...
                </Text>
              </View>
            </Link>
          </Animated.View>
        </View>
      </Animated.View>

      <SafeAreaView edges={["left", "right"]} style={{ flex: 1 }}>
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 140,
          }}
          renderSectionHeader={({ section }) => (
            <Animated.View
              entering={FadeInDown.delay(600).springify()}
              className='w-full mb-2 mt-4'
            >
              <View className='flex flex-row justify-start items-center gap-2'>
                {section.icon}
                <Text className='text-lg font-bold text-gray-900'>
                  {section.title}
                </Text>
              </View>
            </Animated.View>
          )}
          renderItem={({ item, index }) => (
            <Animated.View
              entering={FadeInDown.delay(700 + index * 100)
                .springify()
                .damping(15)}
            >
              <SupermarketCard supermarket={item} />
            </Animated.View>
          )}
        />
      </SafeAreaView>
    </View>
  );
}
