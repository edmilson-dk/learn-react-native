import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

import { Card } from "@/components/ui/card";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView className='h-full' keyboardShouldPersistTaps='handled'>
        <View className='w-full h-full min-h-screen'>
          <View className='gap-6 w-full'>
            <Card className='border-0 gap-0 w-full h-full p-0 bg-emerald-600'>
              {children}
            </Card>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
