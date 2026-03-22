export type Product = {
    id: string;
    name: string;
    price: number;
    category: string;
    badge?: string;
    fabric: string;
    sizes: string[];
    colors: { name: string; hex: string; image: string }[];
    description: string;
  }
  
  export const products: Product[] = [
    {
      id: 'slip-classic',
      name: 'Slip Classic',
      price: 28.00,
      category: 'Romper',
      badge: 'New',
      fabric: 'Інтерлок / Інтерлок начісний',
      sizes: ['50', '56', '62'],
      colors: [
        { name: 'Ментол',      hex: '#8BBFB0', image: '/images/products/slip-mint.jpg' },
        { name: 'Персик',      hex: '#E8C4A8', image: '/images/products/slip-peach.jpg' },
        { name: 'Айворі',      hex: '#F2EAD8', image: '/images/products/slip-ivory.jpg' },
        { name: 'Темна пудра', hex: '#B07A82', image: '/images/products/slip-dusty-pink.jpg' },
      ],
      description: 'М\'який слип для немовлят з натурального інтерлоку. Зручні кнопки по всій довжині для легкого перевдягання. Закриті ніжки зберігають тепло. Тонкий принт ручної роботи.',
    },
    {
      id: 'slip-sport',
      name: 'Slip Sport',
      price: 32.00,
      category: 'Romper',
      badge: 'New',
      fabric: 'Футер',
      sizes: ['56', '62', '68', '74', '80', '86'],
      colors: [
        { name: 'Сірий',  hex: '#9E9E9E', image: '/images/products/slip2-grey.jpg' },
        { name: 'Чорний', hex: '#2C2C2C', image: '/images/products/slip2-black.jpg' },
        { name: 'Хакі',   hex: '#7A8C5E', image: '/images/products/slip2-khaki.jpg' },
      ],
      description: 'Слип з натурального футеру для активних малюків. Зручні кнопки по всій довжині. Закриті ніжки зберігають тепло. Принт може змінюватись.',
    },
    {
      id: 'suit-kids',
      name: 'Костюм Дитячий',
      price: 45.00,
      category: 'Set',
      badge: 'New',
      fabric: 'Футер',
      sizes: ['86', '92', '98', '104', '110'],
      colors: [
        { name: 'Жовтий',    hex: '#F5D76E', image: '/images/products/suit-yellow.jpg' },
        { name: 'М\'ята',    hex: '#8BBFB0', image: '/images/products/suit-mint.jpg' },
        { name: 'Синій',     hex: '#5B7FA6', image: '/images/products/suit-blue.jpg' },
        { name: 'Блакитний', hex: '#A8C8E8', image: '/images/products/suit-lightblue.jpg' },
      ],
      description: 'Зручний дитячий костюм з м\'якого футеру. Підходить для активних ігор та прогулянок. Принт може змінюватись.',
    },
  ]