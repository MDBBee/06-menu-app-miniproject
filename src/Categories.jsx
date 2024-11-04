function Categories({ categories, filterCat }) {
  return (
    <div className="btn-container">
      {categories.map((cat) => (
        <button
          type="button"
          className="btn"
          key={cat}
          onClick={() => {
            filterCat(cat);
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
export default Categories;
