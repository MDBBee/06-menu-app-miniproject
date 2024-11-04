import MenuItem from './MenuItem';

function Menu({ menuItems }) {
  return (
    <div className="section-center">
      {menuItems.map((Item) => (
        <MenuItem key={Item.id} {...Item} />
      ))}
    </div>
  );
}
export default Menu;
