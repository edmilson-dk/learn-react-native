import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type CategoryConfig = {
  icon:
    | keyof typeof FontAwesome5.glyphMap
    | keyof typeof MaterialCommunityIcons.glyphMap;
  iconFamily: "FontAwesome5" | "MaterialCommunityIcons";
  label: string;
  color: string;
  bgColor: string;
};

export const categoryConfig: Record<string, CategoryConfig> = {
  alimentos: {
    icon: "utensils",
    iconFamily: "FontAwesome5",
    label: "Alimentos",
    color: "#f59e0b",
    bgColor: "#fef3c7",
  },
  bebidas: {
    icon: "glass-wine",
    iconFamily: "MaterialCommunityIcons",
    label: "Bebidas",
    color: "#a855f7",
    bgColor: "#f3e8ff",
  },
  hortifruti: {
    icon: "apple-alt",
    iconFamily: "FontAwesome5",
    label: "Hortifruti",
    color: "#10b981",
    bgColor: "#d1fae5",
  },
  limpeza: {
    icon: "sparkles",
    iconFamily: "FontAwesome5",
    label: "Limpeza",
    color: "#3b82f6",
    bgColor: "#dbeafe",
  },
  higiene: {
    icon: "heart",
    iconFamily: "FontAwesome5",
    label: "Higiene",
    color: "#ec4899",
    bgColor: "#fce7f3",
  },
  acougue: {
    icon: "food-steak",
    iconFamily: "MaterialCommunityIcons",
    label: "Açougue",
    color: "#ef4444",
    bgColor: "#fee2e2",
  },
  outros: {
    icon: "ellipsis-h",
    iconFamily: "FontAwesome5",
    label: "Outros",
    color: "#6b7280",
    bgColor: "#f3f4f6",
  },
};

type CategoryPillProps = {
  category: string;
  isSelected: boolean;
  onPress: () => void;
};

export default function CategoryPill({
  category,
  isSelected,
  onPress,
}: CategoryPillProps) {
  const config =
    categoryConfig[category.toLowerCase()] || categoryConfig.outros;
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.95, { damping: 10 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(isSelected ? 1.05 : 1, { damping: 10 });
  };

  const IconComponent =
    config.iconFamily === "FontAwesome5"
      ? FontAwesome5
      : MaterialCommunityIcons;

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        animatedStyle,
        {
          backgroundColor: isSelected ? config.color : config.bgColor,
          borderRadius: 9999,
          paddingHorizontal: 16,
          paddingVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          shadowColor: isSelected ? config.color : "#000",
          shadowOffset: { width: 0, height: isSelected ? 4 : 2 },
          shadowOpacity: isSelected ? 0.3 : 0.1,
          shadowRadius: isSelected ? 8 : 4,
          elevation: isSelected ? 8 : 2,
        },
      ]}
    >
      <IconComponent
        name={config.icon as any}
        size={16}
        color={isSelected ? "#fff" : config.color}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: isSelected ? "#fff" : config.color,
        }}
      >
        {config.label}
      </Text>
    </AnimatedPressable>
  );
}
