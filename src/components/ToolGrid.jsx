import ToolCard from "./ToolCard";

function ToolGrid({ tools }) {
  if (tools.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">🔭</span>
        <h3>Sin resultados</h3>
        <p>No se encontraron herramientas con ese criterio. Probá con otro filtro o búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="tool-grid">
      {tools.map((tool, index) => (
        <ToolCard key={tool.id} tool={tool} index={index} />
      ))}
    </div>
  );
}

export default ToolGrid;
