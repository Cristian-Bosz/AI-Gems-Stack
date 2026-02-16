function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-pill ${active === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat === "All" ? "✦ Todas" : cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
