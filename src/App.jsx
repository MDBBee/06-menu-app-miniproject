import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';

const allCategories = ['all', ...new Set(menu.map((m) => m.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterCat = (cat) => {
    if (cat === 'all') {
      setMenuItems(menu);
      return;
    }
    const newMenuItems = menu.filter((item) => item.category === cat);
    setMenuItems(newMenuItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text={'our menu'} />
        <Categories categories={categories} filterCat={filterCat} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
