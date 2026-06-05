import screenshot1 from '../assets/screenshots/screenshot-1.jpg';
import screenshot2 from '../assets/screenshots/screenshot-2.jpg';
import screenshot3 from '../assets/screenshots/screenshot-3.jpg';
import screenshot4 from '../assets/screenshots/screenshot-4.jpg';
import screenshot5 from '../assets/screenshots/screenshot-5.jpg';

export const projects = [
  {
    id: 'vital-context',
    title: 'Vital Context',
    description:
      'Многостраничный сайт о здоровье (главная, исследования, FAQ). Узнай все о бадах и тестостероне',
    screenshot: screenshot1,
    url: 'https://testosterone-website.vercel.app/',
    tags: ['React', 'React Router', 'Vite', 'CSS-анимации'],
    category: 'classic',
  },
  {
    id: 'polymath',
    title: 'Полиматия как сила',
    description:
      'Лендинг для психолога Старостина Сергея Викторовича о ценности широты мышления и междисциплинарности',
    screenshot: screenshot2,
    url: 'https://sergey-is-a-psychologist.vercel.app/',
    tags: ['React', 'Vite', 'CSS'],
    category: 'classic',
  },
  {
    id: 'base-shop',
    title: 'BASE — магазин одежды',
    description:
      'SPA-магазин одежды: каталоги кроссовок и одежды с фильтрами, страница товара, избранное,корзина и оформление заказа.',
    screenshot: screenshot3,
    url: 'https://base-clothes-shop.vercel.app/',
    tags: ['React', 'React Router', 'localStorage', 'Vite'],
    category: 'classic',
  },
  {
    id: 'avito-research',
    title: 'Avito Research',
    description:
      'Сервис, целью которого является аналитика просмотров полученных за день на платформе Авито. Сервис скажет тебе напрямую : а) в каком городе продавать для максимального охвата. б) как выглядит продающее название объявления. в) насколько просмотров ты можешь рассчитывать',
    screenshot: screenshot4,
    url: 'https://avito-search-bj9e.vercel.app/',
    tags: ['React', 'React Router', 'Tailwind', 'Vite'],
    category: 'ai',
  },
  {
    id: 'habitgrid',
    title: 'Baki gym',
    description:
      'Трекер привычек как дневник дисциплины: задачи, отметки по дням, тепловая карта года и дашборд прогресса. Главное - дисциплина',
    screenshot: screenshot5,
    url: 'https://calendar-liart-ten.vercel.app/',
    tags: ['React', 'React Router', 'localStorage', 'Vite'],
    category: 'ai',
  },
];
