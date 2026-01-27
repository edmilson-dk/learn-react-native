import { Product, Supermarket } from "@/types/types";

export const supermarkets: Supermarket[] = [
  {
    id: "1",
    name: "Supermercado Bom Preço",
    logo: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=200&h=200&fit=crop",
    rating: 4.8,
    isOpen: true,
    minimumOrder: 30,
    featured: true,
    totalRating: 390,
  },
  {
    id: "2",
    name: "Mercado Central",
    logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop",
    rating: 4.5,
    isOpen: true,
    minimumOrder: 25,
    featured: true,
    totalRating: 124,
  },
  {
    id: "3",
    name: "Economia Total",
    logo: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=200&h=200&fit=crop",
    rating: 4.2,
    isOpen: false,
    minimumOrder: 20,
    featured: true,
    totalRating: 110,
  },
  {
    id: "4",
    name: "Mercadinho da Vila",
    logo: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=200&h=200&fit=crop",
    rating: 4.9,
    isOpen: true,
    minimumOrder: 15,
    featured: false,
    totalRating: 109,
  },
  {
    id: "5",
    name: "Mercadinho da Vila",
    logo: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=200&h=200&fit=crop",
    rating: 4.9,
    isOpen: true,
    minimumOrder: 15,
    featured: false,
    totalRating: 109,
  },
  {
    id: "6",
    name: "Mercadinho da Vila",
    logo: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=200&h=200&fit=crop",
    rating: 4.9,
    isOpen: true,
    minimumOrder: 15,
    featured: false,
    totalRating: 109,
  },
];

export const products: Product[] = [
  // Alimentos - Arroz
  {
    id: "1",
    name: "Arroz Tipo 1 5kg",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop",
    price: 24.9,
    promoPrice: 19.9,
    unit: "pacote",
    category: "alimentos",
    subcategory: "arroz",
    supermarketId: "1",
  },
  {
    id: "15",
    name: "Arroz Integral 1kg",
    image:
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=200&h=200&fit=crop",
    price: 12.9,
    unit: "pacote",
    category: "alimentos",
    subcategory: "arroz",
    supermarketId: "1",
  },
  {
    id: "16",
    name: "Arroz Parboilizado 5kg",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop",
    price: 22.9,
    unit: "pacote",
    category: "alimentos",
    subcategory: "arroz",
    supermarketId: "1",
  },
  // Alimentos - Feijão
  {
    id: "2",
    name: "Feijão Carioca 1kg",
    image:
      "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=200&h=200&fit=crop",
    price: 8.9,
    unit: "pacote",
    category: "alimentos",
    subcategory: "feijao",
    supermarketId: "1",
  },
  {
    id: "17",
    name: "Feijão Preto 1kg",
    image:
      "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=200&h=200&fit=crop",
    price: 9.5,
    promoPrice: 7.9,
    unit: "pacote",
    category: "alimentos",
    subcategory: "feijao",
    supermarketId: "1",
  },
  {
    id: "18",
    name: "Feijão Fradinho 500g",
    image:
      "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=200&h=200&fit=crop",
    price: 6.9,
    unit: "pacote",
    category: "alimentos",
    subcategory: "feijao",
    supermarketId: "1",
  },
  // Alimentos - Massas
  {
    id: "3",
    name: "Macarrão Espaguete 500g",
    image:
      "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=200&h=200&fit=crop",
    price: 4.5,
    unit: "pacote",
    category: "alimentos",
    subcategory: "massas",
    supermarketId: "1",
  },
  {
    id: "19",
    name: "Macarrão Parafuso 500g",
    image:
      "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=200&h=200&fit=crop",
    price: 5.2,
    unit: "pacote",
    category: "alimentos",
    subcategory: "massas",
    supermarketId: "1",
  },
  {
    id: "20",
    name: "Lasanha Pronta 600g",
    image:
      "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=200&h=200&fit=crop",
    price: 18.9,
    promoPrice: 14.9,
    unit: "un",
    category: "alimentos",
    subcategory: "massas",
    supermarketId: "1",
  },
  // Alimentos - Cereais
  {
    id: "21",
    name: "Aveia em Flocos 500g",
    image:
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=200&h=200&fit=crop",
    price: 8.9,
    unit: "pacote",
    category: "alimentos",
    subcategory: "cereais",
    supermarketId: "1",
  },
  {
    id: "22",
    name: "Granola 800g",
    image:
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=200&h=200&fit=crop",
    price: 15.9,
    unit: "pacote",
    category: "alimentos",
    subcategory: "cereais",
    supermarketId: "1",
  },
  // Bebidas - Refrigerantes
  {
    id: "4",
    name: "Refrigerante Cola 2L",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&h=200&fit=crop",
    price: 9.9,
    promoPrice: 7.9,
    unit: "garrafa",
    category: "bebidas",
    subcategory: "refrigerantes",
    supermarketId: "1",
  },
  {
    id: "23",
    name: "Refrigerante Guaraná 2L",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&h=200&fit=crop",
    price: 8.9,
    unit: "garrafa",
    category: "bebidas",
    subcategory: "refrigerantes",
    supermarketId: "1",
  },
  {
    id: "24",
    name: "Refrigerante Laranja Lata",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&h=200&fit=crop",
    price: 4.5,
    unit: "un",
    category: "bebidas",
    subcategory: "refrigerantes",
    supermarketId: "1",
  },
  // Bebidas - Sucos
  {
    id: "5",
    name: "Suco de Laranja 1L",
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=200&h=200&fit=crop",
    price: 6.5,
    unit: "caixa",
    category: "bebidas",
    subcategory: "sucos",
    supermarketId: "1",
  },
  {
    id: "25",
    name: "Suco de Uva Integral 1L",
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=200&h=200&fit=crop",
    price: 12.9,
    promoPrice: 9.9,
    unit: "garrafa",
    category: "bebidas",
    subcategory: "sucos",
    supermarketId: "1",
  },
  // Hortifruti - Frutas
  {
    id: "6",
    name: "Banana Prata",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop",
    price: 5.9,
    unit: "kg",
    category: "hortifruti",
    subcategory: "frutas",
    supermarketId: "1",
  },
  {
    id: "26",
    name: "Maçã Gala",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&h=200&fit=crop",
    price: 9.9,
    unit: "kg",
    category: "hortifruti",
    subcategory: "frutas",
    supermarketId: "1",
  },
  {
    id: "27",
    name: "Laranja Pera",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=200&h=200&fit=crop",
    price: 4.9,
    promoPrice: 3.9,
    unit: "kg",
    category: "hortifruti",
    subcategory: "frutas",
    supermarketId: "1",
  },
  // Hortifruti - Verduras
  {
    id: "8",
    name: "Alface Crespa",
    image:
      "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=200&h=200&fit=crop",
    price: 3.5,
    unit: "un",
    category: "hortifruti",
    subcategory: "verduras",
    supermarketId: "1",
  },
  {
    id: "28",
    name: "Couve Manteiga",
    image:
      "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=200&h=200&fit=crop",
    price: 4.5,
    unit: "maço",
    category: "hortifruti",
    subcategory: "verduras",
    supermarketId: "1",
  },
  // Hortifruti - Legumes
  {
    id: "7",
    name: "Tomate Italiano",
    image:
      "https://images.unsplash.com/photo-1546470427-227c7369a9b5?w=200&h=200&fit=crop",
    price: 8.9,
    promoPrice: 6.9,
    unit: "kg",
    category: "hortifruti",
    subcategory: "legumes",
    supermarketId: "1",
  },
  {
    id: "29",
    name: "Cenoura",
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200&h=200&fit=crop",
    price: 5.9,
    unit: "kg",
    category: "hortifruti",
    subcategory: "legumes",
    supermarketId: "1",
  },
  {
    id: "30",
    name: "Batata Inglesa",
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200&h=200&fit=crop",
    price: 6.9,
    unit: "kg",
    category: "hortifruti",
    subcategory: "legumes",
    supermarketId: "1",
  },
  // Limpeza - Detergentes
  {
    id: "9",
    name: "Detergente 500ml",
    image:
      "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=200&h=200&fit=crop",
    price: 2.9,
    unit: "un",
    category: "limpeza",
    subcategory: "detergentes",
    supermarketId: "1",
  },
  {
    id: "31",
    name: "Detergente Lava Louças 500ml",
    image:
      "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=200&h=200&fit=crop",
    price: 8.9,
    promoPrice: 6.9,
    unit: "un",
    category: "limpeza",
    subcategory: "detergentes",
    supermarketId: "1",
  },
  // Limpeza - Sabão
  {
    id: "10",
    name: "Sabão em Pó 1kg",
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=200&h=200&fit=crop",
    price: 12.9,
    promoPrice: 9.9,
    unit: "pacote",
    category: "limpeza",
    subcategory: "sabao",
    supermarketId: "1",
  },
  {
    id: "32",
    name: "Sabão Líquido 3L",
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=200&h=200&fit=crop",
    price: 24.9,
    unit: "galão",
    category: "limpeza",
    subcategory: "sabao",
    supermarketId: "1",
  },
  // Higiene - Papel
  {
    id: "11",
    name: "Papel Higiênico 12un",
    image:
      "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=200&h=200&fit=crop",
    price: 18.9,
    unit: "pacote",
    category: "higiene",
    subcategory: "papel",
    supermarketId: "1",
  },
  {
    id: "33",
    name: "Papel Toalha 2un",
    image:
      "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=200&h=200&fit=crop",
    price: 8.9,
    unit: "pacote",
    category: "higiene",
    subcategory: "papel",
    supermarketId: "1",
  },
  // Higiene - Sabonete
  {
    id: "12",
    name: "Sabonete 90g",
    image:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=200&h=200&fit=crop",
    price: 2.5,
    unit: "un",
    category: "higiene",
    subcategory: "sabonete",
    supermarketId: "1",
  },
  {
    id: "34",
    name: "Sabonete Líquido 250ml",
    image:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=200&h=200&fit=crop",
    price: 9.9,
    unit: "un",
    category: "higiene",
    subcategory: "sabonete",
    supermarketId: "1",
  },
  // Açougue - Aves
  {
    id: "13",
    name: "Frango Inteiro",
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=200&h=200&fit=crop",
    price: 15.9,
    unit: "kg",
    category: "acougue",
    subcategory: "aves",
    supermarketId: "1",
  },
  {
    id: "35",
    name: "Peito de Frango",
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=200&h=200&fit=crop",
    price: 19.9,
    promoPrice: 16.9,
    unit: "kg",
    category: "acougue",
    subcategory: "aves",
    supermarketId: "1",
  },
  {
    id: "36",
    name: "Coxa e Sobrecoxa",
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=200&h=200&fit=crop",
    price: 12.9,
    unit: "kg",
    category: "acougue",
    subcategory: "aves",
    supermarketId: "1",
  },
  // Açougue - Bovinos
  {
    id: "14",
    name: "Carne Moída",
    image:
      "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=200&h=200&fit=crop",
    price: 32.9,
    promoPrice: 28.9,
    unit: "kg",
    category: "acougue",
    subcategory: "bovinos",
    supermarketId: "1",
  },
  {
    id: "37",
    name: "Picanha",
    image:
      "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=200&h=200&fit=crop",
    price: 69.9,
    unit: "kg",
    category: "acougue",
    subcategory: "bovinos",
    supermarketId: "1",
  },
  {
    id: "38",
    name: "Alcatra",
    image:
      "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=200&h=200&fit=crop",
    price: 45.9,
    promoPrice: 39.9,
    unit: "kg",
    category: "acougue",
    subcategory: "bovinos",
    supermarketId: "1",
  },
  // Açougue - Suínos
  {
    id: "39",
    name: "Lombo Suíno",
    image:
      "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=200&h=200&fit=crop",
    price: 24.9,
    unit: "kg",
    category: "acougue",
    subcategory: "suinos",
    supermarketId: "1",
  },
  {
    id: "40",
    name: "Costela Suína",
    image:
      "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=200&h=200&fit=crop",
    price: 18.9,
    promoPrice: 15.9,
    unit: "kg",
    category: "acougue",
    subcategory: "suinos",
    supermarketId: "1",
  },
];

export const categoryLabels: Record<string, string> = {
  alimentos: "Alimentos",
  bebidas: "Bebidas",
  hortifruti: "Hortifruti",
  limpeza: "Limpeza",
  higiene: "Higiene",
  acougue: "Açougue",
  outros: "Outros",
};

export const subcategories: Record<
  string,
  { id: string; name: string; icon: string }[]
> = {
  alimentos: [
    { id: "arroz", name: "Arroz", icon: "🍚" },
    { id: "feijao", name: "Feijão", icon: "🫘" },
    { id: "massas", name: "Massas", icon: "🍝" },
    { id: "cereais", name: "Cereais", icon: "🥣" },
    { id: "enlatados", name: "Enlatados", icon: "🥫" },
    { id: "oleos", name: "Óleos", icon: "🫒" },
    { id: "acucar", name: "Açúcar e Adoçantes", icon: "🧂" },
    { id: "farinhas", name: "Farinhas", icon: "🌾" },
  ],
  bebidas: [
    { id: "refrigerantes", name: "Refrigerantes", icon: "🥤" },
    { id: "sucos", name: "Sucos", icon: "🧃" },
    { id: "agua", name: "Águas", icon: "💧" },
    { id: "cervejas", name: "Cervejas", icon: "🍺" },
    { id: "vinhos", name: "Vinhos", icon: "🍷" },
    { id: "energeticos", name: "Energéticos", icon: "⚡" },
  ],
  hortifruti: [
    { id: "frutas", name: "Frutas", icon: "🍎" },
    { id: "verduras", name: "Verduras", icon: "🥬" },
    { id: "legumes", name: "Legumes", icon: "🥕" },
    { id: "temperos", name: "Temperos", icon: "🌿" },
  ],
  limpeza: [
    { id: "detergentes", name: "Detergentes", icon: "🧴" },
    { id: "sabao", name: "Sabão", icon: "🧼" },
    { id: "desinfetantes", name: "Desinfetantes", icon: "🧹" },
    { id: "multiuso", name: "Multiuso", icon: "✨" },
  ],
  higiene: [
    { id: "papel", name: "Papéis", icon: "🧻" },
    { id: "sabonete", name: "Sabonetes", icon: "🧼" },
    { id: "shampoo", name: "Shampoo", icon: "🧴" },
    { id: "dental", name: "Higiene Bucal", icon: "🦷" },
  ],
  acougue: [
    { id: "bovinos", name: "Bovinos", icon: "🥩" },
    { id: "suinos", name: "Suínos", icon: "🐷" },
    { id: "aves", name: "Aves", icon: "🍗" },
    { id: "peixes", name: "Peixes", icon: "🐟" },
    { id: "embutidos", name: "Embutidos", icon: "🌭" },
  ],
  outros: [{ id: "outros", name: "Outros", icon: "📦" }],
};
