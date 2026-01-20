import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { LinkStorage, linkStorage } from "@/storage/link-storage";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [category, setCategory] = useState(categories[0].name);
  const [targetLink, setTargetLink] = useState<LinkStorage | null>(null);

  const getLinks = async () => {
    try {
      const links = await linkStorage.get();

      const filteredLinks = links.filter((link) => link.category === category);
      setLinks(filteredLinks);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os links.");
    }
  };

  const onDetails = (id: string) => {
    const link = links.find((link) => link.id === id) || null;
    setTargetLink(link);
    setShowModal(true);
  };

  const deleteLink = async () => {
    try {
      await linkStorage.remove(targetLink?.id || "");
      getLinks();
      setShowModal(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível excluir o link.");
    }
  };

  const onDelete = async () => {
    try {
      Alert.alert("Excluir link", "Tem certeza que deseja excluir este link?", [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          style: "destructive",
          onPress: async () => {
            await deleteLink();
          },
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível excluir o link.");
    }
  };

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category]),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name='add' size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories selected={category} onChange={setCategory} />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => onDetails(item.id)}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={showModal} animationType='slide'>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>{targetLink?.category}</Text>

              <TouchableOpacity onPress={() => setShowModal(false)}>
                <MaterialIcons
                  name='close'
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>{targetLink?.name}</Text>
            <Text style={styles.modalUrl}>{targetLink?.url}</Text>

            <View style={styles.modalFooter}>
              <Option
                name='Excluir'
                icon='delete'
                variant='secondary'
                onPress={onDelete}
              />
              <Option name='Abrir' icon='link' />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
