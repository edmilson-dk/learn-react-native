import { Button } from "@/components/button";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { linkStorage } from "@/storage/link-storage";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleAdd = async () => {
    try {
      if (!category) {
        return Alert.alert("Categoria", "Selecione uma categoria para o link.");
      }

      if (!name.trim()) {
        return Alert.alert("Nome", "Informe um nome válido para o link.");
      }

      if (!url.trim()) {
        return Alert.alert("URL", "Informe uma URL válida para o link.");
      }

      await linkStorage.save({
        id: new Date().getTime().toString(),
        name: name.trim(),
        url: url.trim(),
        category,
      });

      Alert.alert("Sucesso", "Link adicionado com sucesso!", [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível adicionar o link.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name='arrow-back' size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>

      <Categories selected={category} onChange={setCategory} />

      <View style={styles.form}>
        <Input placeholder='Nome' onChangeText={setName} />
        <Input
          placeholder='URL'
          onChangeText={setUrl}
          keyboardType='url'
          autoCapitalize='none'
        />
        <Button title='Adicionar' onPress={handleAdd} />
      </View>
    </View>
  );
}
