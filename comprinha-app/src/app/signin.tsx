import { Image, Text, View } from "react-native";

import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "expo-router";

export default function SignIn() {
  return (
    <AuthLayout>
      <CardHeader></CardHeader>
      <CardHeader className='bg-emerald-600 w-full pt-12 pb-10'>
        <View>
          <Image
            source={require("../assets/images/logo.png")}
            className='mx-auto h-40 w-40 sm:mx-0'
          />
        </View>
        <CardTitle className='text-center text-xl text-white'>
          Bem vindo de volta!
        </CardTitle>
        <CardDescription className='text-center text-white'>
          O mercado da cidade, no celular
        </CardDescription>
      </CardHeader>
      <View className='gap-6 px-6 w-full rounded-t-3xl bg-white h-full py-6'>
        <View className='gap-6'>
          <View className='gap-1.5'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              placeholder='exemplo@gmail.com'
              keyboardType='email-address'
              autoComplete='email'
              autoCapitalize='none'
              returnKeyType='next'
              submitBehavior='submit'
            />
          </View>

          <View className='gap-1.5'>
            <Label htmlFor='password'>Senha</Label>
            <Input id='password' secureTextEntry returnKeyType='send' />

            <Button
              variant='link'
              size='sm'
              className='ml-auto h-4 px-1 py-0 sm:h-4'
              onPress={() => {
                // TODO: Navigate to forgot password screen
              }}
            >
              <Text className='font-normal leading-4 text-gray-500 underline'>
                Esqueci minha senha
              </Text>
            </Button>
          </View>
          <Button className='w-full h-12 bg-emerald-600 active:bg-emerald-700'>
            <Text className=' text-white font-semibold text-base'>Entrar</Text>
          </Button>
        </View>
        <Text className='text-center text-sm flex items-center justify-center gap-1 '>
          Novo por aqui?{" "}
          <Link href='/signup'>
            <Text className='text-sm underline '>Crie uma conta</Text>
          </Link>
        </Text>
      </View>
    </AuthLayout>
  );
}
