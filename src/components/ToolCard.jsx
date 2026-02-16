function ToolCard({ tool, index }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="tool-card"
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <div className="card-header">
        <span className="card-icon">{tool.icon}</span>
        <span className="card-badge">{tool.category}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{tool.name}</h3>
        <p className="card-description">{tool.description}</p>
      </div>
      <div className="card-footer">
        <span className="card-link-text">
          Abrir <span className="card-arrow">→</span>
        </span>
      </div>
    </a>
  );
}

export default ToolCard;
