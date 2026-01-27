import CategoryPill from "@/components/app/category-pill";
import { subcategories } from "@/data/mockData";
import { Pressable, ScrollView, Text, View } from "react-native";

type CategoryFiltersProps = {
  categories: string[];
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  onCategoryChange: (category: string | null) => void;
  onSubcategoryChange: (subcategory: string | null) => void;
};

export default function CategoryFilters({
  categories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}: CategoryFiltersProps) {
  const currentSubcategories = selectedCategory
    ? subcategories[selectedCategory] || []
    : [];

  return (
    <View className='gap-3'>
      {/* Categorias principais */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 8,
          paddingHorizontal: 20,
          paddingBottom: 8,
        }}
      >
        <Pressable
          onPress={() => {
            onCategoryChange(null);
            onSubcategoryChange(null);
          }}
          className={`px-4 py-2.5 rounded-full ${
            !selectedCategory
              ? "bg-emerald-500"
              : "bg-white border border-gray-200"
          }`}
          style={{
            shadowColor: !selectedCategory ? "#10b981" : "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: !selectedCategory ? 0.2 : 0.05,
            shadowRadius: 4,
            elevation: !selectedCategory ? 4 : 1,
          }}
        >
          <Text
            className={`text-sm font-medium ${
              !selectedCategory ? "text-white" : "text-gray-600"
            }`}
          >
            Todos
          </Text>
        </Pressable>

        {categories.map((cat) => (
          <CategoryPill
            key={cat}
            category={cat}
            isSelected={selectedCategory === cat}
            onPress={() => {
              onCategoryChange(cat);
              onSubcategoryChange(null);
            }}
          />
        ))}
      </ScrollView>

      {/* Subcategorias */}
      {currentSubcategories.length > 0 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 8,
            paddingHorizontal: 20,
            paddingBottom: 8,
          }}
        >
          <Pressable
            onPress={() => onSubcategoryChange(null)}
            className={`px-3 py-1.5 rounded-full ${
              !selectedSubcategory ? "bg-emerald-100" : "bg-gray-100"
            }`}
          >
            <Text
              className={`text-sm ${
                !selectedSubcategory
                  ? "text-emerald-700 font-medium"
                  : "text-gray-600"
              }`}
            >
              Todos
            </Text>
          </Pressable>

          {currentSubcategories.map((sub) => (
            <Pressable
              key={sub.id}
              onPress={() => onSubcategoryChange(sub.id)}
              className={`px-3 py-1.5 rounded-full flex-row items-center gap-1.5 ${
                selectedSubcategory === sub.id
                  ? "bg-emerald-100"
                  : "bg-gray-100"
              }`}
            >
              <Text className='text-sm'>{sub.icon}</Text>
              <Text
                className={`text-sm ${
                  selectedSubcategory === sub.id
                    ? "text-emerald-700 font-medium"
                    : "text-gray-600"
                }`}
              >
                {sub.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

// Exemplo de uso:
