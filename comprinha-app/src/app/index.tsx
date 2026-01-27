import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";

const onboardingSteps = [
  {
    image: require("../assets/images/onboarding-0.png"),
    title: "Bem vindo ao Comprinha!",
    description:
      "O mercado da cidade, no celular. Faça suas compras de forma rápida e prática!",
  },
  {
    image: require("../assets/images/onboarding-1.png"),
    title: "Compre do seu sofá",
    description:
      "Escolha os produtos do supermercado favorito da sua cidade sem sair de casa. Praticidade na palma da mão!",
  },
  {
    image: require("../assets/images/onboarding-2.png"),
    title: "Mercados locais",
    description:
      "Conectamos você aos melhores supermercados da sua região. Apoie o comércio local com facilidade!",
  },
  {
    image: require("../assets/images/onboarding-3.png"),
    title: "Entrega na sua porta",
    description:
      "Receba suas compras fresquinhas em casa. Rápido, prático e sem complicação!",
  },
];

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.replace("/signup");
    }
  };

  const handleSkip = () => {
    router.replace("/signup");
  };

  const currentContent = onboardingSteps[currentStep];

  return (
    <View className='h-screen bg-white flex justify-start items-center'>
      <View className='h-full pt-20'>
        <View className='flex flex-col items-center justify-center px-6'>
          {/* Imagem com animação */}
          <Animated.View
            key={`image-${currentStep}`}
            entering={SlideInRight.springify().damping(15)}
            exiting={SlideOutLeft.springify().damping(15)}
            className={cn("w-64 h-64 mb-8", {
              "h-[200px]": currentStep === 0,
            })}
          >
            <Image
              source={currentContent.image}
              className={cn("w-full object-cover h-64", {
                "max-h-[200px]": currentStep === 0,
              })}
            />
          </Animated.View>

          {/* Título com animação */}
          <Animated.Text
            key={`title-${currentStep}`}
            entering={FadeInUp.delay(200).springify()}
            exiting={FadeOut.duration(200)}
            className='text-2xl text-gray-700 font-bold text-center mb-4'
          >
            {currentContent.title}
          </Animated.Text>

          {/* Descrição com animação */}
          <Animated.Text
            key={`description-${currentStep}`}
            entering={FadeInUp.delay(300).springify()}
            exiting={FadeOut.duration(200)}
            className='text-gray-500 text-center leading-relaxed text-base font-medium'
          >
            {currentContent.description}
          </Animated.Text>
        </View>

        {/* Indicadores com animação */}
        <Animated.View
          entering={FadeIn.delay(400)}
          className='flex flex-row justify-center gap-2 mt-8'
        >
          {onboardingSteps.map((_, index) => (
            <Pressable
              key={index}
              onPress={() => setCurrentStep(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? "bg-emerald-600 w-6"
                  : "bg-muted-foreground/30 w-2.5"
              }`}
            />
          ))}
        </Animated.View>

        {/* Botões com animação */}
        <Animated.View
          entering={FadeInDown.delay(500).springify()}
          className='px-6 pt-20 pb-8 space-y-3 absolute bottom-20 w-full'
        >
          <Button
            onPress={handleNext}
            size='lg'
            className='w-full text-base font-semibold rounded-xl'
          >
            <Text className='text-white font-semibold text-base'>
              {currentStep === onboardingSteps.length - 1
                ? "Começar"
                : "Próximo"}
            </Text>
          </Button>

          {currentStep < onboardingSteps.length - 1 && (
            <Animated.View
              key={`skip-${currentStep}`}
              entering={FadeIn.delay(100)}
              exiting={FadeOut.duration(150)}
            >
              <Button
                onPress={handleSkip}
                variant='ghost'
                className='w-full py-3 text-muted-foreground text-sm font-medium hover:text-foreground transition-colors'
              >
                <Text>Pular</Text>
              </Button>
            </Animated.View>
          )}
        </Animated.View>
      </View>
    </View>
  );
}
