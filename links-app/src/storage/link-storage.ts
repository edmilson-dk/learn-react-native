import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "@linksave:links";

export type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};

async function get(): Promise<LinkStorage[]> {
  const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
  const links: LinkStorage[] = storage ? JSON.parse(storage) : [];
  return links;
}

async function save(link: LinkStorage): Promise<void> {
  try {
    const links = await get();
    links.push(link);
    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(links));
  } catch (error) {
    throw error;
  }
}

async function remove(id: string): Promise<void> {
  try {
    const links = await get();
    const filteredLinks = links.filter((link) => link.id !== id);
    await AsyncStorage.setItem(
      LINKS_STORAGE_KEY,
      JSON.stringify(filteredLinks),
    );
  } catch (error) {
    throw error;
  }
}

export const linkStorage = {
  get,
  save,
  remove,
};
