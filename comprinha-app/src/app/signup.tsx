import { Image, Text, View } from "react-native";

import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, router } from "expo-router";

export default function Signup() {
  return (
    <AuthLayout>
      <CardHeader className='bg-emerald-600 w-full pt-12 pb-10'>
        <View>
          <Image
            source={require("../assets/images/logo.png")}
            className='mx-auto h-40 w-40 sm:mx-0'
          />
        </View>
        <CardTitle className='text-center text-xl text-white'>
          Bem vindo ao Comprinha!
        </CardTitle>
        <CardDescription className='text-center text-white'>
          O mercado da cidade, no celular
        </CardDescription>
      </CardHeader>
      <View className='gap-6 px-6 w-full rounded-t-3xl bg-white h-full py-6'>
        <View className='gap-6'>
          <View className='gap-1.5'>
            <Label htmlFor='name'>Nome</Label>
            <Input
              id='name'
              placeholder='Seu nome'
              autoComplete='name'
              autoCapitalize='words'
              returnKeyType='next'
              // apos pressionar "next", ir para o proximo campo
              submitBehavior='newline'
            />
          </View>

          <View className='gap-1.5'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              placeholder='exemplo@gmail.com'
              keyboardType='email-address'
              autoComplete='email'
              autoCapitalize='none'
              returnKeyType='next'
            />
          </View>

          <View className='gap-1.5'>
            <Label htmlFor='password'>Senha</Label>
            <View>
              <Input id='password' secureTextEntry returnKeyType='send' />
              <Text className='text-gray-400 text-sm'>
                A senha deve ter no mínimo 8 caracteres
              </Text>
            </View>
          </View>
          <Button
            className='w-full h-12'
            onPress={() => {
              router.navigate("/(tabs)");
            }}
          >
            <Text className=' text-white font-semibold text-base'>
              Criar conta
            </Text>
          </Button>
        </View>
        <Text className='text-center text-sm flex items-center justify-center gap-1 '>
          Já tem uma conta?{" "}
          <Link href='/signin'>
            <Text className='text-sm underline '>Faça login</Text>
          </Link>
        </Text>
      </View>
    </AuthLayout>
  );
}
