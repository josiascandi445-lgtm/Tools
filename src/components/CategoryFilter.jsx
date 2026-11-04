export default function CategoryFilter({ categories, active, counts, onChange }) {
  return (
    <div id="categories" className="filters" role="group" aria-label="Filter by category">
      {categories.map((c) => (
        <button
          key={c.id}
          type="button"
          className={`chip ${active === c.id ? 'is-active' : ''}`}
          aria-pressed={active === c.id}
          onClick={() => onChange(c.id)}
        >
          {c.label}
          <span className="chip__count">{counts[c.id] ?? 0}</span>
        </button>
      ))}
    </div>
  );
}
