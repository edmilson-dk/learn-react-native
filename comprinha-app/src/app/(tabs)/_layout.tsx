import { TabIcon } from "@/components/app/tab-icon";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          minHeight: 100,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Ínicio",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon='home' title='Ínicio' />
          ),
        }}
      />

      <Tabs.Screen
        name='search'
        options={{
          title: "Buscar",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon='search' title='Buscar' />
          ),
        }}
      />

      <Tabs.Screen
        name='cart'
        options={{
          title: "Carrinho",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon='shopping-cart'
              title='Carrinho'
              isCart
            />
          ),
        }}
      />

      <Tabs.Screen
        name='orders'
        options={{
          title: "Pedidos",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon='clipboard' title='Pedidos' />
          ),
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon='user' title='Perfil' />
          ),
        }}
      />
    </Tabs>
  );
}
