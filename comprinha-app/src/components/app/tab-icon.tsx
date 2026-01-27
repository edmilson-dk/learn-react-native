import { COLORS } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

type Props = {
  focused: boolean;
  icon: keyof typeof Feather.glyphMap;
  title: string;
  isCart?: boolean;
};

export function TabIcon({ focused, icon, title, isCart }: Props) {
  return (
    <View
      className={cn(
        " flex flex-col justify-center items-center relative bg-white w-full min-w-20 gap-2 pt-3 pb-2  min-h-[60px] border-t border-t-gray-200",
      )}
    >
      <Feather
        name={icon}
        size={20}
        color={focused ? COLORS.emerald[600] : COLORS.gray[400]}
      />

      {isCart && (
        <View className='w-5 h-5 rounded-full bg-orange-500 flex justify-center items-center absolute top-0 right-[15px] z-30'>
          <Text className='text-xs text-white font-medium'>5</Text>
        </View>
      )}

      <Text
        className={cn("  font-medium text-gray-400", {
          "text-emerald-600": focused,
        })}
        style={{
          fontSize: 10,
        }}
      >
        {title}
      </Text>

      {focused && (
        <View className='absolute -top-[1px] left-1/2 -translate-x-1/2 w-16 h-1 bg-emerald-500 rounded-b-full' />
      )}
    </View>
  );
}
