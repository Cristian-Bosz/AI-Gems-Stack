import { useState } from "react";
import { getDomainFromUrl, getLogoUrl } from "../utils/logoUtils";

function ToolCard({ tool, index }) {
  const [logoError, setLogoError] = useState(false);
  const domain = getDomainFromUrl(tool.url);
  const logoUrl = getLogoUrl(domain);

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="tool-card"
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <div className="card-header">
        <div className="card-icon-container">
          {!logoError && logoUrl ? (
            <img 
              src={logoUrl} 
              alt={`${tool.name} logo`} 
              className="card-logo"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="card-icon">{tool.icon}</span>
          )}
        </div>
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
