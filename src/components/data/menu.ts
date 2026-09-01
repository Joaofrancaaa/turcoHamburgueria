// data/menu.ts
export type MenuItem = {
    name: string;
    description?: string;
    price: number;
    highlight?: boolean;
  };
  
  export type MenuCategory = {
    id: string;
    title: string;
    items: MenuItem[];
  };
  
  export const MENU_DATA: MenuCategory[] = [
    {
      id: "burgers",
      title: "Hambúrgueres", //
      items: [
        {
          name: "Burak Burger", //[cite: 2]
          description: "Hambúrguer artesanal coberto com queijo prato derretido, maionese de mel, um queijo coalho tostadinho e lambuzado no mel, tiras de bacon, fatias de banana da terra fritas e um macio pão tostado na manteiga de leite ou manteiga de bacon.", //[cite: 2]
          price: 54.75, //[cite: 2]
          highlight: true,
        },
        {
          name: "Youssef Burger", //[cite: 2]
          description: "Hambúrguer artesanal coberto com queijo cheddar derretido, molho rosé, picles, bacon, cebola caramelizada e um macio pão tostado na manteiga de leite ou manteiga de bacon.", //[cite: 2]
          price: 40.75, //[cite: 2]
        },
        {
          name: "Burger do Turco", //[cite: 2]
          description: "Duplo hambúrguer artesanal coberto com queijos cheddar e provolone derretidos, maionese de mel, tiras de bacon, forrado com rúcula e alface americana...", //[cite: 2]
          price: 59.75, //[cite: 2]
        }
      ],
    },
    {
      id: "porcoes",
      title: "Porções", //[cite: 2]
      items: [
        {
          name: "Palitos de Queijos", //[cite: 2]
          description: "Uma caneca com 4 Palitos de Queijos empanados e fritos, e ainda acompanha um potinho de doce de leite...", //[cite: 2]
          price: 35.75, //[cite: 2]
        },
        {
          name: "Torresmo no Mel", //[cite: 2]
          description: "São 3 Torresmos no Rolo com um toque especial de mel, que da um contraste perfeito no sabor.", //[cite: 2]
          price: 50.75, //[cite: 2]
        }
      ],
    },
    {
      id: "bebidas",
      title: "Bebidas Alcoólicas", //[cite: 2]
      items: [
        {
          name: "Chopp Brahma (300ml)", //[cite: 2]
          price: 12.90, //[cite: 2]
        },
        {
          name: "Heineken (600ml)", //[cite: 2]
          price: 18.00, //[cite: 2]
        }
      ]
    }
  ];